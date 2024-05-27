import AsyncStorage from '@react-native-async-storage/async-storage';

export default class LocalStorageService {
  static async setItem(key: string, item: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await AsyncStorage.setItem(key, JSON.stringify(item));
        resolve();
      } catch (err: any) {
        reject(err);
      }
    });
  }

  static async getItem<T>(key: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        const itemJSON = await AsyncStorage.getItem(key);
        const item = itemJSON ? (JSON.parse(itemJSON) as T) : null;

        if (item) resolve(item);
        else throw new Error(`${key} Not Found`);
      } catch (err: any) {
        reject(err);
      }
    });
  }

  static async removeItem(key: string): Promise<void> {
    return AsyncStorage.removeItem(key);
  }

  static async clear(): Promise<void> {
    return AsyncStorage.clear();
  }
}
