import popupMethods from './popup.js';

const listenersMethods = {
	
	settings__add(){
			const settings__add = document.getElementById('settings__add');
			settings__add.addEventListener('click', () => {
					popupMethods.open('popup');
			});
	},

	popup__close(){
			const popup__close = document.getElementById('popup__close');
			popup__close.addEventListener('click', () => {
					popupMethods.close();
			});
	},

	popup__container(){
			const popup__container = document.getElementById('popup__container');
			document.addEventListener('mousedown', (event) => {
					if (!popup__container.contains(event.target)) {
							popupMethods.close();
					}
			});
	},


}

export default listenersMethods;