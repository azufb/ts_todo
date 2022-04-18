import { Form } from './components/form';
import { ToDos } from './components/ToDos';
import { DoneToDos } from "./components/DoneToDos";
//import { Achievement } from "./components/Achievement";
import { DeleteAllBtn } from "./components/DeleteAllBtn";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { sprinkles } from './styles/sprinkles.css';

export const App = () => {
    return (
        <>
            <Header />
            <Form />
            <DeleteAllBtn />
            <div className={sprinkles({display: 'flex', justifyContent: 'center'})}>
                <ToDos />
                <DoneToDos />
            </div>
            {/*<Achievement />*/}
            <Footer />
        </>
    )
}