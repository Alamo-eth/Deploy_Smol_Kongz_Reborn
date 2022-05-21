import React from "react";
import "./App.css";
import About from "./Components/about";
import Collection from "./Components/collection";
import Hero from "./Components/hero";
import Questions from './Components/questions';
import Teams from './Components/teams';
import Join from './Components/join';
import Roadmap from "./Components/roadmap";

function App() {
	return (
		<>
			<Hero />
			<About />
			<Roadmap />
			<Collection />
			<Questions />
			<Teams />
			<Join />
		</>
	)
}

export default App;
