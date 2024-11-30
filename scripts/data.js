import popupMethods from './popup.js';
import listenersMethods from './listeners.js';

const dataMethods = {
	data: [],

	async init() {
    const storedData = localStorage.getItem('myTasks');
    this.data = storedData ? JSON.parse(storedData) : [
				{
					"id": "TASKS001",
					"title": "Здесь будет Ваша задача",
					"description": "А здесь будет описание Вашей задачи",
					"completed": false,
					"dataFrom": "24.11.2024",
					"dataCompleted": "20.12.2024"
			}
		];

		const tasks = document.querySelector('.tasks');
		const completed = document.querySelector('.completed');
		tasks.innerHTML = '';
		completed.innerHTML = '';
  },

	display() {
		const completed = document.querySelector('.completed');
		const tasks = document.querySelector('.tasks');
		
		this.data.forEach(record => {
			const tasks__container = document.createElement('div');
			tasks__container.id = 'tasks__container';
			tasks__container.classList.add('tasks__container');
			tasks__container.dataset.title = record.title;
			tasks__container.dataset.desc = record.description;
			tasks__container.dataset.idtask = record.id;

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
			tasks__date.innerHTML = record.dataCompleted;

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
		});

		listenersMethods.tasks__container();
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
		this.init();
		this.display();
		// listenersMethods.tasks__container();
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
					this.init();
					this.display();
					// listenersMethods.popup__delete();
			}
			popupMethods.close();
	},

	done() {
			const popup__title = document.getElementById('popup__title');
			const index = this.data.findIndex(element => element.id === popup__title.dataset.idtask);

			this.data[index].completed = true;
			this.save();
			this.init();
			this.display();
			popupMethods.close();
	},
}

export default dataMethods;