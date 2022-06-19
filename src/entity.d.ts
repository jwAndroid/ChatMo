export interface UserEntity {
  id: number;
}
export interface RoomEntity {
  roomId: number;
  title: string;
  lastMemo: string;
  memoCount: number;
  isFavorites: boolean;
  isCompleate: boolean;
  isPin: boolean;
  isMemoLook: boolean;
  status: number;
  createdAt: number;
  updatedAt: number;
  lastUpdateOn: number;
}

export interface Memontity {
  text: string;
}
