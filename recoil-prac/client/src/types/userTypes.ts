export interface User {
  id: number;
  name: string;
  friendList: User[];
  friends: User[];
}
