/** Build a map: startId -> { endId: weight }. Default weight 1 for missing. */
export function buildWeightMap(weights: any[]) {
  const map: Record<string, any> = {};
  (weights || []).forEach((w) => {
    if (!map[w.startId]) map[w.startId] = {};
    map[w.startId][w.endId] = Math.max(0, Number(w.weight)) || 1;
  });
  return map;
}

/** Pick one location using startWeight (default 1). Higher = more likely as Start. */
export function weightedPickStart(locList: any[]) {
  const list = (locList || []).filter((l) => l?.id && l?.label);
  if (list.length === 0) return null;
  let total = 0;
  const weighted = list.map((loc) => {
    const w = Math.max(0, Number(loc.startWeight)) || 1;
    total += w;
    return { loc, w, cumul: 0 };
  });
  weighted.forEach((x, i) => {
    x.cumul = (weighted[i - 1]?.cumul ?? 0) + x.w;
  });
  const r = Math.random() * total;
  const chosen = weighted.find((x) => r < x.cumul);
  return chosen ? chosen.loc : list[0];
}

/** Pick one location from the list, excluding excludeIds, using weights for startId. */
export function weightedPick(locList: any[], excludeIds: string[], weightMap: Record<string, any>, startId: string) {
  const allowed = locList.filter((loc) => !excludeIds.includes(loc.id));
  if (allowed.length === 0) return null;
  const weightsForStart = weightMap[startId] || {};
  let total = 0;
  const weighted = allowed.map((loc) => {
    const w = weightsForStart[loc.id] !== undefined ? weightsForStart[loc.id] : 1;
    total += w;
    return { loc, w, cumul: 0 };
  });
  weighted.forEach((x, i) => {
    x.cumul = (weighted[i - 1]?.cumul ?? 0) + x.w;
  });
  const r = Math.random() * total;
  const chosen = weighted.find((x) => r < x.cumul);
  return chosen ? chosen.loc : allowed[0];
}

export function pickRandom(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}