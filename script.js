import dataMethods from './scripts/data.js';
import listenersMethods from './scripts/listeners.js';

// Прослушиватели событий
function addEventListeners() {
		listenersMethods.settings__add();
		listenersMethods.popup__container();
		// listenersMethods.tasks__container();
}

// changing themes _______________________________________
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
const switcher_checkbox = document.getElementById('switcher_checkbox');
if (localStorage.getItem('checkboxChecked') === 'true') {
	switcher_checkbox.checked = true;
}

switcher_checkbox.addEventListener('click', () => {
	const currentTheme = document.documentElement.getAttribute('data-theme');
	const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
	localStorage.setItem('theme', newTheme);
	localStorage.setItem('checkboxChecked', switcher_checkbox.checked);
});


// menu _______________________________________
const sidebar = document.querySelector('.sidebar');
const sections = document.querySelectorAll('.section');
const section = document.querySelector('section');
const sidebar__link = document.querySelectorAll('.sidebar__link');
const sidebar__tasks = document.getElementById('sidebar__tasks');

sidebar.addEventListener('click', (event) => {
		sidebar__tasks.classList.remove('sidebar__link_active');
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

	section.classList.add('active');
	sidebar__tasks.classList.add('sidebar__link_active');

	dataMethods.init();
	dataMethods.display();
	addEventListeners();

