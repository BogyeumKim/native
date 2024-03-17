import client from './client';
import {AuthResult, User} from './types';
import {AxiosError} from 'axios';

interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

interface LoginParams {
  identifier: string;
  password: string;
}

export async function register(params: RegisterParams) {
  const response = await client.post<AuthResult>(
    '/auth/local/register',
    params,
  );
  return response.data;
}

export async function login(params: LoginParams) {
  const response = await client.post<AuthResult>('/auth/local', params);
  return response.data;
}

export async function getLoginStatus() {
  const response = await client.get<User>('/users/me');
  return response.data;
}


type AuthErrorData = {
  messages: {
    id: string;
    message: string;
  }[];
}[];

export type AuthError = AxiosError<{
  statusCode: number;
  error: string;
  message: AuthErrorData;
  data: AuthErrorData;
}>;