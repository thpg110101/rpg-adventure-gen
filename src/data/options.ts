/**
 * Your RPG adventure options.
 * Edit the categories and options below; the generator will pick randomly from each category.
 */

/** A single location (same list used for start, end, alternate). */
export interface Location {
  id: string;
  label: string;
  description?: string;
  /** Higher = more likely to be picked as Start. Default 1. */
  startWeight?: number;
  /** Latitude for proximity (alternates near End). */
  lat?: number;
  /** Longitude for proximity. */
  lon?: number;
}

/** When start is startId, endId has this weight for being chosen as end. Omitted pairs = weight 1. (Alternate is by proximity to End.) */
export interface LocationWeight {
  startId: string;
  endId: string;
  weight: number;
}

/** Canadian locations and nearby areas from backup data. */
export const locations: Location[] = [
  { id: "winnipeg", label: "Winnipeg", startWeight: 2, lat: 49.895537, lon: -97.138458 },
  { id: "brandon", label: "Brandon", startWeight: 1, lat: 49.851114, lon: -99.960892 },
  { id: "dauphin", label: "Dauphin", startWeight: 1, lat: 51.153509, lon: -100.04425 },
  { id: "portage", label: "Portage", startWeight: 1, lat: 49.971821, lon: -98.287971 },
  { id: "gimli", label: "Gimli", startWeight: 1, lat: 50.632313, lon: -96.988108 },
  { id: "kenora", label: "Kenora", startWeight: 1, lat: 54.024594, lon: -89.161819 },
  { id: "red-lake", label: "Red Lake", startWeight: 1, lat: 51.018938, lon: -93.827362 },
  { id: "dryden", label: "Dryden", startWeight: 1, lat: 49.785698, lon: -92.835846 },
  { id: "sioux-lookout", label: "Sioux Lookout", startWeight: 1, lat: 50.100096, lon: -91.919027 },
  { id: "thunder-bay", label: "Thunder Bay", startWeight: 2, lat: 48.406414, lon: -89.259796 },
  { id: "yorkton", label: "Yorkton", startWeight: 1, lat: 51.212045, lon: -102.461243 },
  { id: "regina", label: "Regina", startWeight: 1, lat: 50.447973, lon: -104.615876 },
  { id: "saskatoon", label: "Saskatoon", startWeight: 1, lat: 52.131802, lon: -106.660767 },
  { id: "thompson", label: "Thompson", startWeight: 2, lat: 55.743347, lon: -97.863464 },
  { id: "norway-house", label: "Norway House", startWeight: 1, lat: 53.966667, lon: -97.833333 },
  { id: "gillam", label: "Gillam", startWeight: 1, lat: 56.344984, lon: -94.706223 },
  { id: "churchill", label: "Churchill", startWeight: 1, lat: 58.76931, lon: -94.173684 },
  { id: "island-lake", label: "Island Lake", startWeight: 1, lat: 53.894309, lon: -94.702216 },
  { id: "the-pas", label: "The Pas", startWeight: 1, lat: 53.822417, lon: -101.240515 },
  { id: "flin-flon", label: "Flin Flon", startWeight: 1, lat: 54.766903, lon: -101.842518 },
  { id: "lynn-lake", label: "Lynn Lake", startWeight: 1, lat: 56.852727, lon: -101.04538 },
];

/** Weights from backup data: when Start is startId, endId is this much more likely as End. */
export const locationWeights: LocationWeight[] = [
  { startId: "winnipeg", endId: "brandon", weight: 3 },
];

export interface AdventureOption {
  label: string;
  description?: string;
}

export interface OptionCategory {
  id: string;
  title: string;
  options: AdventureOption[];
}

