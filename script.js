const bookDisplay = document.querySelector('#book-item');
const openFormBtn = document.querySelector('#open-form');
openFormBtn.addEventListener('click', openForm);
const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', closeForm);

let myLibrary = [];

function Book() {
	// the constructor
	myLibrary.forEach((book) => {
		const bookCard = document.createElement('h1');
		bookCard.textContent = book;
		bookDisplay.appendChild(bookCard);
	});
}

// An object constructor
function addBookToLibrary(title, author, pages) {
	// add books
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.info = function () {
		return `${title} by ${author}, ${pages} pages`;
	};
}

Book();

function openForm() {
	document.getElementById('book-form').style.display = 'block';
}

function closeForm() {
	document.getElementById('book-form').style.display = 'none';
}
