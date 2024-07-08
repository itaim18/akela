import { USERS } from "./mocks/users.mock";

const getUserPassword = (username: string): string | undefined =>
  USERS.find((user) => username === user.username)?.password;

export const authDal = {
  getUserPassword,
};
