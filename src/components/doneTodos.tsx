import { useDispatch, useSelector } from "react-redux";
import { backStatus, calculateAchievement, deleteDoneToDo } from "../slice/slice";
import { RootState } from '../store/store';

export const DoneToDos = () => {
    const dispatch = useDispatch();
    const doneTodos = useSelector((state: RootState) => state.todo.doneTodos);
    
    const handleBackStatus = (param: number) => {
        dispatch(backStatus(param));
        dispatch(deleteDoneToDo(param));
        dispatch(calculateAchievement());
    }

    return (
        <div>
            <h1>Done!</h1>
            <ul>
                {doneTodos.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title}
                            <button onClick={() => handleBackStatus(item.id)}>戻す</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}