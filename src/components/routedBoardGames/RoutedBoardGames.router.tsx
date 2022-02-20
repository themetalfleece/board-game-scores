import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { BoardGamePicker } from "../boardGamePicker/BoardGamePicker.page";
import { LostCitiesRivals } from "../lostCitiesRivals/LostCitiesRivals.page";

export const RoutedBoardGames: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path="lost-cities-rivals" element={<LostCitiesRivals />} />
      <Route index element={<BoardGamePicker />} />
    </Routes>
  );
};
