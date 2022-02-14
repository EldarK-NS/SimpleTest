import AsyncStorage from '@react-native-async-storage/async-storage'

export default class LocalClient {
  storage = AsyncStorage

  public async get(key: string) {
    try {
      return await this.storage.getItem(key)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  }

  public async set(key: string, data: string) {
    try {
      return await this.storage.setItem(key, data)
    } catch (e) {
      console.log('LOCAL CLIENT ERROR', e)
    }
  }
}
