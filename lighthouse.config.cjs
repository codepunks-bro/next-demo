module.exports = {
  extends: "lighthouse:default",
  settings: {
    formFactor: "desktop",
    screenEmulation: {
      mobile: false,
      width: 1280,
      height: 720,
      deviceScaleFactor: 1,
      disabled: false,
    },
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
    },
    skipAudits: ["uses-http2"],
  },
};

