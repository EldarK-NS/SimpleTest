import { LocalClient } from 'services/index'

export default class LocalAPI {
  constructor(private $storage: LocalClient) {}

  async get(key: string) {
    try {
      const res = await this.$storage.get(key)
      return res && JSON.parse(res)
    } catch (e) {
      console.log('LOCAL GET Error', e)
    }
  }

  async set(key: string, data: string) {
    try {
      const serialized = JSON.stringify(data)
      await this.$storage.set(key, serialized)
    } catch (e) {
      console.log('LOCAL GET Error', e)
    }
  }
}
