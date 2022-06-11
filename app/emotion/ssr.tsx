import { cache } from "@emotion/css";
import createEmotionServer from "@emotion/server/create-instance";

export async function renderStatic(html: string) {
  if (html === undefined) {
    throw new Error("did you forget to return html from renderToString?");
  }
  const { extractCritical } = createEmotionServer(cache);
  return extractCritical(html);
}
