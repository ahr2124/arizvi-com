# Voice and process notes

How arizvi.com is written and how it gets made. Read this before writing or editing any copy on the site.

## The voice

Drawn from Ali's own copy (About, Teaching, the case studies), the thesis and papers, and how he gives direction.

**Register.** First person, plain, declarative. Sentences carry a turn at the end rather than a flourish at the start. The last clause does the work:

> The company exists because the answer turned out to be commercially interesting, and because the only way to study the deck at scale is to make a lot of them.

> Bodhika Labs is what it took to keep asking the question: a company that calibrates items properly, norms them on Indian students, and gives me a school where teachers and parents bring the research questions rather than the literature.

**Shape of a paragraph.** Claim, then mechanism, then consequence. Open with the situation in one sentence, say what was assumed or missing, say what was built. No throat-clearing, no "In this project I...".

**Contrast pairs.** He sets ideas against each other in one sentence: "designed in large, stable rooms and used in small, moving, improvised ones"; "assess constantly and measure very little"; "an exposition, not a requisition". Use this when there is a real tension; do not manufacture one.

**Lists of three, concrete.** "A van, a classroom, a card table." "Teachers, parents, and players." "A participant, a client, and a metric that moved." Places and people, not abstractions.

**Numbers as facts, not boasts.** "Nine courses... classes of 40 to 180. Students came from nine departments." Impact is stated and left alone. Never "impactful", "passionate", "leverage", "innovative", "excited to", "thrilled".

**Dry closers.** A short sentence at the end that undercuts or redirects: "I also fly." Use sparingly, once per page at most.

**Spelling and vocabulary.** Canadian/British: artefact, programme, behaviour, licence, optimisation, wellbeing (one word). "The literature" as a place research questions come from, contrasted with the field. "Field site" for a school or company. "What the design assumed." "Where good problems take me."

**Titles.** Sentence case. Arrows for a path: "Proteus → Scramble Deck", "Research → Company". Pairs and imperatives for papers: "Embed, don't isolate".

**Academic register** (papers, research statement) is more hedged and precise but keeps the same bones: a bold one-sentence finding, then the explanation. From the Interactive Health paper: "Framing precedes content in stigma-sensitive data communication." "Cultural and linguistic gatekeepers are essential, not optional."

**Facts to keep straight.** Flying is a hobby, never a research direction: no cockpits, flight decks, or "left seat" as the next field site, anywhere. Scramble Deck is the one company. Bodhika Labs is his research lab (with a partner school in Hyderabad), never a company or a commercial output. The research is applied; say so with outputs, not adjectives.

**What he rejects.** Generic template copy ("Claude-slop"), anything that reads as a job request on the site ("Open to..."), dense cards, uppercase tracked labels used decoratively, more text than a reader can grok in a glance. When in doubt, cut.

## Process

- **Content arrives as patches.** Ali writes copy in a separate session and sends `content.patch` (a `git format-patch` mbox). The mbox often includes commits already on `main`; split it with `git mailsplit` and apply only the new ones with `git am`. Delete the patch file after.
- **Media comes from Overleaf via Dropbox.** Overleaf syncs every project to `~/Library/CloudStorage/Dropbox/Apps/Overleaf/<project>/`. Figures for the site are picked from there, sized with Pillow, and saved under `public/media/` (`work/` covers at 1600×1067, `projects/` card backgrounds at 1200 wide, `flying/` videos). Videos over 25 MB are transcoded to 720p (recipe in README). Originals stay in Dropbox.
- **Small changes ship; redesigns get a diff summary first.** Copy edits, media, and layout fixes are built, committed, and pushed straight away. A redesign or structural change is built and committed, then summarised for approval before pushing.
- **Every change is checked at 375, 768 and 1440.** Nothing may scroll horizontally, images keep their ratio, no text under 12px. Ali reviews on a 13-inch MacBook.
- **One typeface, black on white, no colour.** Cooper Hewitt, self-hosted. Rules are 2px above sections and 1px between rows. Pills are the one rounded element.
- **Content stays file-driven.** New work, projects, blog posts and videos are files in `src/content/` or arrays at the top of a page. Templates should not need editing to add content.
