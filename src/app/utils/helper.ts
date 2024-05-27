export class Helper {
  static isEmpty(...str: string[]): boolean {
    return str.some((s) => s.trim() === '');
  }
}
