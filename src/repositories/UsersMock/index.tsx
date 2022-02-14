import NetAPI from '../NetAPI';
import {IUserCard} from 'src/models/userCard';
import {RequestPromise} from 'src/models/main';

export default class UsersMock extends NetAPI {
  users = '/users';

  async getUsers(): RequestPromise<IUserCard[]> {
    try {
      const response = await this.get(`${this.users}`);
      return response?.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
}
