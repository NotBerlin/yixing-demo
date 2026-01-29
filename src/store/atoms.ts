import { atom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 用户信息类型定义
export interface UserInfo {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone: string;
  role: string;
}

// 用户喜好类型定义
export interface UserPreferences {
  theme: 'light' | 'dark';
  language: string;
  notificationEnabled: boolean;
  preferredCategories: string[];
  recentlyViewed: string[];
  savedSearches: string[];
}

// 账号信息类型定义
export interface AccountInfo {
  userInfo: UserInfo | null;
  preferences: UserPreferences;
  isLoggedIn: boolean;
  token: string | null;
}

// 默认用户喜好
const defaultPreferences: UserPreferences = {
  theme: 'light',
  language: 'zh-CN',
  notificationEnabled: true,
  preferredCategories: [],
  recentlyViewed: [],
  savedSearches: [],
};

// 默认账号信息
const defaultAccountInfo: AccountInfo = {
  userInfo: null,
  preferences: defaultPreferences,
  isLoggedIn: false,
  token: null,
};

// 账号信息原子
export const accountAtom = atom<AccountInfo>(defaultAccountInfo);

// 持久化账号信息
export const persistAccountAtom = atom(
  (get) => get(accountAtom),
  async (get, set, newAccountInfo: AccountInfo) => {
    set(accountAtom, newAccountInfo);
    try {
      await AsyncStorage.setItem('accountInfo', JSON.stringify(newAccountInfo));
    } catch (error) {
      console.error('Failed to save account info:', error);
    }
  }
);

// 加载持久化的账号信息
export const loadPersistedAccount = async () => {
  try {
    const savedAccountInfo = await AsyncStorage.getItem('accountInfo');
    if (savedAccountInfo) {
      return JSON.parse(savedAccountInfo);
    }
  } catch (error) {
    console.error('Failed to load account info:', error);
  }
  return defaultAccountInfo;
};

// 用户登录状态原子
export const isLoggedInAtom = atom(
  (get) => get(accountAtom).isLoggedIn,
  (get, set, isLoggedIn: boolean) => {
    const currentAccount = get(accountAtom);
    set(accountAtom, {
      ...currentAccount,
      isLoggedIn,
    });
  }
);

// 用户信息原子
export const userInfoAtom = atom(
  (get) => get(accountAtom).userInfo,
  (get, set, userInfo: UserInfo | null) => {
    const currentAccount = get(accountAtom);
    set(accountAtom, {
      ...currentAccount,
      userInfo,
      isLoggedIn: !!userInfo,
    });
  }
);

// 用户喜好原子
export const preferencesAtom = atom(
  (get) => get(accountAtom).preferences,
  (get, set, preferences: UserPreferences) => {
    const currentAccount = get(accountAtom);
    set(accountAtom, {
      ...currentAccount,
      preferences,
    });
  }
);

// 主题偏好原子
export const themeAtom = atom(
  (get) => get(accountAtom).preferences.theme,
  (get, set, theme: 'light' | 'dark') => {
    const currentAccount = get(accountAtom);
    set(accountAtom, {
      ...currentAccount,
      preferences: {
        ...currentAccount.preferences,
        theme,
      },
    });
  }
);

// 语言偏好原子
export const languageAtom = atom(
  (get) => get(accountAtom).preferences.language,
  (get, set, language: string) => {
    const currentAccount = get(accountAtom);
    set(accountAtom, {
      ...currentAccount,
      preferences: {
        ...currentAccount.preferences,
        language,
      },
    });
  }
);

// 最近浏览原子
export const recentlyViewedAtom = atom(
  (get) => get(accountAtom).preferences.recentlyViewed,
  (get, set, recentlyViewed: string[]) => {
    const currentAccount = get(accountAtom);
    set(accountAtom, {
      ...currentAccount,
      preferences: {
        ...currentAccount.preferences,
        recentlyViewed,
      },
    });
  }
);

// 清空账号信息
export const clearAccountAtom = atom(
  null,
  async (get, set) => {
    set(accountAtom, defaultAccountInfo);
    try {
      await AsyncStorage.removeItem('accountInfo');
    } catch (error) {
      console.error('Failed to clear account info:', error);
    }
  }
);
