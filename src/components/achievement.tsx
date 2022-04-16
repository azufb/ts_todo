import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Achievement() {
    const percentageAchievement = useSelector((state: RootState) => state.todo.achievement);
    return (
        <div>
            <h1>達成度</h1>
            <p>{percentageAchievement}%</p>
        </div>
    )
}

export default Achievement;