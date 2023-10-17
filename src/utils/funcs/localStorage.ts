type ValidKeys = 'token' | 'user';

//FIXME: SHOULD DELETE THIS
export function setLocalValue(key: ValidKeys, value: string): void {
  localStorage.setItem(key, value);
}

export function getLocalValue(key: ValidKeys): string | null {
  return localStorage.getItem(key);
}
