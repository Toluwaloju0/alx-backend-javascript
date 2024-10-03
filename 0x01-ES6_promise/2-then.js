export default function handleResponseFromAPI(promise) {
	promise.then((resolve) => {
		if (resolve) {
			console.log('Got a response from the API');
			return { status: 200, body: 'success' };
		} else {
			console.log('Got a response from the API');
			return new Error();
		}
	});
}
