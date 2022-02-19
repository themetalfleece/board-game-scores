import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import { BoardGamePicker } from "./components/boardGamePicker/BoardGamePicker.page";

function App() {
  return (
    <CssBaseline>
      <Box m={2}>
        <BoardGamePicker />
      </Box>
    </CssBaseline>
  );
}

export default App;
