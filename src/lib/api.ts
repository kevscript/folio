import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import markdownToHtml from "./markdownToHtml";

export type Project = {
  id: string;
  name: string;
  source: string;
  demo: string;
  year: number;
  active: boolean;
  stack: string[];
  description: string;
  content: string;
  slug: string;
};

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Project;
}

export async function getProjects() {
  const slugs = getProjectSlugs();

  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const realSlug = slug.replace(/\.md$/, "");
      const fullPath = join(projectsDirectory, `${realSlug}.md`);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      const project = {
        ...data,
        slug: realSlug,
        content: await markdownToHtml(content || ""),
      } as Project;

      return project;
    })
  );

  return projects.sort((pA, pB) =>
    Number(pA.year) > Number(pB.year) ? -1 : 1
  );
}
