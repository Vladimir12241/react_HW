import { useState, useEffect } from "react";
import Watch from "./Watch";

const TimeComteiner = ({ timer, refresh, render, renderHours, renderMinutes, renderSeconds }) => {
	const ms = refresh;
	const Timer = render;

	const [countStart, setCountStart] = useState(false);

	const [exectTime, setExectTime] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		if (timer && timer > 0) {
			setHours(parseInt(timer / 60 / 60));
			setMinutes(parseInt(timer / 60) % 60);
			setSeconds(timer % 60);
			setCountStart(true);
		}
	}, [timer]);

	useEffect(() => {
		let timer = setInterval(() => {
			if (countStart) {
				let time = new Date().getTime();
				if (hours > 0 || minutes > 0 || seconds > 0) {
					if (!exectTime || exectTime === 0) {
						setExectTime(time);
						return;
					}
					if (time - exectTime >= 999) {
						if (seconds > 0) {
							setSeconds(seconds - 1);
						}
						if (!seconds || seconds === 0) {
							if (!minutes || minutes === 0) {
								if (hours !== 0) setHours(hours - 1);
								setMinutes(59);
							}
							setSeconds(59);
							setMinutes(minutes - 1);
						}
						setExectTime(time);
					}
				} else {
					clearInterval(timer);
					setExectTime(0);
					console.log("stop");
				}
			}
		}, ms);

		return () => {
			clearInterval(timer);
		};
	}, [countStart, hours, minutes, seconds, ms, exectTime]);

	return (
		<div className="Timer">
			<Watch hours={hours} minutes={minutes} seconds={seconds} />
			<Timer hours={hours} minutes={minutes} seconds={seconds} />
			<div className="Control-Box">
				<button
					className="Timer-Input-btn"
					style={{ background: "#0d6efd" }}
					onClick={() => {
						setCountStart(!countStart);
					}}
				>
					Pause
				</button>
				<button
					className="Timer-Input-btn"
					style={{ background: "#dc3545" }}
					onClick={() => {
						setCountStart(false);
						setExectTime(0);
						setHours(0);
						setMinutes(0);
						setSeconds(0);
					}}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default TimeComteiner;
