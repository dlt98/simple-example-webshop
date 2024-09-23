export function generateRandomKey(prefix = "") {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
}
