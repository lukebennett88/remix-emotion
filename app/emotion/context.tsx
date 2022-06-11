import { createContext } from "react";

// ===========================================================================
// Server-side rendering context.
// ===========================================================================

export type ServerStyleContextData = {
  key: string;
  ids: Array<string>;
  css: string;
};

export const ServerStyleContext = createContext<
  Array<ServerStyleContextData> | undefined
>(undefined);

// ===========================================================================
// Server-side rendering context.
// ===========================================================================

export type ClientStyleContextData = {
  reset: () => void;
};

export const ClientStyleContext = createContext<
  ClientStyleContextData | undefined
>(undefined);
