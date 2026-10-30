# Generates the SVG figures for the /bucknell pages as Astro components:
#   src/components/CurriculumMap.astro, LPFigure.astro, UnitFigures.astro
# Text is measured against Cooper Hewitt so every label fits its box at 1:1.
# Usage (from the repo root):  pip install pillow numpy fonttools brotli
#                              python3 scripts/bucknell-figs.py
import math, os, sys, tempfile
import numpy as np
from PIL import ImageFont
from fontTools.ttLib import TTFont

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = tempfile.mkdtemp()
for w in ('Book', 'Medium', 'Semibold'):
    f = TTFont(f'{REPO}/public/fonts/CooperHewitt-{w}.woff2')
    f.flavor = None
    f.save(f'{FONTS}/CH-{w}.ttf')
_f = {}
def font(weight, size):
    key = (weight, size)
    if key not in _f:
        _f[key] = ImageFont.truetype(f"{FONTS}/CH-{weight}.ttf", size)
    return _f[key]

def width(text, weight='Book', size=15, tracking=0.0):
    return font(weight, size).getlength(text) + tracking * size * len(text)

def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

LBL = dict(weight='Medium', size=13, tracking=0.14)

def lbl(x, y, s, inv=False, anchor='start'):
    assert width(s, **LBL) > 0
    cls = 't-lbl inv' if inv else 't-lbl'
    return f'<text class="{cls}" x="{x:.1f}" y="{y:.1f}" text-anchor="{anchor}">{esc(s.upper())}</text>'

def txt(x, y, s, size=15, weight='Book', inv=False, anchor='start', extra=''):
    w = {'Book': 400, 'Medium': 500, 'Semibold': 600}[weight]
    fill = ' inv' if inv else ''
    return (f'<text class="t{fill}" x="{x:.1f}" y="{y:.1f}" text-anchor="{anchor}" '
            f'style="font-size:{size}px;font-weight:{w}"{extra}>{esc(s)}</text>')

def arrow_right(x, y):
    return f'<path class="head" d="M{x-8:.1f},{y-4:.1f} L{x:.1f},{y:.1f} L{x-8:.1f},{y+4:.1f} Z" />'

def arrow_down(x, y):
    return f'<path class="head" d="M{x-4:.1f},{y-8:.1f} L{x:.1f},{y:.1f} L{x+4:.1f},{y-8:.1f} Z" />'

# ---------------------------------------------------------------- Curriculum map
COURSES = {
    '102': ('ANOP 102', 'Spreadsheet Modeling', True),
    '203': ('ANOP 203', 'Programming (Python)', False),
    '330': ('ANOP 330', 'Machine Learning', True),
    '270': ('ANOP 270', 'Data Visualization', False),
    '350': ('ANOP 350 · 370', 'Predict & Prescribe', False),
    '400': ('ANOP 400', 'Practicum', True),
    '302': ('ANOP 302', 'Financial Modeling', True),
    '242': ('ANOP 242', 'SQL, Cloud & GenAI', False),
}

LINKS = {'102': '/bucknell/anop-102/', '302': '/bucknell/anop-302/', '330': '/bucknell/anop-330/', '400': '/bucknell/anop-400/'}

def box(key, x, y, w, h, pad=14, max_title=15):
    code, title, mine = COURSES[key]
    size = max_title
    while width(title, 'Semibold', size) > w - 2 * pad and size > 13:
        size -= 1
    assert width(title, 'Semibold', size) <= w - 2 * pad, (title, w)
    assert width(code.upper(), **LBL) <= w - 2 * pad, (code, w)
    rect = (f'<rect class="{"mine" if mine else "other"}" x="{x+0.5:.1f}" y="{y+0.5:.1f}" '
            f'width="{w-1:.1f}" height="{h-1:.1f}" />')
    inner = (rect + lbl(x + pad, y + 24, code, inv=mine)
             + txt(x + pad, y + 45, title, size=size, weight='Semibold', inv=mine))
    if key in LINKS:
        return f'<a href="{LINKS[key]}" aria-label="{esc(code)}: {esc(title)}">{inner}</a>'
    return inner

