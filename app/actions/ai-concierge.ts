"use server";

import { nanoid } from "@/lib/utils/nanoid";
import {
  DEFAULT_TRAVEL_PROFILE,
  getTravelPersonaMeta,
  type TravelPersonaMeta,
} from "@/lib/state/travel-profile";
import { readTravelProfile } from "@/lib/server/travel-profile";

type ChatMessageRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatMessageRole;
  content: string;
  timestamp: string;
};

export type ConciergeChatState = {
  persona: TravelPersonaMeta;
  messages: ChatMessage[];
  status: "idle" | "processing" | "error";
  error?: string;
};

function formatIsoDate(date = new Date()) {
  return date.toISOString();
}

function createAssistantReply(persona: TravelPersonaMeta, prompt: string): string {
  const blueprint = [
    `🎯 Фокусируемся на профиле «${persona.label}».`,
    `✨ Рекомендация: выберите направление, где ${persona.summary.toLowerCase()}.`,
    `🛠️ Следующий шаг: продолжите в разделе Experiences — мы уже фильтруем подборку по выбранному сценарию.`,
  ];

  return [
    `Спасибо за запрос: «${prompt.trim()}».`,
    blueprint.join(" "),
    "Готов продолжать диалог: расскажите, на каких датах или бюджете стоит сфокусироваться?",
  ].join("\n\n");
}

export async function getInitialChatState(): Promise<ConciergeChatState> {
  const profile = await readTravelProfile();
  const personaMeta = getTravelPersonaMeta(
    profile?.persona ?? DEFAULT_TRAVEL_PROFILE.persona,
  );

  return {
    persona: personaMeta,
    status: "idle",
    messages: [
      {
        id: nanoid(),
        role: "assistant",
        content: `Привет! Я AI Concierge и уже настроен под сценарий «${personaMeta.label}». Расскажите, какой маршрут или настроение вам интересно?`,
        timestamp: formatIsoDate(),
      },
    ],
  };
}

export async function submitConciergeMessage(
  previousState: ConciergeChatState,
  formData: FormData,
): Promise<ConciergeChatState> {
  const prompt = formData.get("prompt");
  if (typeof prompt !== "string" || !prompt.trim()) {
    return {
      ...previousState,
      status: "error",
      error: "Опишите хотя бы пару слов — я смогу помочь точнее.",
    };
  }

  const personaMeta = previousState.persona;
  const userMessage: ChatMessage = {
    id: nanoid(),
    role: "user",
    content: prompt.trim(),
    timestamp: formatIsoDate(),
  };

  const assistantResponse: ChatMessage = {
    id: nanoid(),
    role: "assistant",
    content: createAssistantReply(personaMeta, prompt),
    timestamp: formatIsoDate(),
  };

  return {
    persona: personaMeta,
    status: "idle",
    messages: [...previousState.messages, userMessage, assistantResponse],
  };
}
