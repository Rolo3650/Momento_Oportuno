import { useState } from 'react';
import { registerParams } from '../../api/Users';
import { useAppContext } from '../../context';
import { useRegister, useLogOut } from '../../hooks';

export const RegisterComponent = () => {
  const [params, setParams] = useState<registerParams>({
    email: '',
    name: '',
    password: '',
    password_confirmation: '',
  });

  const { state } = useAppContext();

  const setValue =
    (key: keyof registerParams) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setParams((prev) => ({
        ...prev,
        [key]: e.target.value,
      }));
    };

  const { mutate, isLoading } = useRegister(({ user }) => {
    alert(`Welcome ${user.name}`);
  });

  const { mutate: logOut } = useLogOut();

  const register = () => {
    if (params.password !== params.password_confirmation) {
      alert('Passwords do not match');
      return;
    }
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
          <h2>Register?</h2>
          <div>
            <input
              type="text"
              placeholder="name"
              value={params.name}
              onChange={setValue('name')}
            />
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
            <input
              type="password"
              placeholder="password"
              value={params.password_confirmation}
              onChange={setValue('password_confirmation')}
            />
            <button onClick={register} disabled={isLoading}>
              Register
            </button>
          </div>
        </>
      )}
    </div>
  );
};