def curriculum_wide():
    W, g = 860, 24
    bw = (W - 3 * g) / 4
    cx = [i * (bw + g) for i in range(4)]
    r1, r2, r3, h = 30, 110, 214, 60
    out = []
    for i, head in enumerate(['Foundations', 'Methods', 'Advanced', 'Capstone']):
        out.append(lbl(cx[i], 14, head))
    out += [box('102', cx[0], r1, bw, h), box('203', cx[0], r2, bw, h),
            box('330', cx[1], r1, bw, h), box('270', cx[1], r2, bw, h),
            box('350', cx[2], r2, bw, h), box('400', cx[3], r1, bw, h)]
    sy = r1 + 30
    # spine 102 -> 330 -> 400
    out.append(f'<path class="spine" d="M{bw:.1f},{sy} H{cx[1]-8:.1f}" />' + arrow_right(cx[1], sy))
    out.append(f'<path class="spine" d="M{cx[1]+bw:.1f},{sy} H{cx[3]-8:.1f}" />' + arrow_right(cx[3], sy))
    # 203 -> 330 and 350/370 -> 400
    ey = r1 + 46
    out.append(f'<path class="link" d="M{bw:.1f},{r2+30} H{bw+12:.1f} V{ey} H{cx[1]-8:.1f}" />' + arrow_right(cx[1], ey))
    out.append(f'<path class="link" d="M{cx[2]+bw:.1f},{r2+30} H{cx[2]+bw+12:.1f} V{ey} H{cx[3]-8:.1f}" />' + arrow_right(cx[3], ey))
    out.append(f'<path class="sep" d="M0,{r3-18} H{W}" />')
    out.append(lbl(cx[0], r3 + 35, 'Electives'))
    out += [box('302', cx[1], r3, bw, h), box('242', cx[2], r3, bw, h)]
    H = r3 + h + 2
    return W, H, '\n'.join(out)

def curriculum_tall():
    W, g = 340, 16
    bw = (W - g) / 2
    xl, xr = 0, bw + g
    h, step = 56, 84
    y = [0, step, 2 * step, 3 * step]
    out = [box('102', xl, y[0], bw, h, pad=12), box('203', xr, y[0], bw, h, pad=12),
           box('330', xl, y[1], bw, h, pad=12), box('270', xr, y[1], bw, h, pad=12),
           box('350', xr, y[2], bw, h, pad=12), box('400', xl, y[3], bw, h, pad=12)]
    sx = 28
    out.append(f'<path class="spine" d="M{sx},{y[0]+h} V{y[1]-8}" />' + arrow_down(sx, y[1]))
    out.append(f'<path class="spine" d="M{sx},{y[1]+h} V{y[3]-8}" />' + arrow_down(sx, y[3]))
    jx = bw - 30
    for top, target in [(y[0], y[1]), (y[2], y[3])]:
        mid = top + h + 14
        out.append(f'<path class="link" d="M{xr+bw/2:.1f},{top+h} V{mid} H{jx:.1f} V{target-8}" />' + arrow_down(jx, target))
    sep = y[3] + h + 26
    out.append(f'<path class="sep" d="M0,{sep} H{W}" />')
    out.append(lbl(0, sep + 26, 'Electives'))
    e1 = sep + 40
    out += [box('302', xl, e1, bw, h, pad=12), box('242', xr, e1, bw, h, pad=12)]
    H = e1 + h + 2
    return W, H, '\n'.join(out)

def svg(W, H, body, title, desc, cls=''):
    return (f'<svg class="{cls}" viewBox="0 0 {W:.0f} {H:.0f}" width="{W:.0f}" height="{H:.0f}" role="img" '
            f'aria-label="{esc(title)}. {esc(desc)}">\n{body}\n</svg>')

