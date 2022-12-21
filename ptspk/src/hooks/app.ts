import { TypedUseSelectorHook, 
    useDispatch as useOriginalDispatch, 
    useSelector as useOriginalSelector} from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppDispatch = () => useOriginalDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useOriginalSelector;