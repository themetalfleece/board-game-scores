import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { RoutedBoardGames } from "./components/routedBoardGames/RoutedBoardGames.router";

function App() {
  return (
    <CssBaseline>
      <Box m={2}>
        <RoutedBoardGames />
      </Box>
    </CssBaseline>
  );
}

export default App;
