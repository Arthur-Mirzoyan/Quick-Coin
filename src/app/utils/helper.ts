import { UserInfoModel } from '@models/UserInfo.model';

export class Helper {
  static generateUserInfo(data?: any): UserInfoModel {
    return {
      email: data?.email || '',
      password: data?.password || '',
      fullName: data?.fullName || '',
      phone: data?.phone || '',
      photoUrl: data?.photoUrl || '',
    };
  }
}
