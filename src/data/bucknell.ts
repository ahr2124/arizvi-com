// Shared by the school pages. /bucknell is one course in a Moodle-shaped shell since 13 Nov 2026; its content is in
// src/data/bucknell270.ts. The four course pages that read their courses from this file came off the same day.

// Text arrows: → in display type (as in titles), and -> kept in one piece in body text.
export const arrows = (s: string, display = false) => s.replace(/->/g, display ? '→' : '-⁠>');

export const bucknellColours: [string, string] = ['#003865', '#E87722']; // Bucknell blue (text), Bucknell orange (rule)
