import { useDispatch } from "react-redux";
import { deleteAllToDo } from "../slice/slice";
import { themeClass, alertBtn } from "../styles/scopedTheme.css";
import { sprinkles } from "../styles/sprinkles.css";

export const DeleteAllBtn = () => {
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        dispatch(deleteAllToDo());
    }

    return (
        <div className={`${themeClass} ${sprinkles({textAlign: 'center'})}`}>
            <button onClick={() =>handleDeleteAll()} className={alertBtn}>全て削除する</button>
        </div>
    )
}