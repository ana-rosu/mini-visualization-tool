import { TriviaContext } from "./TriviaProvider";
import type { TriviaContextType } from "./TriviaProvider";
import { useContext } from "react";

export const useTrivia = (): TriviaContextType => {
  const context = useContext(TriviaContext);
  if (!context) {
    throw new Error("useTrivia must be used within a TriviaProvider");
  }
  return context;
};
