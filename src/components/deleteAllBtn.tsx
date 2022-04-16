import { useDispatch } from "react-redux";
import { deleteAllToDo } from "../slice/slice";

function DeleteAllBtn() {
    const dispatch = useDispatch();

    const handleDeleteAll = () => {
        dispatch(deleteAllToDo());
    }

    return (
        <button onClick={() =>handleDeleteAll()}>全て削除する</button>
    )
}

export default DeleteAllBtn;