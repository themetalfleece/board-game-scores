import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { GamePicker } from "../gamePicker/gamePicker.page";
import { LostCitiesRivals } from "../lostCitiesRivals/LostCitiesRivals.page";
import { gameRoutes } from "./gameRoutes";

export const RoutedGames: React.FC<{}> = () => {
  return (
    <Routes>
      <Route
        path={gameRoutes.lostCitiesRivals}
        element={<LostCitiesRivals />}
      />
      <Route index element={<GamePicker />} />
    </Routes>
  );
};
