class UI {
	// To dynamically show the profile elements
	showUI(profileDataRepoData) {
		this.clearAlert();
		const profileData = profileDataRepoData.profileData;
		const repoData = profileDataRepoData.repoData;
		const profile = document.querySelector('#profile');

		profile.classList.add('card');
		profile.style.display = 'block';
		let output;
		output = `
    
    <div class="profile-content">
    <img src=${profileData.avatar_url} class="profile-pic" alt="">
    <div class="profile-info">
      <div class="profile-info-top">
        <div class="box primary-box">Public Repos: ${profileData.public_repos}</div>
        <div class="box light-box">Public Gists: ${profileData.public_gists}</div>
        <div class="box secondary-box">Followers: ${profileData.followers}</div>
        <div class="box tertiary-box">Following: ${profileData.following}</div>
      </div>
      <ul class="profile-info-bottom">
        <li class="list-info">Full Name : ${profileData.name}</li>
        <li class="list-info">Location : ${profileData.location}</li>
        <li class="list-info">Member Since: ${profileData.created_at.slice(0, profileData.created_at.indexOf('T'))}</li>
      </ul>
    </div>
  </div>
  <a href="${profileData.html_url}" target="_blank" class="btn">View Profile</a>
</div>

    `;
		let flag;
		if (repoData.length === 0) flag = false;
		else flag = true;

		if (flag === true) {
			repoData.forEach((repo, index) => {
				if (index === 0) {
					output += `<h2>Latest Repos</h2>`;
				}
				output += `

		  <div id="repo" class="card">
		  <div class="repo-link"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
		  <div class="profile-info-top">
		    <div class="box primary-box">Stars : ${repo.stargazers_count}</div>
		    <div class="box light-box">Forks : ${repo.forks}</div>
		    <div class="box secondary-box">Watchers : ${repo.watchers}</div>

		  </div>
		  </div>

		`;
			});
		} else output += `<h2>No Repos exist!</h2>`;

		profile.innerHTML = output;
	}
	// To clear the profile elements
	clearUI() {
		profile.style.display = 'none';
	}
	// Custom Alert
	showAlert(message, className) {
		this.clearAlert();
		const mainContainer = document.querySelector('#main-container');
		const mainCard = document.querySelector('#search-user-card');

		const div = document.createElement('div');
		div.classList.add(className);
		div.innerText = message;

		mainContainer.insertBefore(div, mainCard);
	}
	clearAlert() {
		this.clearUI();
		const currentAlert = document.querySelector('.error');
		if (currentAlert) currentAlert.remove();
	}
}
