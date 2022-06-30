export interface RoomEntity {
  roomId: number;
  title: string;
  lastMemo: string;
  memoCount: number;
  isFavorites: boolean;
  isCompleate: boolean;
  isPin: boolean;
  isLock: boolean;
  password: number;
  status: number;
  createdAt: number;
  updatedAt: number;
  lastUpdateOn: number;
}

export interface ImageEntity {
  uri: string;
}

export interface MessageEntity {
  id: number;
  message?: string;
  image?: ImageEntity[];
  status: number;
  day: string;
  createdAt: number;
  updatedAt: number;
}

export interface IMessageEntity {
  data: MessageEntity[];
  title: string;
}
