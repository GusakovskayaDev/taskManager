import listenersMethods from './listeners.js';

const popupMethods = {

	// Генерация элементов в popup _______________________________
	generation_newTask(){
			const popup__upperContainer = document.createElement('div');
			popup__upperContainer.classList.add('popup__upper-container');
			popup__upperContainer.id = 'popup__upper-container';

			const popup__informationContainer = document.createElement('div');
			popup__informationContainer.classList.add('popup__information-container');

			const popup__titleCard = document.createElement('h2');
			popup__titleCard.classList.add('popup__title-card');
			popup__titleCard.innerText = 'Новая задача';

			const popup__actions = document.createElement('div');
			popup__actions.classList.add('popup__actions');

			const popup__add = document.createElement('button');
			popup__add.classList.add('popup__add');
			popup__add.id = 'popup__add';
			popup__add.innerText = 'Добавить';
			const firstChild = popup__add.firstChild;
			

			const material__close = document.createElement('span');
			material__close.classList.add('popup__close', 'material-symbols-outlined');
			material__close.id = 'popup__close';
			material__close.innerText = 'close';

			const material__add = document.createElement('span');
			material__add.classList.add('material-symbols-outlined');
			material__add.innerText = 'add';

			const popup__information = document.createElement('div');
			popup__information.classList.add('popup__information');

			const popup__calendarСontainer = document.createElement('div');
			popup__calendarСontainer.classList.add('popup__calendar-container');
			
			const popup__title = document.createElement('input');
			popup__title.id = 'popup__title';
			popup__title.classList.add('popup__title');
			popup__title.type = 'text';
			popup__title.placeholder = 'Заголовок';

			const popup__description = document.createElement('textarea');
			popup__description.classList.add('popup__description');
			popup__description.id = 'popup__description';
			popup__description.placeholder = 'Описание';

			const popup__calendar = document.createElement('input');
			popup__calendar.classList.add('popup__calendar');
			popup__calendar.id = 'calendar';
			popup__calendar.type = 'text';
			
			popup__add.insertBefore(material__add, firstChild);
			
			popup__actions.appendChild(popup__add);
			popup__actions.appendChild(material__close);

			popup__upperContainer.appendChild(popup__titleCard);
			popup__upperContainer.appendChild(popup__actions);

			popup__information.appendChild(popup__title);
			popup__information.appendChild(popup__description);
			popup__calendarСontainer.appendChild(popup__calendar);

			popup__informationContainer.appendChild(popup__information);
			popup__informationContainer.appendChild(popup__calendarСontainer);

			popup__container.appendChild(popup__upperContainer);
			popup__container.appendChild(popup__informationContainer);

			flatpickr(popup__calendar, {
				inline: true,
				dateFormat: 'd m Y',
			});

			listenersMethods.popup__add();
	},

	generation_cardTask(dataObj){
		const popup__upperContainer = document.createElement('div');
		popup__upperContainer.classList.add('popup__upper-container');
		popup__upperContainer.id = 'popup__upper-container';

		const popup__informationContainer = document.createElement('div');
		popup__informationContainer.classList.add('popup__information-container');

		const popup__titleCard = document.createElement('h2');
		popup__titleCard.classList.add('popup__title-card');
		popup__titleCard.innerText = 'Карточка задачи';

		const popup__actions = document.createElement('div');
		popup__actions.classList.add('popup__actions');

		// Кнопка Сделано
		const popup__done = document.createElement('button');
		popup__done.id = 'popup__done';
		popup__done.classList.add('popup__done');
		popup__done.innerText = 'Выполнить';
		const firstChild_done = popup__done.firstChild;

		// Кнопка Сохаринть
		const popup__save = document.createElement('button');
		popup__save.id = 'popup__save';
		popup__save.classList.add('popup__save');
		popup__save.innerText = 'Сохранить';
		const firstChild_save = popup__save.firstChild;

		// Кнопка Удалить
		const popup__delete = document.createElement('button');
		popup__delete.id = 'popup__delete';
		popup__delete.classList.add('popup__delete');
		popup__delete.innerText = 'Удалить';
		const firstChild_delete = popup__delete.firstChild;

		const material__close = document.createElement('span');
		material__close.id = 'popup__close';
		material__close.classList.add('popup__close', 'material-symbols-outlined');
		material__close.innerText = 'close';

		// Иконка Выполнить
		const material__check = document.createElement('span');
		material__check.classList.add('material-symbols-outlined');
		material__check.innerText = 'check';

		// Иконка Сохранить
		const material__save = document.createElement('span');
		material__save.classList.add('material-symbols-outlined');
		material__save.innerText = 'save_as';

		// Иконка Удаилть
		const material__delete = document.createElement('span');
		material__delete.classList.add('material-symbols-outlined');
		material__delete.innerText = 'delete';

		const popup__information = document.createElement('div');
		popup__information.classList.add('popup__information');

		const popup__calendarСontainer = document.createElement('div');
		popup__calendarСontainer.classList.add('popup__calendar-container');
		
		const popup__title = document.createElement('input');
		popup__title.classList.add('popup__title');
		popup__title.id = 'popup__title';
		popup__title.type = 'text';
		popup__title.innerHTML = dataObj.title;
		popup__title.value = dataObj.title;
		popup__title.dataset.idtask = dataObj.id;
		const popup__description = document.createElement('textarea');
		popup__description.classList.add('popup__description');
		popup__description.id = 'popup__description';
		popup__description.innerText = dataObj.description;

		const popup__calendar = document.createElement('input');
		popup__calendar.classList.add('popup__calendar');
		popup__calendar.id = 'calendar';
		popup__calendar.type = 'text';

		popup__done.insertBefore(material__check, firstChild_done);
		popup__save.insertBefore(material__save, firstChild_save);
		popup__delete.insertBefore(material__delete, firstChild_delete);
		
		popup__actions.appendChild(popup__done);
		popup__actions.appendChild(popup__save);
		popup__actions.appendChild(popup__delete);
		popup__actions.appendChild(material__close);

		popup__upperContainer.appendChild(popup__titleCard);
		popup__upperContainer.appendChild(popup__actions);

		popup__information.appendChild(popup__title);
		popup__information.appendChild(popup__description);
		popup__calendarСontainer.appendChild(popup__calendar);

		popup__informationContainer.appendChild(popup__information);
		popup__informationContainer.appendChild(popup__calendarСontainer);

		popup__container.appendChild(popup__upperContainer);
		popup__container.appendChild(popup__informationContainer);

		flatpickr(popup__calendar, {
			inline: true,
			dateFormat: 'd m Y',
		});

		listenersMethods.popup__done();
		listenersMethods.popup__delete();
	},

	// Открыть popup _______________________________
	open(param, dataObj) {
			const popup = document.getElementById('popup');

			if(param === 'newTask'){
				this.generation_newTask();
			} else if(param === 'cardTask'){
				this.generation_cardTask(dataObj);
			}

			listenersMethods.popup__close();
		
			popup.style.display = 'block';
	},

	// Закрыть popup _______________________________
	close() {
			const popup = document.getElementById('popup');
			const popup__container = document.getElementById('popup__container');
			if (popup) {
				popup__container.innerHTML = '';
					popup.style.display = 'none';
			}
	},

	// Отчистить popup _______________________________
	clean() {
		const popup__container = document.getElementById('popup__container');
		popup__container.innerHTML = '';
	}
};

export default popupMethods;
