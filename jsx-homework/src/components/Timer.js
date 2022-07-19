import { useState } from "react";
import TimerControl from "./TimeControl";
import TimeComteiner from "./TimeConteiner";

const Timer = ({ hours, minutes, seconds }) => {
	return (
		<div className="Timer-Box">
			<div className="Timer-Count">
				<p>Hours</p> <span>{hours}</span>
			</div>
			<div className="Timer-Count">
				<p>Minutes</p> <span>{minutes}</span>
			</div>
			<div className="Timer-Count">
				<p>Seconds</p> <span>{seconds}</span>
			</div>
		</div>
	);
};

const TimerContainer = () => {
	const [timer, setTimer] = useState("0");
	const timeUpdate = (value) => {
		if (value) setTimer(value);
	};

	return (
		<>
			<TimeComteiner timer={timer} refresh={100} render={Timer} />
			<TimerControl timeUpdate={timeUpdate} />
		</>
	);
};

export default TimerContainer;
