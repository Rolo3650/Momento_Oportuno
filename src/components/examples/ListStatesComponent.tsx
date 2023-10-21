import { useGetStates } from '../../hooks/querys/useStates';

export const ListStatesComponent = () => {
  const { data: states, isLoading } = useGetStates();

  if (isLoading || !states) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>List States</h1>
      <ul>
        {states.data.map((state) => (
          <li key={state.id}>{state.name}</li>
        ))}
      </ul>
    </div>
  );
};