# ---------------------------------------------------------------- LP figure (bike shop)
def lp_figure(W=340, H=290, mini=False):
    if mini:
        L, R, T, B = 10, W - 10, 12, H - 12
    else:
        L, R, T, B = 40, W - 10, 26, H - 44
    cmax, tmax = 90, 45
    X = lambda c: L + (R - L) * c / cmax
    Y = lambda t: B - (B - T) * t / tmax
    out = []
    region = [(0, 0), (80, 0), (48, 24), (30, 30), (0, 30)]
    out.append('<polygon class="region" points="' + ' '.join(f'{X(c):.1f},{Y(t):.1f}' for c, t in region) + '" />')
    def seg(c0, t0, c1, t1, cls='cline'):
        return f'<path class="{cls}" d="M{X(c0):.1f},{Y(t0):.1f} L{X(c1):.1f},{Y(t1):.1f}" />'
    out.append(seg(20, 45, 80, 0))       # assembly: 3C + 4T = 240
    out.append(seg(0, 40, 90, 10))       # painting: C + 3T = 120
    out.append(seg(0, 30, 90, 30))       # Trail demand: T = 30
    out.append(seg(16.5, 45, 84, 0, 'iso'))  # every plan worth $10,080: 120C + 180T = 10,080
    ox, oy = X(48), Y(24)
    out.append(f'<rect class="opt" x="{ox-5:.1f}" y="{oy-5:.1f}" width="10" height="10" />')
    out.append(f'<path class="axis" d="M{L},{T} V{B} H{R}" />')
    if mini:
        return '\n'.join(out)
    for c in (0, 30, 60, 90):
        out.append(txt(X(c), B + 18, str(c), size=14, anchor='middle'))
    for t in (0, 15, 30, 45):
        out.append(txt(L - 8, Y(t) + 5, str(t), size=14, anchor='end'))
    out.append(lbl(R, B + 38, 'Commuters per week', anchor='end'))
    out.append(lbl(L - 30, 12, 'Trails per week'))
    # Line labels, rotated to sit along their lines.
    def along(c0, t0, c1, t1, at, text, side=1, gap=6):
        x0, y0, x1, y1 = X(c0), Y(t0), X(c1), Y(t1)
        ang = math.degrees(math.atan2(y1 - y0, x1 - x0))
        px, py = X(at[0]), Y(at[1])
        nx, ny = math.sin(math.radians(ang)), -math.cos(math.radians(ang))
        px, py = px + side * gap * nx, py + side * gap * ny
        return (f'<text class="t" text-anchor="middle" style="font-size:14px;font-weight:400" '
                f'transform="translate({px:.1f},{py:.1f}) rotate({ang:.1f})">{text}</text>')
    out.append(along(0, 40, 90, 10, (75, 15), 'Painting', side=1))
    out.append(along(20, 45, 80, 0, (66, 10.5), 'Assembly', side=-1, gap=26))
    out.append(txt(X(90), Y(30) - 8, 'Trail demand', size=14, anchor='end'))
    out.append(txt(X(4), Y(5), 'Feasible plans', size=14, weight='Medium'))
    out.append(txt(ox - 12, oy + 20, 'Best: 48 + 24', size=14, weight='Semibold', anchor='end'))
    out.append(txt(ox - 12, oy + 37, '$10,080 a week', size=14, anchor='end'))
    return '\n'.join(out)

# ---------------------------------------------------------------- Mini figures for the 302 units
def mini_frontier(W=260, H=170):
    mu = np.array([0.04, 0.07, 0.09, 0.11])
    sd = np.array([0.06, 0.14, 0.20, 0.26])
    rho = np.array([[1, .1, 0, .1], [.1, 1, .5, .4], [0, .5, 1, .6], [.1, .4, .6, 1]])
    S = np.outer(sd, sd) * rho
    Si = np.linalg.inv(S)
    one = np.ones(4)
    A, Bv, C = one @ Si @ one, one @ Si @ mu, mu @ Si @ mu
    D = A * C - Bv * Bv
    rmin = Bv / A
    rs = np.linspace(rmin, 0.12, 60)
    sig = np.sqrt((A * rs ** 2 - 2 * Bv * rs + C) / D)
    L, R, T, Bt = 10, W - 10, 12, H - 12
    X = lambda s: L + (R - L) * s / 0.28
    Y = lambda r: Bt - (Bt - T) * (r - 0.02) / (0.12 - 0.02)
    out = [f'<path class="axis" d="M{L},{T} V{Bt} H{R}" />']
    pts = ' '.join(f'{X(s):.1f},{Y(r):.1f}' for s, r in zip(sig, rs))
    out.append(f'<polyline class="curve" points="{pts}" />')
    for s, r in zip(sd, mu):
        out.append(f'<rect class="asset" x="{X(s)-4:.1f}" y="{Y(r)-4:.1f}" width="8" height="8" />')
    s0 = math.sqrt(1 / A)
    out.append(f'<rect class="opt" x="{X(s0)-5:.1f}" y="{Y(rmin)-5:.1f}" width="10" height="10" />')
    return '\n'.join(out), (float(s0), float(rmin))

