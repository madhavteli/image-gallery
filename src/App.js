import React from "react";
import imagesData from "./images-data";
import Gallery from "./Components/Gallery";

function App() {
	return (
		<Gallery imagesData={imagesData} />
	)
}

export default App;
