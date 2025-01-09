"use client";

import { seasonType } from "@/_types/seasonsType";
import { seasons } from "@/data/seasons";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface ContextProps {
  season: string;
  setSeason: Dispatch<SetStateAction<string>>;
  info: seasonType;
}

export const SeasonContext = createContext({} as ContextProps);

export function SeasonProvider({ children }: { children: ReactNode }) {
  const [season, setSeason] = useState("0");
  const [info, setInfo] = useState(seasons[0]);

  useEffect(() => {
    setInfo(seasons[parseInt(season)]);
  }, [season]);

  return (
    <SeasonContext.Provider value={{ season, setSeason, info }}>
      {children}
    </SeasonContext.Provider>
  );
}
