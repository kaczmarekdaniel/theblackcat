import "./App.css";
import LandingPage from "./app/LandingPage/LandingPage";
import Nav from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./app/About/About";
import VisitUs from "./app/VisitUs/VisitUs";
import { AnimatePresence } from "framer-motion";
import News from "./app/News/News";
import { useEffect } from "react";

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className="max-w-[1200px] h-auto  w-full mx-auto">
			<Nav />
			<main className="min-h-screen">
				<AnimatePresence mode="wait">
					<Routes>
						<Route path="/visit-us" element={<VisitUs />} />
						<Route path="/about" element={<About />} />
						<Route path="/news" element={<News />} />
						<Route path="/" element={<LandingPage />} />
					</Routes>
				</AnimatePresence>
			</main>
			<Footer />
		</div>
	);
}

export default App;
