import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { store } from './store/store';
import { Provider } from 'react-redux';
import "./styles/global.css";

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

// Providerを使うことで、Reduxを使うことができるようになる。
root.render(
    <Provider store={store}>
      <App />
    </Provider>
)