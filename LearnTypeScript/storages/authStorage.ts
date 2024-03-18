import { MMKV } from "react-native-mmkv";
import { AuthResult } from "../api/types";

export const storage = new MMKV();

const key = 'auth';

const authStorage = {
  async get() {
    const rawData = await storage.getString(key);
    if (!rawData) {
      return null;
    }
    try {
      const data: AuthResult = JSON.parse(rawData);
        return data;
      } catch (e) {
        return null;
      }
  },
  set(authResult: AuthResult) {
    return storage.set(key, JSON.stringify(authResult));
  },
  clear() {
    return storage.delete(key);
  },
};

export default authStorage;