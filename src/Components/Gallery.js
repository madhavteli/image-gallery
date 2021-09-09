import React from 'react';
import Image from "./Image";

const Gallery = (Images) => {
	return(
		<div className="content">
			{Images.imagesData.map((imageData, i) => (
				<div key={i} className="img-box">
					<Image details={imageData} key={i} />
				</div>
			))}
		</div>
	);
};

export default Gallery;