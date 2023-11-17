export function maxKeyInObject(obj: { [key: string]: number }): string {
    return Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
}