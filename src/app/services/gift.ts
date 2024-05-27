import axios from 'axios';
import { Local } from '@constants/local';
import LocalStorageService from './localStorage';

export class GiftService {
  private static _URL = 'http://10.0.2.2:8000/gifts/';

  static async create(name: string, pricePoints: number, category: string): Promise<void> {
    let accessToken = await LocalStorageService.getItem<string>(Local.token);
    return axios.post(
      this._URL,
      {
        name: name,
        price_points: pricePoints,
        category: category,
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      },
    );
  }
}
