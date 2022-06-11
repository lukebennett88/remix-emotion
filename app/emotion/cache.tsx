import createCache from "@emotion/cache";

export const key = "spark-web";

export function createEmotionCache() {
  return createCache({ key });
}
