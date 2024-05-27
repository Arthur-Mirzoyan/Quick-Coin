import axios from 'axios';
import { UserModel } from '@models/user.model';
import { Generator } from '@utils/generator';
import LocalStorageService from './localStorage';
import { Local } from '@constants/local';

export default class RegistrationService {
  private static _baseUrl = 'http://10.0.2.2:8000/users';

  static async sendUserCreationRequest(email: string, password: string, fullName: string): Promise<any> {
    return axios.post(`${this._baseUrl}/creation-requests/`, {
      email: email,
      password: password,
      full_name: fullName,
    });
  }

  static async getUserData(email: string, password: string): Promise<UserModel> {
    return new Promise(async (resolve, reject) => {
      try {
        let accessToken = await this.getUserAccessToken(email, password);
        await LocalStorageService.setItem(Local.token, accessToken);
        axios
          .get(`${this._baseUrl}/me`, { headers: { Authorization: `Bearer ${accessToken}` } })
          .then((res) => resolve(Generator.user(res?.data)));
      } catch (err) {
        reject(err);
      }
    });
  }

  private static async getUserAccessToken(email: string, password: string): Promise<string> {
    return axios
      .post(
        'http://10.0.2.2:8000/tokens/',
        { username: email, password },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then((res) => res?.data?.['access_token']);
  }
}
