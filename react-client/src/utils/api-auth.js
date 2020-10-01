const apiUrl = 'http://localhost:4000';
export const signin = user => {
	return fetch(`${apiUrl}/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user)
	})
		.then(response => {
			return response.json();
		})
		.catch(err => console.log(err));
};