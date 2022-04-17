import { useDispatch } from "react-redux";
import { deleteAllToDo } from "../slice/slice";
import { themeClass, alertBtn } from "../styles/variants.css";

export const DeleteAllBtn = () => {
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        dispatch(deleteAllToDo());
    }

    return (
        <div className={themeClass}>
            <button onClick={() =>handleDeleteAll()} className={alertBtn}>全て削除する</button>
        </div>
    )
}