
import { WordData } from "../types";
import { searchLocalDictionary, getRandomGlobalWords } from "../utils/dictionary";

// Simple ID generator
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

// PURE OFFLINE GENERATOR
// No longer uses GoogleGenAI to ensure standalone mobile capability and speed.
export const generateVocabulary = async (scene: string): Promise<WordData[]> => {
  console.log("Generating offline content for:", scene);

  // Simulate a short "thinking" delay for better UX (so the user sees the cute loading animation)
  await new Promise(resolve => setTimeout(resolve, 800));

  // 1. Try Precise & Fuzzy Local Search
  const localData = searchLocalDictionary(scene);
  
  if (localData && localData.length > 0) {
    // If we have specific data, return it (assigning new IDs to ensure React renders them fresh)
    return localData.map(item => ({ ...item, id: generateId() }));
  }

  // 2. Fallback: If scenario not found (e.g. user typed "Spaceship" but we only have daily scenes),
  // return a random set of words from the global dictionary to keep the app functional and fun.
  // This prevents the "White Screen" or "Error" state.
  console.log("Scene not found, serving random vocabulary mix.");
  const randomMix = getRandomGlobalWords(20);
  
  // Add a small disclaimer or specific ID to indicate these are random (optional, purely internal)
  return randomMix.map(item => ({ ...item, id: generateId() }));
};
