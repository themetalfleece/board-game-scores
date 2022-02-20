import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { BoardGamePicker } from "../boardGamePicker/BoardGamePicker.page";
import { LostCitiesRivals } from "../lostCitiesRivals/LostCitiesRivals.page";
import { boardGameRoutes } from "./boardGameRoutes";

export const RoutedBoardGames: React.FC<{}> = () => {
  return (
    <Routes>
      <Route
        path={boardGameRoutes.lostCitiesRivals}
        element={<LostCitiesRivals />}
      />
      <Route index element={<BoardGamePicker />} />
    </Routes>
  );
};
