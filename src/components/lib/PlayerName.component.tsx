import { Typography } from "@mui/material";
import { useMemo } from "react";

const colors = [
  "#ef5350",
  "#42a5f5",
  "#66bb6a",
  "#ffee58",
  "#9e9e9e",
  "#26c6da",
];

export const PlayerName: React.FC<{ children: string }> = ({
  children: name,
}) => {
  const color = useMemo(() => {
    const code = name
      .split("")
      .map((x) => x.charCodeAt(0))
      .reduce((a, b) => a + b);

    return colors[code % colors.length];
  }, [name]);

  return (
    <Typography sx={{ color }} variant="h6">
      {name}
    </Typography>
  );
};
