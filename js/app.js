import Github from "./github.js";
import UI from "./ui.js";

const github = new Github();
const ui = new UI();
const userInput = document.querySelector('#search-bar');

const getUserInfo = () => {
	if (userInput.value !== '') {
		github.getUser(userInput.value).then((profileData) => {
			if (profileData.profileData.message === 'Not Found') {
				// Show Alert
				ui.showAlert('User not found!', 'error');
			} else ui.showUI(profileData);
		});
	} else ui.clearUI();
};
userInput.addEventListener('keyup', getUserInfo);
