import { useState } from "react";

const TimerControl = ({ timeUpdate }) => {
	const [hours, setHours] = useState("");
	const [minutes, setMinutes] = useState("");
	const [seconds, setSeconds] = useState("");

	if (seconds > 59) {
		setSeconds(59);
	}
	if (minutes > 59) {
		setMinutes(59);
	}
	if (hours > 23) {
		setHours(23);
	}

	const allToSeconds = () => {
		let thisTime = 0;
		if (seconds) {
			thisTime = thisTime + parseInt(seconds, 10);
		}
		if (minutes) {
			thisTime = thisTime + parseInt(minutes * 60, 10);
		}
		if (hours) {
			thisTime = thisTime + parseInt(hours * 60 * 60, 10);
		}
		return thisTime;
	};

	return (
		<>
			<div className="Timer">
				<h3>Set Timer</h3>
				<div className="Timer-Input">
					<div>
						<p> Hours</p>
						<input
							max="24"
							placeholder="0"
							style={{ color: "#000", width: "50px" }}
							type="number"
							value={hours}
							onChange={(e) => setHours(e.target.value)}
						/>
					</div>
					<div>
						<p>Minutes</p>
						<input
							min="0"
							max="59"
							placeholder="0"
							style={{ color: "#000", width: "50px" }}
							type="number"
							value={minutes}
							onChange={(e) => setMinutes(e.target.value)}
						/>
					</div>
					<div>
						<p>Seconds</p>
						<input
							min="0"
							max="59"
							placeholder="0"
							style={{ color: "#000", width: "50px" }}
							type="number"
							value={seconds}
							onChange={(e) => setSeconds(e.target.value)}
						/>
					</div>
				</div>
				<div className="Control-Box">
					<button
						className="Timer-Input-btn"
						style={{ background: "#157347" }}
						onClick={() => {
							timeUpdate(allToSeconds());
							setHours("");
							setMinutes("");
							setSeconds("");
						}}
					>
						Start
					</button>
				</div>
			</div>
		</>
	);
};

export default TimerControl;
