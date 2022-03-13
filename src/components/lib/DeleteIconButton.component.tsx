import { IconButton } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export const DeleteIconButton: React.FC<{ onDelete: VoidFunction }> = ({
  onDelete,
}) => {
  const [deletePending, setDeletePending] = useState(false);

  const handleDelete = () => {
    if (deletePending) {
      onDelete();
    } else {
      setDeletePending(true);
    }
  };

  return (
    <IconButton
      color={deletePending ? "error" : "default"}
      onClick={handleDelete}
      onBlur={() => setDeletePending(false)}
    >
      <DeleteIcon />
    </IconButton>
  );
};