def mini_paths(W=260, H=170, n=20, steps=52, seed=7):
    rng = np.random.default_rng(seed)
    dt = 1 / steps
    z = rng.standard_normal((n, steps))
    logp = np.cumsum((0.05 - 0.02) * dt + 0.2 * math.sqrt(dt) * z, axis=1)
    paths = 100 * np.exp(np.hstack([np.zeros((n, 1)), logp]))
    L, R, T, Bt = 10, W - 10, 12, H - 12
    lo, hi = 55, 165
    X = lambda i: L + (R - L) * i / steps
    Y = lambda p: Bt - (Bt - T) * (min(max(p, lo), hi) - lo) / (hi - lo)
    out = [f'<path class="axis" d="M{L},{T} V{Bt} H{R}" />',
           f'<path class="strike" d="M{L},{Y(100):.1f} H{R}" />']
    for k, p in enumerate(paths):
        pts = ' '.join(f'{X(i):.1f},{Y(v):.1f}' for i, v in enumerate(p))
        out.append(f'<polyline class="{"path-hi" if k == 0 else "path"}" points="{pts}" />')
    above = int((paths[:, -1] > 100).sum())
    return '\n'.join(out), above

# ---------------------------------------------------------------- Mini figures for the 102 and 330 units
def _frame(W, H):
    L, R, T, B = 10, W - 10, 12, H - 12
    return L, R, T, B, (lambda t: L + (R - L) * t), (lambda v: B - (B - T - 8) * v)

def mini_bars(W=260, H=170):
    L, R, T, B, X, Y = _frame(W, H)
    vals = [0.55, 1.0, 0.35, 0.7]
    gap, n = 16, len(vals)
    bw = (R - L - gap * (n + 1)) / n
    out = [f'<path class="axis" d="M{L},{T} V{B} H{R}" />']
    for i, v in enumerate(vals):
        x = L + gap + i * (bw + gap)
        out.append(f'<rect class="{"bar" if v == max(vals) else "bar-lo"}" x="{x:.1f}" y="{Y(v):.1f}" width="{bw:.1f}" height="{B - Y(v):.1f}" />')
    return '\n'.join(out)

def mini_breakeven(W=260, H=170):
    L, R, T, B, X, Y = _frame(W, H)
    fixed, var, price = 0.35, 0.4, 0.95
    xc = fixed / (price - var)
    out = [f'<path class="axis" d="M{L},{T} V{B} H{R}" />',
           f'<polygon class="region" points="{X(xc):.1f},{Y(price * xc):.1f} {X(1):.1f},{Y(price):.1f} {X(1):.1f},{Y(fixed + var):.1f}" />',
           f'<path class="cline" d="M{X(0):.1f},{Y(fixed):.1f} L{X(1):.1f},{Y(fixed + var):.1f}" />',
           f'<path class="curve" d="M{X(0):.1f},{Y(0):.1f} L{X(1):.1f},{Y(price):.1f}" />',
           f'<path class="strike" d="M{X(xc):.1f},{Y(price * xc):.1f} V{B}" />',
           f'<rect class="opt" x="{X(xc) - 5:.1f}" y="{Y(price * xc) - 5:.1f}" width="10" height="10" />']
    return '\n'.join(out)

def mini_bells(W=260, H=170):
    L, R, T, B, X, Y = _frame(W, H)
    xs = np.linspace(0, 1, 80)
    bell = lambda mu, sd: np.exp(-0.5 * ((xs - mu) / sd) ** 2)
    pa = ' '.join(f'{X(x):.1f},{Y(v):.1f}' for x, v in zip(xs, bell(0.38, 0.12)))
    pb = ' '.join(f'{X(x):.1f},{Y(v):.1f}' for x, v in zip(xs, bell(0.64, 0.12)))
    return '\n'.join([f'<path class="axis" d="M{L},{T} V{B} H{R}" />', f'<polyline class="path" points="{pa}" />',
                      f'<polyline class="curve" points="{pb}" />', f'<path class="strike" d="M{X(0.51):.1f},{T} V{B}" />'])

