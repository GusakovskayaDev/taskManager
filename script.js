import popupMethods from './scripts/popup.js';
import dataMethods from './scripts/data.js';
import listenersMethods from './scripts/listeners.js';

// Получение доступа к необходимым элементам
const tasks = document.querySelector('.tasks');
const title = document.getElementById('title');
const desc = document.getElementById('desc');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const complitiedTasks_container = document.querySelector('.complitiedTasks_container');
const popup_block = document.querySelector('.popup_block');

// Собрала в кучу прослушивателей событий
function addEventListeners() {

	listenersMethods.settings__add();
	listenersMethods.popup__close();
	listenersMethods.popup__container();
	

	const tasks__container = document.querySelectorAll('.tasks__container');
	const popup_block = document.querySelector('.popup_block');
	const popupTitle = document.getElementById('titleHere');
	const descHere = document.getElementById('descHere');

	// const popup = document.getElementById('popup');
	
	const popup__edit  = document.getElementById('popup__edit ');

	tasks__container.forEach(task => {
		task.addEventListener('click', () => {

			const taskData = {
				title: task.dataset.title,
				description: task.dataset.desc
			};

			popupMethods.open('popup', taskData);
		})
	});

}

// Модуль, хранящий в себе методы по работе с данными
const dataManager = {
	// Объект, хранящий задачи
	data: [],

	// Вывод записей на страницу
	displayRecord(record) {
    const tasks__container = document.createElement('div');
    tasks__container.classList.add('tasks__container');
		tasks__container.dataset.title = record.title;
		tasks__container.dataset.desc = record.description;

		const tasks__textContainer = document.createElement('div'); 
		tasks__textContainer.classList.add('tasks__textContainer');
		tasks__textContainer.data = {title: record.title, description: record.description, completed: record.completed}

		const tasks__settings = document.createElement('span');
		tasks__settings.classList.add('tasks__settings', 'material-symbols-outlined');
		tasks__settings.innerText = 'more_vert';
	
		// const button = document.createElement('button');
		// button.classList.add('delete');
		// button.innerHTML = 'Delete';
		// button.data = record.title;

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
    // const completed = document.createElement('p');
    // completed.classList.add('completed');
    // completed.innerHTML = record.completed ? 'Completed &#x2713;' : '';
	

		// tasks__settings.appendChild(button);

		tasks__titleContainer.appendChild(tasks__title);
		tasks__titleContainer.appendChild(tasks__date);

		tasks__textContainer.appendChild(tasks__titleContainer);
		tasks__textContainer.appendChild(tasks__description);

		tasks__container.appendChild(tasks__textContainer);
		tasks__container.appendChild(tasks__settings);

    tasks.appendChild(tasks__container);

		if(record.completed){
			complitiedTasks_container.appendChild(tasks__container);
		}

		// Добавляем обработчик удаления
	// 	button.addEventListener('click', () => {
	// 	const index = this.data.findIndex(element => element.title === button.data);
	// 	if (index !== -1) {
	// 		this.removeRecord(index);
	// 		tasks__container.remove(); // Удаляем элемент из DOM
	// 	}
	// });

		// Помечаем задачу сделанной
		const take = document.querySelectorAll('.take');
		take.forEach(element => {
			element.addEventListener('click', () => {
				const titleHere = document.getElementById('titleHere');
				const descHere = document.getElementById('descHere');
				const index = this.data.findIndex(element => element.title === titleHere.innerHTML);
				this.updateRecord(index, {
					title: titleHere.innerHTML,
					description: descHere.innerHTML,
          completed: true
        });
				popup_block.classList.remove("displayBlock");
			})
		});

		
  },
	
	// Инициализация данных из localStorage
  async init() {
		tasks.innerHTML = '';
		complitiedTasks_container.innerHTML = '';
    const storedData = localStorage.getItem('myData');
    this.data = storedData ? JSON.parse(storedData) : [];
		this.data.forEach(record => this.displayRecord(record));
  },

	// Добавление записи
	 addRecord(record) {
    this.data.push(record);
    this.save();
		this.displayRecord(record);
  },

	// Обновление записи
	updateRecord(index, updatedRecord) {
    this.data[index] = updatedRecord;
    this.save();
		this.init();
  },

	// Удаление записи по индексу
	removeRecord(index) {
		this.data.splice(index, 1);
		this.save();
	},

	// Сохранение данных в localStorage
  save() {
    localStorage.setItem('myData', JSON.stringify(this.data));
  },
}
dataManager.init();

// Добавляем слушателя на кнопку добавления задачи
add.addEventListener('click', () => {
	let letTitle = title.value;
	let letDesc = desc.value;

	let addThis = {
		title: letTitle,
		description: letDesc,
		completed: false,
	}
	dataManager.addRecord(addThis);
	title.value = '';
	desc.value = '';
});

 // Отчистить поля
clear.addEventListener('click', () => {
	title.value = '';
	desc.value = '';
});



// changing themes _______________________________________
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const switcher_checkbox = document.getElementById('switcher_checkbox');
//
if (localStorage.getItem('checkboxChecked') === 'true') {
	switcher_checkbox.checked = true;
}


switcher_checkbox.addEventListener('click', () => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	//
	localStorage.setItem('checkboxChecked', switcher_checkbox.checked);
});


// menu _______________________________________
const main = document.getElementById('main');
const sidebar = document.querySelector('.sidebar');
const sections = document.querySelectorAll('.section');
const sidebar__link = document.querySelectorAll('.sidebar__link');

sidebar.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('sidebar__link')) {
      event.preventDefault();

			sidebar__link.forEach((link) => {
				link.addEventListener('click', () => {target.classList.remove('sidebar__link_active')});
			});

			const idSection = target.getAttribute('data-key');
			const section_dom = document.getElementById(idSection);
			
			
			sections.forEach((section) => {
				section.classList.remove('active');
				section_dom.classList.add('active');
				target.classList.add('sidebar__link_active');
			})
    }
  },
  false
);


// Calendar
    document.addEventListener('DOMContentLoaded', function () {
        flatpickr('#calendar', {
					inline: true,
					dateFormat: 'd m Y',
        });
    });


		// Обновляем данные на странице
		addEventListeners();

