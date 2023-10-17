import { useState } from 'react';
import { useLogOut, useLogin } from '../../hooks';
import { logInParams } from '../../api/Users';
import { useAppContext } from '../../context';
import { isAxiosError } from 'axios';

export const LoginComponent = () => {
  const [params, setParams] = useState<logInParams>({
    email: '',
    password: '',
  });

  const { state } = useAppContext();

  const setValue =
    (key: keyof logInParams) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setParams((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const { mutate, isLoading, error } = useLogin(({ user }) => {
    alert(`Welcome ${user.name}`);
  });

  const { mutate: logOut } = useLogOut();

  const login = () => {
    mutate(params);
  };

  return (
    <div
      style={{
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-around',
        margin: '10px',
      }}
    >
      {state.userState ? (
        <div>
          <h2>{state.userState.user.name}</h2>
          <h2>{state.userState.user.email}</h2>
          <button onClick={() => logOut()}>Log out</button>
        </div>
      ) : (
        <>
          <h2>Not logged in</h2>
          <div>
            <input
              type="text"
              placeholder="email"
              value={params.email}
              onChange={setValue('email')}
            />
            <input
              type="password"
              placeholder="password"
              value={params.password}
              onChange={setValue('password')}
            />
            <button onClick={login} disabled={isLoading}>
              Login
            </button>
          </div>
        </>
      )}

      {error && isAxiosError(error) && (
        <p>
          {error.response?.status === 401
            ? 'Invalid credentials'
            : error.message}
        </p>
      )}
    </div>
  );
};
