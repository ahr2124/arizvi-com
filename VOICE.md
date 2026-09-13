# Voice and process notes

How arizvi.com is written and how it gets made. Read this before writing or editing any copy on the site.

## The voice

Drawn from how Ali actually writes: his emails, his chat messages, and the lines on the site he wrote himself ("My teams and I build cool things", "Where good problems take me", "Logbook", "The curious are rewarded", "I love flying. Here's some of it on video."). Not from the papers, which are a different register. The earlier version of this file described a polished, literary voice (contrast pairs, lists of three, dry closers, a turn at the end of every paragraph). That voice read as AI-written to him. Don't write it.

**Register.** First person, plain, direct, a bit informal. Says what he did, what he wants, and why, in that order. Contractions are fine. Sentences can be short and flat. A paragraph doesn't need a punchline.

**How he explains.** Mechanism in a plain causal chain: "As more students take our assessments, our item calibration improves, our Indian norming gets denser, and our measurement precision tightens." Then a one-line summary if it helps: "In other words, ..." / "Overall, ...". Numbered lists whenever there are 2+ points, even inside prose. "First, ... Second, ..." is normal.

**Punctuation and shorthand.** Spaced hyphen for asides ( - ), never an em-dash. Parentheses for specifics: "(back of the napkin: ~12,000 INR)", "(IRT, Indian norms)". Arrows for sequences and paths: "a van -> small homes -> a card table". Digits, not words: 9 courses, ~700 students, 3 patents, 80%. Abbreviations he uses: RQ, PM, HCI, vs., i.e., esp, etc.

**Vocabulary.** PM and research words side by side without apology: shipped, ROI, go-to-market, flywheel, field site, RQ, artefact, validated instrument. Enthusiasm is allowed and plain: "really interesting", "very", "I love", and the occasional exclamation mark. Dry, self-deprecating humour once in a while ("My handwriting resembles a doctor's prescription"). Never "impactful", "passionate", "leverage", "innovative", "excited to", "thrilled".

**What to avoid because it reads as AI.** Em-dashes. Rhythmic lists of three for effect. Sentences built as "X, not Y" (his stated preference: phrase things positively). Aphoristic closers ("Day zero, every day" is his; don't add more of that kind). Extended metaphors carried across paragraphs. "It is" / "does not" where he'd say "it's" / "doesn't". Abstract nouns doing the work ("the assumptions underneath them", "what it took to keep asking the question") where a concrete sentence would do.

**Spelling.** Canadian/British: artefact, programme, behaviour, licence, optimisation, wellbeing (one word); -ize endings are fine (organize, realize), "centre", "learnt".

**Titles.** Sentence case. Arrows for a path: "Proteus → Scramble Deck", "Research → Company". Pairs and imperatives for papers: "Embed, don't isolate".

**Academic register** (papers, research statement) is more careful and precise but keeps the same bones: a bold one-sentence finding, then the explanation. From the Interactive Health paper: "Framing precedes content in stigma-sensitive data communication."

**Facts to keep straight.** Flying is a hobby, never a research direction: no cockpits, flight decks, or "left seat" as the next field site, anywhere. Scramble Deck is the one company. Bodhika Labs is his research lab (with a partner school in Hyderabad), never a company or a commercial output. The research is applied; say so with outputs, not adjectives.

**What he rejects.** Generic template copy ("Claude-slop"), anything that reads as a job request on the site ("Open to..."), dense cards, uppercase tracked labels used decoratively, more text than a reader can grok in a glance. When in doubt, cut.

## Process

- **Content arrives as patches.** Ali writes copy in a separate session and sends `content.patch` (a `git format-patch` mbox). The mbox often includes commits already on `main`; split it with `git mailsplit` and apply only the new ones with `git am`. Delete the patch file after.
- **Media comes from Overleaf via Dropbox.** Overleaf syncs every project to `~/Library/CloudStorage/Dropbox/Apps/Overleaf/<project>/`. Figures for the site are picked from there, sized with Pillow, and saved under `public/media/` (`work/` covers at 1600×1067, `projects/` card backgrounds at 1200 wide, `flying/` videos). Videos over 25 MB are transcoded to 720p (recipe in README). Originals stay in Dropbox.
- **Small changes ship; redesigns get a diff summary first.** Copy edits, media, and layout fixes are built, committed, and pushed straight away. A redesign or structural change is built and committed, then summarised for approval before pushing.
- **Every change is checked at 375, 768 and 1440.** Nothing may scroll horizontally, images keep their ratio, no text under 12px. Ali reviews on a 13-inch MacBook.
- **One typeface, black on white, no colour.** Cooper Hewitt, self-hosted. Rules are 2px above sections and 1px between rows. Pills are the one rounded element.
- **Content stays file-driven.** New work, projects, blog posts and videos are files in `src/content/` or arrays at the top of a page. Templates should not need editing to add content.
