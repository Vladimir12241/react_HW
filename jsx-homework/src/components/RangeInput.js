import { useState } from "react";

const RangeInput = ({ min, max }) => {
	const [state, setState] = useState(true);
	const validator = (value) => {
		if (value === 0 || (value >= min && value <= max)) return setState(true);
		return setState(false);
	};
	return (
		<div>
			<input
				type="text"
				onChange={(e) => validator(e.target.value.length)}
				style={!state ? { color: "red", border: "2px solid red" } : {}}
			/>
		</div>
	);
};

export default RangeInput;
