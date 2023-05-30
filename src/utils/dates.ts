export function getDate(date: string): Date {
  return new Date(date);
}

export function humanize(date: string): string {
  return getDate(date).toLocaleDateString();
}
