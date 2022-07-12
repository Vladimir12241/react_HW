import { actionPromise, store } from "./promiseReducer";

export const getFetch = async (name, url) => {
	try {
		let result = await fetch(url);
		if (result.ok) {
			result = await result.json();
			getFullFetch(name, url, result);
			return result;
		}
	} catch (err) {
		console.log(err);
	}
};

const oneFetch = async (url) => {
	try {
		let result = await fetch(url);
		if (result.ok) {
			result = await result.json();
			return result;
		}
	} catch (err) {
		console.log(err);
	}
};

const getFullFetch = async (name, url, data) => {
	let proms = [{ name: name, url: url }];
	for (let key in data) {
		if (typeof data[key] === "string" && data[key].includes("http")) {
			const single = {
				name: key,
				url: data[key],
			};
			proms.push(single);
		}
		if (typeof data[key] === "object") {
			const multiply = {
				name: key,
				url: data[key],
			};
			proms.push(multiply);
		}
	}
	allFetchesForOneDispatch(name, proms);
};

const allFetchesForOneDispatch = async (name, proms) => {
	store.dispatch(
		actionPromise(
			name,
			await Promise.all(
				proms.map(async (item) =>
					typeof item.url === "object"
						? await multiplyActionFetch(item.name, item.url)
						: await singleActionFetch(item.name, item.url)
				)
			)
		)
	);
};

const singleActionFetch = async (name, url) => {
	let result = await oneFetch(url);
	return { [name]: result };
};

const multiplyActionFetch = async (name, promArr) => {
	let totalResult;
	if (!promArr) return;
	totalResult = await Promise.all(promArr.map(async (url) => await oneFetch(url)));
	return { [name]: totalResult };
};
