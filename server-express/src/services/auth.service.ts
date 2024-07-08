import { authDal } from "../data-access-layers/auth.dal";
import { UnauthorizedUserError } from "../errors/UnauthorizedUserError";

const login = (username: string, password: string) => {
  const passwordFromDal = authDal.getUserPassword(username);

  if (passwordFromDal !== password) throw new UnauthorizedUserError();
};

export const authService = {
  login,
};
