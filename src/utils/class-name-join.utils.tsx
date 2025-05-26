export function classNameJoin(...arr: (string | boolean | undefined | null)[]): string {
  return arr.filter((s) => s !== true && s != false && s !== undefined && s !== null).join(' ');
}
