import OpenAI from "openai";
const baseURL = "https://api.aimlapi.com/v1";
const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey,
  baseURL,
  dangerouslyAllowBrowser: true,
});

export default openai;
