import popupMethods from './popup.js';

const dataMethods = {
	data: [],

	async init() {
    const storedData = localStorage.getItem('myTasks');
    this.data = storedData ? JSON.parse(storedData) : [];

		const tasks = document.querySelector('.tasks');
		tasks.innerHTML = '';
		
		this.data.forEach(record => this.display(record));
  },

	display(record) {
		const completed = document.querySelector('.completed');
		const tasks = document.querySelector('.tasks');

    const tasks__container = document.createElement('div');
		tasks__container.id = 'tasks__container';
    tasks__container.classList.add('tasks__container');
		tasks__container.dataset.title = record.title;
		tasks__container.dataset.desc = record.description;

		const tasks__textContainer = document.createElement('div'); 
		tasks__textContainer.classList.add('tasks__textContainer');

		const tasks__settings = document.createElement('span');
		tasks__settings.classList.add('tasks__settings', 'material-symbols-outlined');
		tasks__settings.innerText = 'more_vert';

    const tasks__title = document.createElement('h2');
		tasks__title.classList.add('tasks__title');
    tasks__title.innerHTML = record.title;

    const tasks__description = document.createElement('p');
		tasks__description.classList.add('tasks__description');
    tasks__description.innerHTML = record.description.split(' ').slice(0, 6).join(' ') + `...`;

    const tasks__titleContainer = document.createElement('div');
    tasks__titleContainer.classList.add('tasks__title-container');

    const tasks__date = document.createElement('p');
    tasks__date.classList.add('tasks__date');
    tasks__date.innerHTML = '24.11.2024';

		tasks__titleContainer.appendChild(tasks__title);
		tasks__titleContainer.appendChild(tasks__date);

		tasks__textContainer.appendChild(tasks__titleContainer);
		tasks__textContainer.appendChild(tasks__description);

		tasks__container.appendChild(tasks__textContainer);
		tasks__container.appendChild(tasks__settings);

    tasks.appendChild(tasks__container);

		if(record.completed){
			completed.appendChild(tasks__container);
		}
	},

	display_clear(){
		const tasks = document.querySelector('.tasks');
		const tasks__container = document.createElement('div');
		tasks.innerHTML = '';
		tasks__container.innerHTML = '';
	},

	add(dataObj) {
    this.data.push(dataObj);
    this.save();
		this.display(dataObj);
		popupMethods.close();
  },

	save() {
    localStorage.setItem('myTasks', JSON.stringify(this.data));
  },

	remove() {
			const popup__title = document.getElementById('popup__title');
	
			const index = this.data.findIndex(element => element.title === popup__title.value);

			if (index !== -1) {
					this.data.splice(index, 1);
					this.save();
			}
		
			// this.save();
			// this.display_clear();
			// this.init();
			popupMethods.close();


				// Добавляем обработчик удаления
				// 	button.addEventListener('click', () => {
				// 	const index = this.data.findIndex(element => element.title === button.data);
				// 	if (index !== -1) {
				// 		this.removeRecord(index);
				// 		tasks__container.remove(); // Удаляем элемент из DOM
				// 	}
				// });

				// Удаление записи по индексу
				// removeRecord(index) {
				// 	this.data.splice(index, 1);
				// 	this.save();
				// },
	},

	done() {
			const popup__title = document.getElementById('popup__title');
			const index = this.data.findIndex(element => element.title === popup__title.value);

			const completed = {
					title: popup__title.value,
					description: popup__title.value,
					completed: true
			}

			this.data[index] = completed;
			this.save();
			popupMethods.close();
	},
}

export default dataMethods;