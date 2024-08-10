export interface User {
  name: string;
}

export interface UserContextActions {}

export interface UserContext {
  user: User;
  actions: UserContextActions;
}
