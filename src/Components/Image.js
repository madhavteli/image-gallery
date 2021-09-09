import React from "react";

const Image = (imageData) => {
	return (
		<img title={imageData.details.title} src={imageData.details.src} alt={imageData.details.alt} />
	);
};
export default Image;
