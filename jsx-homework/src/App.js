import Spoiler from "./components/Spoiler";
import RangeInput from "./components/RangeInput";
import PassworbConfirm from "./components/PasswordConfirm";
import TimerContainer from "./components/Timer";

import "./App.scss";
// import Watch from "./components/Watch";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>React JSX Homework</h1>
			</header>
			<div className="HW-Box">
				<h2>Spoiler</h2>
				<Spoiler header={<h1>Заголовок</h1>} open>
					<h2>Контент 1</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto alias nulla accusamus maxime
						optio beatae? Nihil illum architecto eum, corporis officia dolorum vitae provident velit sint ad ipsam
						hic ex.
					</p>
				</Spoiler>

				<Spoiler>
					<h2>Контент 2</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto alias nulla accusamus maxime
						optio beatae? Nihil illum architecto eum, corporis officia dolorum vitae provident velit sint ad ipsam
						hic ex.
					</p>
				</Spoiler>
			</div>
			<div className="HW-Box">
				<h2>Input Range</h2>
				{<RangeInput min={2} max={10} />}
			</div>
			<div className="HW-Box">
				<h2>Password Confirm</h2>
				<PassworbConfirm min={2} />
			</div>
			<div className="HW-Box">
				<h2>Timer</h2>
				<TimerContainer />
			</div>
			{/* <div className="HW-Box">
				<h2>Watch</h2>
				<Watch />
			</div> */}
		</div>
	);
}

export default App;
