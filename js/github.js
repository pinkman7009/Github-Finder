import * as Config from './config.js';
export default class Github {
	constructor() {
		this.client_id = Config.client_id;
		this.client_secret = Config.client_secret;
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
