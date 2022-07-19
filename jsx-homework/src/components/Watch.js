import ClockFace from "../img/ClockFace.png";
import ClockFace_H from "../img/ClockFace_H.png";
import ClockFace_M from "../img/ClockFace_M.png";
import ClockFace_S from "../img/ClockFace_S.png";

const Watch = ({ hours, minutes, seconds }) => {
	return (
		<div className="Time-Disc">
			<span className="char1">1</span>
			<span className="char2">2</span>
			<span className="char3">3</span>
			<span className="char4">4</span>
			<span className="char5">5</span>
			<span className="char6">6</span>
			<span className="char7">7</span>
			<span className="char8">8</span>
			<span className="char9">9</span>
			<span className="char10">10</span>
			<span className="char11">11</span>
			<span className="char12">12</span>

			<img className="Clock" src={ClockFace} alt="clock" />
			<img className="Hand" style={{ transform: `rotate(${hours * 30}deg)` }} src={ClockFace_H} alt="hours" />
			<img className="Hand" style={{ transform: `rotate(${minutes * 6}deg)` }} src={ClockFace_M} alt="minutes" />
			<img className="Hand" style={{ transform: `rotate(${seconds * 6}deg)` }} src={ClockFace_S} alt="seconds" />
		</div>
	);
};

export default Watch;
