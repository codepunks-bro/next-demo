"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  type ConciergeChatState,
  submitConciergeMessage,
} from "@/app/actions/ai-concierge";

function formatTimeLabel(timestamp: string) {
  const date = new Date(timestamp);
  return date.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ConciergeChat({ initialState }: { initialState: ConciergeChatState }) {
  const [state, formAction, isPending] = useActionState(
    submitConciergeMessage,
    initialState,
  );

  const formRef = useRef<HTMLFormElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages.length]);

  useEffect(() => {
    if (!isPending) {
      formRef.current?.reset();
      textareaRef.current?.focus();
    }
  }, [isPending]);

  return (
    <div className="grid gap-6">
      <header className="flex flex-col gap-2">
        <span className="text-xs font-semibold tracking-widest text-purple-600 uppercase dark:text-purple-300">
          AI Concierge
        </span>
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Персональный ассистент путешествий
        </h2>
        <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-300">
          Запросы отправляются через React Server Actions. Ответы адаптируются под
          выбранную персону и отображаются мгновенно, без клиентского состояния.
        </p>
      </header>

      <div className="grid gap-4 rounded-3xl border border-zinc-200/70 bg-white/80 p-6 shadow-lg shadow-zinc-200/40 dark:border-zinc-700/60 dark:bg-zinc-950/80">
        <div className="grid gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold tracking-widest text-sky-700 uppercase dark:border-sky-400/30 dark:bg-zinc-900/80 dark:text-sky-200">
            Персона: {state.persona.label}
          </span>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {state.persona.summary}
          </p>
        </div>

        <div className="flex h-[360px] flex-col gap-4 overflow-y-auto rounded-2xl border border-zinc-200/70 bg-white/70 p-4 dark:border-zinc-700/60 dark:bg-zinc-950/70">
          {state.messages.map((message) => (
            <div
              key={message.id}
              className={[
                "max-w-[80%] space-y-1 rounded-2xl px-4 py-3 text-sm shadow-md transition",
                message.role === "assistant"
                  ? "self-start bg-sky-100 text-sky-900 dark:bg-sky-500/10 dark:text-sky-100"
                  : "self-end bg-zinc-900 text-white dark:bg-white/90 dark:text-zinc-900",
              ].join(" ")}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
              <span className="block text-right text-[10px] tracking-widest uppercase opacity-70">
                {message.role === "assistant" ? "Concierge" : "Вы"} ·{" "}
                {formatTimeLabel(message.timestamp)}
              </span>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <form
          ref={formRef}
          action={formAction}
          className="grid gap-3 rounded-2xl border border-zinc-200/70 bg-white/90 p-4 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-950/70"
        >
          <label className="grid gap-2">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              Ваш запрос
            </span>
            <textarea
              ref={textareaRef}
              name="prompt"
              rows={3}
              placeholder="Например: нужны идеи для семейного вояжа в июне с бюджетом до 4000$"
              className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-800 shadow-sm transition focus:border-sky-400 focus:ring-2 focus:ring-sky-200 focus:outline-none disabled:cursor-wait disabled:opacity-60 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/40"
              disabled={isPending}
            />
          </label>
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Ответ формируется на сервере. Статус:{" "}
              <span className="font-medium text-sky-700 dark:text-sky-300">
                {isPending
                  ? "обрабатываем…"
                  : state.status === "error"
                    ? "ошибка"
                    : "готов"}
              </span>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-300/40 transition hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-wait disabled:opacity-70"
            >
              {isPending ? "Генерируем ответ..." : "Отправить запрос"}
            </button>
          </div>
          {state.status === "error" && state.error ? (
            <p className="rounded-xl border border-rose-300/60 bg-rose-50 px-4 py-2 text-xs font-medium text-rose-700 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200">
              {state.error}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
