import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Box } from "@mui/material";
import { RoutedGames } from "./components/routedGames/RoutedGames.router";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box m={2}>
          <RoutedGames />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
