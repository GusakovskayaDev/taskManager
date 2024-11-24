
const popupMethods = {

	// Открыть popup _______________________________
	open(popupId, dataObj) {
		const popup = document.getElementById(popupId);
		
		const popup__title = document.querySelector('.popup__title');
		const popup__description = document.querySelector('.popup__description');

		const popup__titleInput = document.querySelector('.popup__title-input');
		const popup__descriptionInput = document.querySelector('.popup__description-input');

		const popup__edit = document.querySelectorAll('.popup__edit');

		if(dataObj){
				popup__titleInput.style.display = 'none';
				popup__descriptionInput.style.display = 'none';

				popup__title.style.display = 'block';
				popup__description.style.display = 'block';

				popup__title.innerText = dataObj.title;
				popup__description.innerText = dataObj.description;
				console.log(dataObj);

				// popup__descriptionInput.style.display = 'none';
				popup.style.display = 'block';
				popup__edit.forEach(icon => {
					icon.style.display = 'block';
				});
				return;
		}


		popup__title.style.display = 'none';
		popup__description.style.display = 'none';

		popup__titleInput.style.display = 'block';
		popup__descriptionInput.style.display = 'block';

		popup__titleInput.placeholder = 'New task';
		popup__descriptionInput.placeholder = 'New description';

		popup__edit.forEach(icon => {
			icon.style.display = 'none';
		});

		popup__title.innerText = 'New task';
		popup__description.innerText = 'New description';
		popup.style.display = 'block';
	},

	// Закрыть popup _______________________________
	close() {
			const popup = document.getElementById('popup');
			if (popup) {
					popup.style.display = 'none';
			}
	},

	// Отчистить popup _______________________________
	clean() {

	}
};

export default popupMethods;
