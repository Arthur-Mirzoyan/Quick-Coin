import { UserModel } from '@models/user.model';

export class Generator {
  static user(data?: any): UserModel {
    return {
      email: data?.email || '',
      password: data?.password || '',
      fullName: data?.fullName || '',
      phone: data?.phone || '',
      photoUrl: data?.photoUrl || '',
    };
  }
}
