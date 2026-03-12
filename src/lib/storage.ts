export const STORAGE_KEY = 'rpg-adventure-options';
export const LOCATIONS_KEY = 'rpg-adventure-locations';
export const WEIGHTS_KEY = 'rpg-adventure-location-weights';

export function getOptions(defaultOptions: any) {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) {}
  return JSON.parse(JSON.stringify(defaultOptions));
}

export function getLocations(defaultLocations: any) {
  try {
    const saved = localStorage.getItem(LOCATIONS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) {}
  return JSON.parse(JSON.stringify(defaultLocations));
}

export function getLocationWeights(defaultWeights: any) {
  try {
    const saved = localStorage.getItem(WEIGHTS_KEY);
    if (saved) return JSON.parse(saved);
  } catch (_) {}
  return JSON.parse(JSON.stringify(defaultWeights));
}

export function saveAdventureData(options: any, locations: any, weights: any) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(options));
  const locationsToSave = (locations || []).filter((l: any) => (l.label || '').trim());
  localStorage.setItem(LOCATIONS_KEY, JSON.stringify(locationsToSave));
  localStorage.setItem(WEIGHTS_KEY, JSON.stringify(weights || []));
}

export function resetAdventureData() {
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LOCATIONS_KEY);
  localStorage.removeItem(WEIGHTS_KEY);
}

export function exportAdventureDataSnapshot() {
  return {
    options: localStorage.getItem(STORAGE_KEY),
    locations: localStorage.getItem(LOCATIONS_KEY),
    weights: localStorage.getItem(WEIGHTS_KEY),
  };
}

export function importAdventureDataFromSnapshot(data: any) {
  if (!data) return;
  if (data.options) {
    localStorage.setItem(STORAGE_KEY, data.options);
  }
  if (data.locations) {
    localStorage.setItem(LOCATIONS_KEY, data.locations);
  }
  if (data.weights) {
    localStorage.setItem(WEIGHTS_KEY, data.weights);
  }
}