import { createContext } from "react";

// ===========================================================================
// Server-side rendering context.
// ===========================================================================

export type ServerStyleContextData = {
  key: string;
  ids: Array<string>;
  css: string;
};

export const ServerStyleContext =
  createContext<Array<ServerStyleContextData> | null>(null);

// ===========================================================================
// Server-side rendering context.
// ===========================================================================

export type ClientStyleContextData = {
  reset: () => void;
};

export const ClientStyleContext = createContext<ClientStyleContextData | null>(
  null
);
