import { useAppSelector } from "../../store/useAppSelector.hook";

export const useSelector = () => useAppSelector((state) => state.ohanami);
