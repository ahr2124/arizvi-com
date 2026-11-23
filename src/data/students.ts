// What students said, quoted exactly as they wrote it (typos, missing full stops and all).
// Evaluation comments are from Waterloo's anonymous Student Course Perceptions (SCP) reports at perceptions.uwaterloo.ca,
// read 11 Nov 2026. `rid` is the SCP response ID, `report` the /details/ page it is on, so any line can be checked.
// The emails are from MSCI 630 students, as quoted on the evidence page of the IIITH teaching statement.
// `where` is the SCP question the comment answers (shown in the label under the quote).
// `excerpt` marks a comment quoted in part: whole sentences, in order, nothing added.

export interface StudentComment {
  text: string;
  course: string;
  term?: string;
  where: string;
  rid?: number;
  report?: number;
  excerpt?: boolean;
}

export const label = (c: StudentComment) => [c.course, c.term, c.where].filter(Boolean).join(' · ');

// The full GBDA 402 comment, kept for reference: it is not shown on the site. Its last 2 sentences (featuredShort)
// open the home page's Teaching section and /teaching, and are the line in the letters.
export const featured: StudentComment = {
  text: "How to be a designer in the real world, Ali showed us real-life examples of what we could be bombarded with after graduation and how to handle it in the best and most efficient way possible. He has taught us all the different career paths that we could discover after graduation with examples of the work we could see in each of the different paths. He showed us how to utilize what we learned in school in the outside world. This is the only class in my 4 years of university that I've attended every single week. I hope Ali continues to teach courses for GBDA because I've learned more in these 12 weeks with Ali than I have in my last 4 years.",
  course: 'GBDA 402', term: 'Winter 2023', where: 'Most important thing learned', rid: 1121749, report: 49962,
};

// The same comment's last 2 sentences: the opener on the home page and on /teaching.
export const featuredShort: StudentComment = {
  ...featured,
  text: "This is the only class in my 4 years of university that I've attended every single week. I hope Ali continues to teach courses for GBDA because I've learned more in these 12 weeks with Ali than I have in my last 4 years.",
  excerpt: true,
};

// One comment for each of the 4 steps, in step order. Each is used once on /teaching, beside the step it shows.
export const stepComments: [StudentComment, StudentComment, StudentComment, StudentComment] = [
  { text: 'The milestone structure of the course allows us to build on the same project and really retain our learnings.', course: 'GBDA 210', term: 'Fall 2021', where: 'Course strengths', rid: 931190, report: 38065 },
  { text: 'Individual meetings with Ali and just him putting in the effort to help all of us become better.', course: 'GBDA 402', term: 'Winter 2023', where: 'What helped me learn', rid: 1121715, report: 49962 },
  { text: 'It was helpful to do real-world research to gain experience, especially through some of our assignments and the final project.', course: 'GBDA 310', term: 'Fall 2023', where: 'What helped me learn', rid: 1172114, report: 55311 },
  { text: 'the instructor and his willingness to adjust delivery and course material in accordance with what students needed', course: 'GBDA 410', term: 'Fall 2023', where: 'What helped me learn', rid: 1225471, report: 55318 },
];

// The rest, across all 6 courses, one comment per point (Ali, 11 Nov 2026: remove the dig at colleagues and any where
// the core point is repeated, keep the strongest). The tenure comment is its first 2 sentences: the rest names a
// colleague, and no one else is named on the site.
export const comments: StudentComment[] = [
  { text: 'We learn a lot in the class. I realized I want to pursue a career in UX because of this class.', course: 'GBDA 210', term: 'Fall 2021', where: 'Course strengths', rid: 931222, report: 38065 },
  { text: "A lot! I didn't know anything about HCI and I really feel like this course taught me the core of what I need to know to do product management or even design work. It was also very inspiring and gave me a lot of ideas for personal projects.", course: 'MSCI 630', term: 'Winter 2022', where: 'Most important thing learned', rid: 986892, report: 42604 },
  { text: 'Ali Rizvi is peak. Give this man tenure immediately.', course: 'GBDA 410', term: 'Fall 2023', where: 'Suggested changes', rid: 1175037, report: 55316, excerpt: true },
  { text: 'He would patiently go through all the materials that I did not understand or had trouble with to the point that sometimes it would go over his lunch time. I really appreciate the time and effort he put for me to grasp the material and stress less over it.', course: 'GBDA 310', term: 'Spring 2024', where: 'What helped me learn', rid: 1273017, report: 60570, excerpt: true },
  { text: 'Ali has made a really good effort to address where traditional UX research fails to consider inclusive communities (disability, gender diversity, etc.) which made the classroom feel very supportive', course: 'MSCI 543', term: 'Spring 2023', where: 'Comment on supportive environment', rid: 1152385, report: 53524 },
  { text: "His level of passion and enthusiasm to teach and also how he would ask the class numerous times if we understood before moving forward with a concept. Even if the class did not audibly say they did not understand, he would still restate the concept for the quieter students in class who aren't vocal about their confusion.", course: 'GBDA 410', term: 'Fall 2023', where: 'What helped me learn', rid: 1175099, report: 55316 },
  { text: 'The background of the professor, working on the Alexa project at Amazon and as a researcher in the HCI lab. He is able to draw from experience in the field. It made the subject matter more understandable for me.', course: 'MSCI 630', term: 'Winter 2023', where: 'What helped me learn', rid: 1107165, report: 52490 },
  { text: "It's okay to be wrong, or rather it's okay to not be perfect, because there's no such thing.", course: 'GBDA 310', term: 'Fall 2023', where: 'Most important thing learned', rid: 1172106, report: 55311 },
  { text: 'I remember you not only delivered why Design Implement and Evaluate was important but also revealed some of the values you possess and how we can develop a product that is in line with our ethics and values.', course: 'MSCI 630', where: 'Email from a student', excerpt: true },
];

// The 2 beside the big one on the home page: what a student took away, and the industry background behind the teaching.
export const homeComments: StudentComment[] = [986892, 1107165].map((rid) => comments.find((c) => c.rid === rid)!);
