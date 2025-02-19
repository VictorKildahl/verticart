export function decodeAndCapitalize(string: string) {
  const decoded = decodeURIComponent(string);
  return decoded.charAt(0).toUpperCase() + decoded.slice(1);
}
