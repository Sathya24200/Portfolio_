import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import DetailsPage from "./pages/DetailsPage";
import CertificatesPage from "./pages/CertificatesPage";
import AchievementsPage from "./pages/AchievementsPage";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/details" element={<DetailsPage />} />
                    <Route path="/certificates" element={<CertificatesPage />} />
                    <Route path="/achievements" element={<AchievementsPage />} />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
