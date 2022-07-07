const CharacterSelect = () => {
	const episode = document.body.querySelectorAll(".About-Characters");
	episode.forEach((item) => {
		if (item.classList.value.includes("hide")) return;

		item.classList.add("hide");
	});
};
const keyGen = () => {
	const key = Math.random();
	return key;
};

export { keyGen, CharacterSelect };
