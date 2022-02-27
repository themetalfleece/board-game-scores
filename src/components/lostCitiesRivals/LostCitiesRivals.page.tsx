import { useSelector } from "./useSelector.hook";

export const LostCitiesRivals: React.FC<{}> = () => {
  const state = useSelector();

  return (
    <div>
      Lost Cities Rivals {JSON.stringify(state.players)}
    </div>
  );
};
