const originalFetch = fetch;
fetch = (url, params = { headers: {} }) => {
	params.headers.Authorization = "Bearer " + localStorage.authToken;
	return originalFetch(url, params);
};
