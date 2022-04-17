import { useDispatch } from "react-redux";
import { deleteAllToDo } from "../slice/slice";
import { variants } from "../styles/variants.css";

export const DeleteAllBtn = () => {
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        dispatch(deleteAllToDo());
    }

    return (
        <div>
            <button onClick={() =>handleDeleteAll()} className={variants.alert}>全て削除する</button>
        </div>
    )
}