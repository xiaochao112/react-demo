export interface userInfo {
  id: number;
  username: string;
  avatar: string;
  sex: 1 | 0;
  phone: string;
  createTime: string;
}

export interface actionT {
  type: string;
  info: userInfo;
}
