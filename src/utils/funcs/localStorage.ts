// import jwt from 'jsonwebtoken';
import sign from 'jwt-encode';
import decode from 'jwt-decode';
import z from 'zod';
import { config } from '..';

const TOKEN_KEY = 'token' as const;

const TokenSchema = z.object({
  token: z.string(),
});

type Token = z.infer<typeof TokenSchema>;

//FIXME: SHOULD DELETE THIS
export function setToken(value: string): boolean {
  try {
    const tokenized = TokenSchema.parse({ token: value });
    const encoded = sign(tokenized, config.JWT_SECRET);
    const stringified = JSON.stringify(encoded);
    localStorage.setItem(TOKEN_KEY, stringified);
  } catch (e) {
    return false;
  }
  return true;
}

export function getToken(): Token | null {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;
  try {
    const decoded = decode(token, config.JWT_SECRET);

    const parsedToken = TokenSchema.parse(decoded);

    return parsedToken;
  } catch (e) {
    return null;
  }
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
