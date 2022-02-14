import {action, makeObservable, observable} from 'mobx';
import BaseStore from 'store/BaseStore';
import {IPhoto} from 'src/models/photo';
import PhotoMock from 'repositories/PtotoMock';

export default class PhotosStore extends BaseStore {
  photos: IPhoto[] = [];
  constructor(private photosMock: PhotoMock) {
    super();
    makeObservable(this, {
      getPhotos: action,
      getAlbum: action,
      photos: observable,
    });
  }
  getPhotos() {
    this.makeRequest({
      request: () => this.photosMock.getPhotos(),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.photos = res;
      },
    });
  }
  getAlbum(id: number) {
    this.makeRequest({
      request: () => this.photosMock.getAlbum(id),
      success: res => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        this.photos = res;
      },
    });
  }
}
