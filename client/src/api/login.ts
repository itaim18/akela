import { UnauthorizedUserError } from '../errors/UnauthorizedUserError';
import { get, isHttpRequestError } from './utils';

export const login = async (username: string, password: string) => {
  try {
    await get('auth/login', { username, password });
  } catch (error: unknown) {
    if (isHttpRequestError(error) && error.response?.status === 401) {
      throw new UnauthorizedUserError();
    }

    throw error;
  }
};