def mini_regression(W=260, H=170, seed=3):
    L, R, T, B, X, Y = _frame(W, H)
    rng = np.random.default_rng(seed)
    x = np.linspace(0.08, 0.92, 12)
    y = 0.2 + 0.6 * x + rng.normal(0, 0.07, 12)
    b, a = np.polyfit(x, y, 1)
    out = [f'<path class="axis" d="M{L},{T} V{B} H{R}" />', f'<path class="curve" d="M{X(0):.1f},{Y(a):.1f} L{X(1):.1f},{Y(a + b):.1f}" />']
    out += [f'<rect class="asset" x="{X(xi) - 4:.1f}" y="{Y(yi) - 4:.1f}" width="8" height="8" />' for xi, yi in zip(x, y)]
    return '\n'.join(out)

def mini_tree(W=260, H=170):
    bw, bh, cx = 46, 22, W / 2
    nodes = {'r': (cx, 12), 'l': (cx - 62, 68), 'rr': (cx + 62, 68), 'll': (cx - 95, 126), 'lr': (cx - 29, 126), 'rl': (cx + 29, 126), 'rrr': (cx + 95, 126)}
    out = []
    for p_, c in [('r', 'l'), ('r', 'rr'), ('l', 'll'), ('l', 'lr'), ('rr', 'rl'), ('rr', 'rrr')]:
        (x1, y1), (x2, y2) = nodes[p_], nodes[c]
        out.append(f'<path class="cline" d="M{x1:.1f},{y1 + bh:.1f} L{x2:.1f},{y2:.1f}" />')
    for k, (x, y) in nodes.items():
        out.append(f'<rect class="{"opt" if k in ("lr", "rrr") else "asset"}" x="{x - bw / 2:.1f}" y="{y:.1f}" width="{bw}" height="{bh}" />')
    return '\n'.join(out)

def mini_errors(W=260, H=170):
    L, R, T, B, X, Y = _frame(W, H)
    train = [56, 36, 32, 30, 30, 30, 26, 26]
    test = [65, 29, 32, 31, 35, 39, 103, 141]
    xd = lambda d: X((d - 1) / 7)
    yv = lambda v: Y(v / 150)
    pt = ' '.join(f'{xd(i + 1):.1f},{yv(v):.1f}' for i, v in enumerate(train))
    pe = ' '.join(f'{xd(i + 1):.1f},{yv(v):.1f}' for i, v in enumerate(test))
    return '\n'.join([f'<path class="axis" d="M{L},{T} V{B} H{R}" />', f'<polyline class="path" points="{pt}" />',
                      f'<polyline class="curve" points="{pe}" />', f'<path class="strike" d="M{xd(2):.1f},{T} V{B}" />',
                      f'<rect class="opt" x="{xd(2) - 5:.1f}" y="{yv(29) - 5:.1f}" width="10" height="10" />'])

def mini_clusters(W=260, H=170, seed=5):
    L, R, T, B, X, Y = _frame(W, H)
    rng = np.random.default_rng(seed)
    out = [f'<path class="axis" d="M{L},{T} V{B} H{R}" />']
    for cx, cy in [(0.24, 0.32), (0.72, 0.28), (0.5, 0.76)]:
        pts = rng.normal([cx, cy], 0.085, (9, 2))
        out += [f'<rect class="asset" x="{X(px) - 4:.1f}" y="{Y(py) - 4:.1f}" width="8" height="8" />' for px, py in pts]
        out.append(f'<rect class="opt" x="{X(cx) - 5:.1f}" y="{Y(cy) - 5:.1f}" width="10" height="10" />')
    return '\n'.join(out)

# ---------------------------------------------------------------- Write components
STYLE_NOTE = '// Generated by scripts/bucknell-figs.py - edit the generator, not the coordinates.'

def write(path, content):
    with open(f'{REPO}/{path}', 'w') as fh:
        fh.write(content)

cw = curriculum_wide()
ct = curriculum_tall()
desc = ('ANOP 102 leads to ANOP 330 and then the ANOP 400 practicum; ANOP 203 also leads to 330, '
        'and ANOP 350 or 370 also leads to 400. Electives include ANOP 302 and 242. '
        'The courses I would teach are 102, 330, 400 and, in year 2, 302.')