export const adventureOptions: OptionCategory[] = [
  {
    id: "weather",
    title: "Weather",
    options: [
      { label: "Gusting wind from the South" },
      { label: "Gusting wind from the North" },
      { label: "Gusting wind from the West" },
      { label: "Gusting wind from the East" },
      { label: "Wind calm" },
    ],
  },
  {
    id: "vis-dep-airport",
    title: "VIS (DEP AIRPORT)",
    options: [
      { label: "MIN IFR", description: "Review ifr departure/AOV" },
      { label: "MVFR", description: "3SM, OCV020" },
      { label: "LDG min < vis < TO min" },
    ],
  },
  {
    id: "vis-destination-airport",
    title: "VIS (DESTINATION AIRPORT)",
    options: [
      { label: "CAP VIS", description: "Review APR ban" },
      { label: "MVFR", description: "3SM, OCV020" },
      { label: "50% CAP VIS" },
    ],
  },
  {
    id: "passengers",
    title: "passengers",
    options: [
      { label: "Full load/Min gas" },
      { label: "No pax/Ferry flight" },
      { label: "Some pax/3 hour gas" },
    ],
  },
  {
    id: "emergencies",
    title: "emergencies",
    options: [
      { label: "Engine fire on the ground" },
      { label: "Engine fire during flight" },
      { label: "Wing overheat" },
      { label: "Smoke in aircraft" },
      { label: "Fire in flight" },
      { label: "Emergency Descent", description: "Pick an associated emerg/Unpressurized flight" },
      { label: "Low cabin pressure malfunction", description: "Unpressurized flight" },
      { label: "High cabin pressure malfunction" },
      { label: "Excessive rate of cabin pressurization" },
      { label: "Pressurization/AC system malfunction", description: "Unpressurized flight" },
      { label: "Chip detector light on" },
      { label: "Low oil pressure" },
      { label: "High oil temperature" },
      { label: "Engine failure during take off-aborted" },
      { label: "Engine failure during take off-continued", description: "at or above v1" },
      { label: "Engine failure during flight" },
      { label: "Engine prop uncoupling" },
      { label: "Engine control malfunction" },
      { label: "No response to power lever movement" },
      { label: "Double engine failure", description: "In flight relight" },
      { label: "Aborted air start" },
      { label: "Boost pump failure", description: "Fuel balancing procedure" },
      { label: "Hot/Hung start", description: "Only on the ground" },
      { label: "Single Generator failure" },
      { label: "Double Generator failure" },
      { label: "Total electrical failure" },
      { label: "Inverter Inoperative" },
      { label: "Electrical bus failure" },
      { label: "Battery disconnect" },
      { label: "Battery fault" },
      { label: "Popped circuit breaker" },
      { label: "Excessive ammeter indication" },
      { label: "G650 abnormal procedures - LOI" },
      { label: "G650 abnormal procedures - APR downgrade" },
      { label: "G650 abnormal procedures - loss of com" },
      { label: "G650 abnormal procedures - loss of VLOC" },
      { label: "G650 abnormal procedures - loss of dme tuning" },
      { label: "One or two ldg gear fail to retract", description: "After take off" },
      { label: "All ldg gear fail to retract" },
      { label: "Single ldg gear fail to extend" },
      { label: "All landing gear fail to extend" },
      { label: "Single hydraulic pump failure" },
      { label: "Hydraulic system failure" },
      { label: "Landing gear emerg extension" },
      { label: "Gear up landings" },
      { label: "NWS Hydraulic malfunction" },
      { label: "NWS electrical malfunction" },
      { label: "Cabin/cargo door warning light on" },
      { label: "Emergency exits", description: "think of a scenario that needs to open EE" },
      { label: "Cracked windshield" },
    ],
  },
  {
    id: "when",
    title: "when",
    options: [
      { label: "On the ground" },
      { label: "10 minutes after takeoff" },
      { label: "Halfway point" },
      { label: "10 minutes before approach" },
      { label: "In the missed" },
      { label: "Right after rotation" },
      { label: "On final - before the FAF" },
      { label: "On short final - after the FAF" },
    ],
  },
  
];
