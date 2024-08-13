import React from 'react';
import {GlobalStyle} from "./designsystem/foundation/globalStyle";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import OnboardingPage from "./page/onboarding/OnboardingPage";

function App() {
    return (
        <>
            <GlobalStyle/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OnboardingPage/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
