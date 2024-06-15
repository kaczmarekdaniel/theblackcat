import "./App.css";
import LandingPage from "./app/LandingPage/LandingPage";
import Nav from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./app/About/About";
import VisitUs from "./app/VisitUs/VisitUs";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import News from "./app/News/News";

function App() {
	const location = useLocation();

	return (
		<div className="max-w-[1200px] h-auto  w-full mx-auto">
			<Nav />
			<main className="min-h-screen">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/visit-us" element={<VisitUs />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/news" element={<News />}></Route>
						<Route path="/" element={<LandingPage />}></Route>
					</Routes>
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	);
}

export default App;
