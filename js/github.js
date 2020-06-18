class Github {
	constructor() {
		this.client_id = 'a7fe8c344fd58bbd816f';
		this.client_secret = 'c2086f34312821ec244321c50f5d440b5364b6ea';
	}
	async getUser(user) {
		const response1 = await fetch(
			`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);
		const response2 = await fetch(
			`https://api.github.com/users/${user}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`
		);

		const profileData = await response1.json();
		const repoData = await response2.json();

		return { profileData, repoData };
	}
}
