export class Helper {
  static translateCategory(category: string): string {
    switch (category) {
      case 'games':
        return 'Խաղեր';
      case 'tickets':
        return 'Տոմսեր';
      case 'books':
        return 'Գրքեր';
      case 'coupon':
        return 'Կտրոններ';
      default:
        return category;
    }
  }
}
