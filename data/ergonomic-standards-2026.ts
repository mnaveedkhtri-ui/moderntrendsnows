export interface ErgonomicStandardRow {
  heightLabel: string;
  heightCm: number;
  heightIn: number;
  chairSeatIn: number;
  seatedDeskIn: number;
  seatedDeskCm: number;
  standingDeskIn: number;
  standingDeskCm: number;
  deltaFrom29InDesk: number;
  footrestNeededCm: number;
  monitorViewingDistIn: string;
}

function round1(n: number): number {
  return Math.round(n * 10) / 10;
}

const HEIGHTS_CM = [152, 157, 163, 168, 173, 175, 178, 183, 188, 193];

export const ERGONOMIC_STANDARDS_2026: ErgonomicStandardRow[] = HEIGHTS_CM.map((cm) => {
  const rawInches = cm / 2.54;
  const feet = Math.floor(rawInches / 12);
  const remIn = Math.round(rawInches % 12);
  const effectiveIn = rawInches + 0.5; // typical 0.5" indoor shoe allowance
  const chairSeatIn = round1(effectiveIn * 0.252);
  const seatedDeskIn = round1(chairSeatIn + 9.5);
  const standingDeskIn = round1(effectiveIn * 0.618);
  const deltaFrom29 = round1(29.0 - seatedDeskIn);
  const footrestNeededCm = deltaFrom29 > 0.5 ? round1(deltaFrom29 * 2.54) : 0;

  return {
    heightLabel: `${feet}'${remIn}"`,
    heightCm: cm,
    heightIn: round1(rawInches),
    chairSeatIn,
    seatedDeskIn,
    seatedDeskCm: round1(seatedDeskIn * 2.54),
    standingDeskIn,
    standingDeskCm: round1(standingDeskIn * 2.54),
    deltaFrom29InDesk: deltaFrom29,
    footrestNeededCm,
    monitorViewingDistIn: '20" - 28" (51 - 71 cm)',
  };
});