write('src/components/CurriculumMap.astro', f'''---
{STYLE_NOTE}
// Where the four courses sit in Bucknell's Business Analytics major (2026-27 catalogue).
---
<figure class="fig curriculum">
  {svg(*cw, 'Where these courses sit in the Business Analytics major', desc, 'fig-wide')}
  {svg(*ct, 'Where these courses sit in the Business Analytics major', desc, 'fig-tall')}
  <figcaption class="muted">Black: the courses I'd teach - each one opens its page. Arrows are prerequisites from the 2026-27 catalogue. ANOP 330, 350 and 370 each need ANOP 203 (Python) and either ANOP 102 or a statistics course.</figcaption>
</figure>
''')

lp = lp_figure()
write('src/components/LPFigure.astro', f'''---
{STYLE_NOTE}
// The ANOP 102 sample class: a bike shop's product mix. 3C + 4T <= 240 (assembly), C + 3T <= 120 (painting), T <= 30.
---
<figure class="fig lp">
  {svg(340, 290, lp, 'The bike shop product-mix problem', 'Feasible plans are bounded by assembly hours, painting hours and Trail demand. The best plan is 48 Commuters and 24 Trails for $10,080 a week, where assembly and painting both run out.')}
  <figcaption class="muted">The best plan sits where assembly and painting both run out. An extra assembly hour adds $36 (for up to 120 more hours), so the $30 assembler pays. An extra painting hour adds only $12, so turn down the $25 painter. Dashed: every plan worth $10,080.</figcaption>
</figure>
''')

f_body, (s0, r0) = mini_frontier()
p_body, above = mini_paths()
lp_mini = lp_figure(260, 170, mini=True)
print('min-variance point', round(s0, 4), round(r0, 4), 'paths above strike', above)
write('src/components/UnitFigure.astro', f'''---
{STYLE_NOTE}
// One small figure per unit of ANOP 302. Illustrative data: the frontier mixes 4 made-up stocks; the paths are 20 simulated years of a $100 stock.
interface Props {{ unit: 1 | 2 | 3 }}
const {{ unit }} = Astro.props;
---
{{unit === 1 && (
  {svg(260, 170, lp_mini, 'A linear program', 'The shaded region holds the feasible plans; the square marks the best one.', 'unit-fig')}
)}}
{{unit === 2 && (
  {svg(260, 170, f_body, 'An efficient frontier', 'Squares are individual stocks; the curve is the best return for each level of risk from mixing them; the larger square is the lowest-risk mix.', 'unit-fig')}
)}}
{{unit === 3 && (
  {svg(260, 170, p_body, 'Simulated stock paths', 'Twenty simulated one-year paths for a $100 stock, with the $100 strike as a dashed line.', 'unit-fig')}
)}}
''')
print('wide', cw[:2], 'tall', ct[:2])

term = {
    '102': [
        ('A pivot table', 'Four segments summed up; the biggest in black.', mini_bars()),
        ('Breakeven', 'Revenue and cost lines cross at the breakeven volume; the wedge past it is profit.', mini_breakeven()),
        ('Two groups', 'Two overlapping distributions, A and B, and the line between them.', mini_bells()),
        ('A fitted line', 'Twelve points and the regression line through them.', mini_regression()),
    ],
    '330': [
        ('Training and held-out error', 'Error by model complexity: the light line keeps falling on training data, the bold line turns up on held-out data; the square marks the best degree.', mini_errors()),
        ('A decision tree', 'A root, two splits and four leaves; the black leaves predict yes.', mini_tree()),
        ('Clusters', 'Three groups of points with their centres in black.', mini_clusters()),
    ],
}
parts = []
for course, figs in term.items():
    for i, (title, desc, fig) in enumerate(figs, 1):
        parts.append("{course === '%s' && unit === %d && (\n  %s\n)}" % (course, i, svg(260, 170, fig, title, desc, 'unit-fig')))
write('src/components/TermFigure.astro', '---\n' + STYLE_NOTE + '\n// One small figure per unit of ANOP 102 and ANOP 330. Illustrative shapes, drawn from made-up numbers.\n'
      "interface Props { course: '102' | '330'; unit: number }\nconst { course, unit } = Astro.props;\n---\n" + '\n'.join(parts) + '\n')
