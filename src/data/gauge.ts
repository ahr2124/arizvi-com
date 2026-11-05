// The gauge class on /uis: is a pair of calipers fit to accept or reject parts against a 0.50 mm band?
// Lengths are in micrometres so the arithmetic stays in whole numbers. Read by the component's frontmatter (the first
// paint) and by its script (every move of a slider), so the two can't drift apart.
export const BAND = 500;      // the drawing allows 0.25 mm either side of nominal
export const AXIS = 500;      // the chart runs 0.50 mm either side of nominal
export const SD_CLASS = 40;   // the class's calipers: 6 x 0.04 / 0.50 = 48%
export const SD_FIXED = 10;   // with a fixture and trained operators: 6 x 0.01 / 0.50 = 12%
export const D_START = 40;    // the part starts 0.04 mm inside the upper limit (1 standard deviation of the class's gauge)

// Upper tail of the standard normal, from the complementary error function (Numerical Recipes' erfc; its fractional
// error is under 1.2e-7 everywhere, so the far tails are right too).
function erfc(x: number) {
  const z = Math.abs(x);
  const t = 1 / (1 + 0.5 * z);
  const r = t * Math.exp(-z * z - 1.26551223 + t * (1.00002368 + t * (0.37409196 + t * (0.09678418 + t * (-0.18628806
    + t * (0.27886807 + t * (-1.13520398 + t * (1.48851587 + t * (-0.82215223 + t * 0.17087277)))))))));
  return x >= 0 ? r : 2 - r;
}
export const tail = (z: number) => 0.5 * erfc(z / Math.SQRT2);

// 6 standard deviations of the gauge as a share of the band, in tenths of a percent (480 = 48%).
export const shareTenths = (sd: number) => Math.round((6 * sd * 1000) / BAND);
// A good part d inside the upper limit reads outside the band this often (the lower limit is included for completeness).
export const fails = (sd: number, d: number) => tail(d / sd) + tail((BAND - d) / sd);
// The AIAG guideline: under 10% acceptable, 10 to 30% may be acceptable, over 30% unacceptable.
export const verdict = (tenths: number) => (tenths < 100 ? 'ok' : tenths <= 300 ? 'marginal' : 'bad');

// 40 -> "0.04", 8 -> "0.008", 240 -> "0.24". `places` forces the decimals (the part's position always shows 2).
export const mm = (um: number, places?: number) =>
  places !== undefined ? (um / 1000).toFixed(places) : (um / 1000).toFixed(3).replace(/0$/, '');
export const pct = (tenths: number) => (tenths % 10 === 0 ? `${tenths / 10}%` : `${(tenths / 10).toFixed(1)}%`);
// A probability as a percentage a person can read: 16%, 2.3%, 0.15%, 0.0032%. Under 1% it keeps 2 significant figures,
// so the percentage and the odds beside it ("about 1 in 678") agree.
export const prob = (p: number) =>
  p >= 0.0995 ? `${Math.round(p * 100)}%`
  : p >= 0.00995 ? `${(p * 100).toFixed(1)}%`
  : p >= 1e-6 ? `${Number((p * 100).toPrecision(2))}%`
  : 'under 0.0001%';
// The same probability as odds: "about 1 in 6", "about 3 in 100,000".
export const odds = (p: number) =>
  p >= 0.4 ? 'about 1 in 2'
  : p >= 1e-3 ? `about 1 in ${Math.round(1 / p).toLocaleString('en-CA')}`
  : p >= 9.5e-6 ? `about ${Math.round(p * 1e5)} in 100,000`
  : p >= 9.5e-7 ? `about ${Math.round(p * 1e6)} in a million`
  : 'under 1 in a million';

// The picture, on a 1000 x 100 canvas: x is micrometres from the lower edge of the axis, y is down.
const X = (v: number) => v + AXIS;
const PEAK = 84;
export function shapes(sd: number, d: number) {
  const x0 = BAND / 2 - d;   // the part's true size, from nominal
  const lo = BAND / 2 * -1, hi = BAND / 2;
  const pts: [number, number][] = [];
  for (let i = 0; i <= 80; i++) {
    const u = -4 + i * 0.1;
    pts.push([X(x0 + u * sd), 100 - PEAK * Math.exp(-0.5 * u * u)]);
  }
  const f = (p: [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(2)}`;
  const curve = `M${f([pts[0][0], 100])} L${pts.map(f).join(' L')} L${f([pts[80][0], 100])} Z`;
  // The readings that land past the upper limit.
  const yAt = (v: number) => 100 - PEAK * Math.exp(-0.5 * ((v - x0) / sd) ** 2);
  const past = pts.filter((p) => p[0] > X(hi));
  const fail = past.length
    ? `M${f([X(hi), 100])} L${f([X(hi), yAt(hi)])} L${past.map(f).join(' L')} L${f([past[past.length - 1][0], 100])} Z`
    : '';
  const z = Math.min(3 * sd, BAND / 2);   // the stretch at each end of the band within 3 standard deviations of a limit
  return {
    curve, fail,
    part: X(x0),
    zoneL: { x: X(lo), w: z }, zoneR: { x: X(hi) - z, w: z },
    safe: { x: X(lo) + z, w: BAND - 2 * z },
  };
}
