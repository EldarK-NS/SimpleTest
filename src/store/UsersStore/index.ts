import {action, makeObservable, observable} from 'mobx';
import BaseStore from 'store/BaseStore';
import {IUserCard} from 'src/models/userCard';
import UsersMock from 'repositories/UsersMock';

export default class UsersStore extends BaseStore {
  users: IUserCard[] = [];
  constructor(private usersMock: UsersMock) {
    super();
    makeObservable(this, {
      getUsers: action,
      users: observable,
    });
  }
  getUsers() {
    this.makeRequest({
      request: () => this.usersMock.getUsers(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        console.log('RES', JSON.stringify(res, null, 2));
        this.users = res;
      },
    });
  }
}
