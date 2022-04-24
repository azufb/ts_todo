import { footerStyle } from '../styles/footer.css';
import { sprinkles } from '../styles/sprinkles.css';

export const Footer = () => {
    return (
        <footer className={`${footerStyle} ${sprinkles({paddingLeft: {desktop: 'm', mobile: 'xs'}})}`}>
            <p>All Rights Reserved.</p>
        </footer>
    )
}