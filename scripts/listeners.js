import popupMethods from './popup.js';
import dataMethods from './data.js';

const listenersMethods = {
	
	// Прослушиватель на кнопку "Добавить задачу" _____________________
	settings__add(){
			const settings__add = document.getElementById('settings__add');
			settings__add.addEventListener('click', () => {
					popupMethods.open('newTask');
			});
	},

	// Прослушиватель на кнопку в попап "Закрыть" _____________________
	popup__close(){
			const popup__close = document.getElementById('popup__close');
			popup__close.addEventListener('click', () => {
					popupMethods.close();
			});
	},

	// Прослушиватель при клике на область вне попап _____________________
	popup__container(){
			const popup__container = document.getElementById('popup__container');
			document.addEventListener('mousedown', (event) => {
					if (!popup__container.contains(event.target)) {
							popupMethods.close();
					}
			});
	},

	// Прослушиватель на кнопку в попап "Сохранить" _____________________
	popup__add(){
			const popup__add = document.getElementById('popup__add');
			popup__add.addEventListener('click', () => {
					const popup__title = document.getElementById('popup__title');
					const popup__description = document.getElementById('popup__description');
					
					let title = popup__title.value;
					let desc = popup__description.value;

					let dataObj = {
						title: title,
						description: desc,
						completed: false,
					}

					dataMethods.add(dataObj);
					popup__title.value = '';
					popup__description.value = '';
			});
	},

	// Прослушиватель при клике на задачу _____________________
	tasks__container(){
		const tasks__container = document.querySelectorAll('.tasks__container');
		tasks__container.forEach(task => {
				task.addEventListener('click', () => {
					const taskData = {
						title: task.dataset.title,
						description: task.dataset.desc
					};
					popupMethods.open('cardTask', taskData);
				})
		});
	},

	// Прослушиватель на кнопку Выполнить _____________________
	popup__done(){
			const popup__done = document.getElementById('popup__done');
			popup__done.addEventListener('click', () => {
					dataMethods.done();
			})
	},

	// Прослушиватель на кнопку Удалить _____________________
	popup__delete(){
			const popup__delete = document.getElementById('popup__delete');
			popup__delete.addEventListener('click', () => {
					dataMethods.remove();
			})
	},

}

export default listenersMethods;