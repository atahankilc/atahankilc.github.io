// Where the browser sends questions when the twin runs on an LLM.
// This must be YOUR proxy (twin/worker.js on Cloudflare Workers), never api.openai.com:
// GitHub Pages is static, so anything in the browser is public — including keys.
// Leave empty to use the offline intent engine.
window.TWIN_CONFIG = {
  endpoint: "https://atahan-twin.atahankilic-dev.workers.dev",
};
