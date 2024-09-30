export interface IUser extends IUserCredentials {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

export interface IUserCredentials {
  accessToken: string;
  refreshToken: string;
}
