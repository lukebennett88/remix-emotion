import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import type { EntryContext } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

import { createEmotionCache, key } from "./emotion/cache";
import { ServerStyleContext } from "./emotion/context";
import { renderStatic } from "./emotion/ssr";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return (async () => {
    const cache = createEmotionCache();

    const { extractCriticalToChunks } = createEmotionServer(cache);

    const content = (
      <CacheProvider value={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    );

    const html = renderToString(
      <ServerStyleContext.Provider value={undefined}>
        {content}
      </ServerStyleContext.Provider>
    );

    const chunks = extractCriticalToChunks(html);

    let markup = renderToString(
      <ServerStyleContext.Provider value={chunks.styles}>
        {content}
      </ServerStyleContext.Provider>
    );

    responseHeaders.set("Content-Type", "text/html");

    const { css, ids } = await renderStatic(markup);

    markup = markup.replace(
      /<\/head>/,
      `<style data-emotion="${key} ${ids.join(" ")}">${css}</style></head>`
    );

    return new Response(`<!DOCTYPE html>${markup}`, {
      status: responseStatusCode,
      headers: responseHeaders,
    });
  })();
}
