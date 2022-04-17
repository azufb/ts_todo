import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const Achievement = () => {
    const percentageAchievement = useSelector((state: RootState) => state.todo.achievement);
    return (
        <div>
            <h1>達成度</h1>
            <p>{percentageAchievement}%</p>
        </div>
    )
}