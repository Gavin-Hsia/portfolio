import { getCollection, type CollectionEntry } from 'astro:content';

export type WorkEntry = CollectionEntry<'work'>;
export type ExperienceEntry = CollectionEntry<'experience'>;

/** Clean URL slug for a work entry (strips the .md/.mdx extension if present). */
export const workSlug = (entry: WorkEntry): string => entry.id.replace(/\.mdx?$/, '');

/** Full path to a work entry's detail page. */
export const workHref = (entry: WorkEntry): string => `/work/${workSlug(entry)}`;

const isPublished = <T extends { data: { draft?: boolean } }>(e: T) =>
  import.meta.env.DEV || !e.data.draft;

/** All non-draft work, sorted by `order` then most-recent `date`. */
export async function getWork(): Promise<WorkEntry[]> {
  const items = (await getCollection('work')).filter(isPublished);
  return items.sort((a, b) => {
    const oa = a.data.order ?? Number.MAX_SAFE_INTEGER;
    const ob = b.data.order ?? Number.MAX_SAFE_INTEGER;
    if (oa !== ob) return oa - ob;
    return b.data.date.getTime() - a.data.date.getTime();
  });
}

/** All non-draft experience, most-recent first. */
export async function getExperience(): Promise<ExperienceEntry[]> {
  const items = (await getCollection('experience')).filter(isPublished);
  return items.sort((a, b) => b.data.sortDate.getTime() - a.data.sortDate.getTime());
}

/** Human label for a work entry's context (e.g. "Internship @ Acme"). */
export function contextLabel(data: WorkEntry['data']): string {
  if (data.context === 'internship') {
    return data.company ? `Internship @ ${data.company}` : 'Internship';
  }
  return 'Personal';
}

/** Unique tech tags across a set of work entries, alphabetized. */
export function collectTech(items: WorkEntry[]): string[] {
  const set = new Set<string>();
  for (const item of items) for (const t of item.data.tech) set.add(t);
  return [...set].sort((a, b) => a.localeCompare(b));
}

const STATUS_LABEL: Record<WorkEntry['data']['status'], string> = {
  shipped: 'shipped',
  wip: 'in progress',
  archived: 'archived',
};
export const statusLabel = (s: WorkEntry['data']['status']) => STATUS_LABEL[s];

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
