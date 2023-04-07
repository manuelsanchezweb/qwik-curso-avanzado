// https://thesimpsonsquoteapi.glitch.me/quotes?count=50

import { Character } from "~/types/types";

export async function fetchSimpsons(): Promise<Character[]> {
  const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=50";
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const results = await response.json();
  return results;
}
