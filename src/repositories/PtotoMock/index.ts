import NetAPI from '../NetAPI';
import {IPhoto} from 'src/models/photo';
import {RequestPromise} from 'src/models/main';

export default class PhotoMock extends NetAPI {
  photos = '/photos';
  album = '/albums';

  async getPhotos(): RequestPromise<IPhoto[]> {
    try {
      const response = await this.get(`${this.photos}`);
      return response?.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
  async getAlbum(id: number): RequestPromise<IPhoto[]> {
    try {
      const response = await this.get(`${this.album}/${id}/photos`);
      return response?.data;
    } catch (e: any) {
      return this.getFirstError(
        e.response.data.errors || e.response.data.error,
      );
    }
  }
}
