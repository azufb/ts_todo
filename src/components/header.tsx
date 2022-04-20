import { headerStyle } from "../styles/header.css";
import { sprinkles } from '../styles/sprinkles.css';

export const Header = () => {
    return (
        <div className={`${headerStyle} ${sprinkles({paddingLeft: {desktop: 'm', mobile: 'xs'}})}`}>
            <h1>タスク管理</h1>
        </div>
    )
}