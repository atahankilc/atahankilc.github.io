// Writes twin/profile.json from assets/content.js, so the site and the LLM share one source of truth.
// usage: node twin/build-profile.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const here = (p) => fileURLToPath(new URL(p, import.meta.url));
const ctx = { window: {} };
vm.runInNewContext(readFileSync(here("../assets/content.js"), "utf8"), ctx);
const c = ctx.window.CONTENT;
const profile = {
  name: c.name, role: c.role, location: c.location, email: c.email, github: c.github, linkedin: c.linkedin,
  availability: c.availability, tagline: c.tagline, about: c.about, now: c.now,
  languages: c.languages, skills: c.skills, education: c.education, experience: c.timeline,
  projects: c.projects.map(({ id, title, kind, when, year, blurb, stack, link, live }) => ({ id, title, kind, when: when || year, blurb, stack, source: link, live, architecture: c.arch[id] })),
};
writeFileSync(here("./profile.json"), JSON.stringify(profile, null, 2) + "\n");
console.log(`profile.json: ${profile.projects.length} projects, ${profile.experience.length} timeline entries`);
