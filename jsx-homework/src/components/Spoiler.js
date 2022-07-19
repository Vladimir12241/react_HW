import React, { useState } from "react";

const Spoiler = ({ header = "+", open, children }) => {
	const [top, midle] = children;
	const [show, setShow] = useState(!open);
	const showSpoiler = () => setShow(!show);

	return (
		<div className={open ? "Spoiled" : "No-Spoiler"}>
			{header}
			{open ? React.cloneElement(top, { onClick: showSpoiler }) : top}
			{show && midle}
		</div>
	);
};

export default Spoiler;
