import { useDispatch, useSelector } from "react-redux";
import { calculateAchievement, changeStatus, deleteToDo } from "../slice/slice";
import { RootState } from '../store/store';
import { sprinkles } from "../styles/sprinkles.css";
import { toDoStyle, toDoTextStyle, doneBtnStyle, deleteBtn } from "../styles/toDos.css";

export const ToDos = () => {
    const dispatch = useDispatch();
    const todo = useSelector((state: RootState) => state.todo.todos);

    const handleChangeStatus = (param: number) => {
        dispatch(changeStatus(param));
        dispatch(deleteToDo(param));
        dispatch(calculateAchievement());
    }

    const handleDeleteToDo = (param: number) => {
        dispatch(deleteToDo(param));
        dispatch(calculateAchievement());
    }

    return (
        <div className={sprinkles({width: '50%'})}>
            <h1 className={sprinkles({textAlign: 'center'})}>タスク一覧</h1>
            <div>
                {todo.map((item) => {
                return ( 
                    <div key={item.id} className={toDoStyle}>
                        <span>★</span>
                        <p className={toDoTextStyle}>{item.title}</p>
                        <button onClick={() => handleChangeStatus(item.id)} className={doneBtnStyle}>完了</button>
                        <button onClick={() => handleDeleteToDo(item.id)} className={deleteBtn}>削除</button>
                    </div>
                )
                })}
            </div>
        </div>
    )
}