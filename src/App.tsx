import { Form } from './components/Form';
import { ToDos } from './components/ToDos';
import { DoneToDos } from "./components/DoneToDos";
import { DeleteAllBtn } from './components/DeleteAllBtn';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { sprinkles } from './styles/sprinkles.css';

export const App = () => {
    return (
        <>
            <Header />
            <div className={sprinkles({paddingLeft: {desktop: 'm', mobile: 'xs'}, paddingRight: {desktop: 'm', mobile: 'xs'}})}>
                <Form />
                <DeleteAllBtn />
                <div className={sprinkles({display: 'flex', justifyContent: 'center'})}>
                    <ToDos />
                    <DoneToDos />
                </div>
            </div>
            <Footer />
        </>
    )
}