import { withEmotionCache } from "@emotion/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import {
  AesteticoStylesheet,
  AESTETICO_REGULAR_URL,
  AESTETICO_SEMIBOLD_URL,
  SparkProvider,
} from "@spark-web/core";
import type { ReactNode } from "react";
import { useContext, useEffect } from "react";

import { Header } from "./components/header";
import { UniversalRemixLink } from "./components/universal-remix-link";
import { ClientStyleContext, ServerStyleContext } from "./emotion/context";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: AESTETICO_REGULAR_URL },
    { rel: "preconnect", href: AESTETICO_SEMIBOLD_URL },
  ];
};

interface DocumentProps {
  children: ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);
    const { sheet } = emotionCache;

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      sheet.container = document.head;
      // re-inject tags
      const tags = sheet.tags;
      sheet.flush();
      tags.forEach((tag) => {
        (sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <SparkProvider linkComponent={UniversalRemixLink}>
            <AesteticoStylesheet />
            <Header />
            {children}
          </SparkProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}
