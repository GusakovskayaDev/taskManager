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
					const calendar = document.getElementById('calendar');
					
					let title = popup__title.value;
					let desc = popup__description.value;

					// Генерируем Идентификатор
					let newArray = [...new Set(dataMethods.data.map(item => {
						let num = item.id.replace('TASKS', '');
						return parseInt(num, 10);
					}))];
					let maxId = Math.max(...newArray); 
					// if(){
						
					// }
					let newIdNumber = maxId + 1;
					let newId = 'TASKS' + String(newIdNumber).padStart(3, '0');

					const todayDate = new Date();
					const day = todayDate.getDate();
					const month = todayDate.getMonth() + 1;
					const year = todayDate.getFullYear();

					const dataCompleted = calendar.value;
					const formattedDate = dataCompleted.split(" ").join(".");

					let dataObj = {
						id: newId,
						title: title,
						description: desc,
						completed: false,
						dataFrom: `${day}.${month}.${year}`,
						dataCompleted: formattedDate
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
						id: task.dataset.idtask,
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
			});
	},

	login__login(){
			const login__login = document.getElementById('login__login');
			login__login.addEventListener('click', () => {
					popupMethods.open('login');
			});
	},

	login__signup(){
			const login__signup = document.getElementById('login__signup');
			login__signup.addEventListener('click', () => {
					popupMethods.open('signup');
			});
	},

}

export default listenersMethods;