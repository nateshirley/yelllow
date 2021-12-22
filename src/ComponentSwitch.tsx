import { FC } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import App from "./App";
import Thesis from "./Thesis";

const ComponentSwitch: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/thesis" element={<Thesis />} />
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>

    );
}

export default ComponentSwitch;

