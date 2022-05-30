import { promises as fs } from "fs";
import path from "path";
import readingTime from "reading-time";
import matter from "gray-matter";

import { WorkItem } from "@/types/work-item";

export const getWorkItems = async (): Promise<WorkItem[]> => {
  const result: WorkItem[] = [];
  const dir = path.join(process.cwd(), "./src/content/work-items");
  const workItems = await fs.readdir(dir);

  await Promise.all(
    workItems.map(async (workItem) => {
      const workItemPath = path.join(dir, workItem, "index.mdx");
      const slug = workItem.replace(".mdx", "");
      const fileContent = await fs.readFile(workItemPath, "utf8");

      const {
        content,
        data: { title, description, date, progress },
      } = matter(fileContent);

      result.push({
        progress,
        title,
        description,
        date,
        slug,
        readingTime: readingTime(content).text,
      });
    })
  );

  return result.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
};

export const getRecentWork = async (count: number): Promise<WorkItem[]> => {
  const workItems = await getWorkItems();

  const recentWorkItems = workItems
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
    .slice(0, count);

  return recentWorkItems;
};

export const readWorkItem = async (slug: string) => {
  const workItemPath = path.join(
    process.cwd(),
    "./src/content/work-items",
    slug,
    "index.mdx"
  );
  return await fs.readFile(workItemPath, "utf8");
};
