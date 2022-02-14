import {NetAPI, LocalAPI} from 'repositories/index';
import {HttpClient, LocalClient} from 'services/index';
import UsersMock from 'repositories/UsersMock';
import UsersStore from 'store/UsersStore';
import PhotoMock from 'repositories/PtotoMock';
import PhotosStore from 'store/PhotosStore';

const services = {
  httpClient: HttpClient,
  localClient: new LocalClient(),
};

const repositories = {
  http: new NetAPI(services.httpClient),
  local: new LocalAPI(services.localClient),
  userMock: new UsersMock(services.httpClient),
  photoMock: new PhotoMock(services.httpClient),
};

const stores = {
  usersStore: new UsersStore(repositories.userMock),
  photoStore: new PhotosStore(repositories.photoMock),
};

export default {
  services,
  repositories,
  stores,
};
