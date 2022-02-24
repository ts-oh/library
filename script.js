let myLibrary = [
	{
		title: 'Your Book Title',
		author: 'Íte Marthe',
		pages: '231',
		read: 'no',
	},
	{
		title: 'Cool Book Title',
		author: 'Nir Helena',
		pages: '137',
		read: 'yes',
	},
	{
		title: 'Awesome Book Title',
		author: 'Adam Azriel',
		pages: '341',
		read: 'no',
	},
	{
		title: 'Nice Book Title',
		author: 'Òscar José Ángel',
		pages: '507',
		read: 'yes',
	},
];

const openModalBtn = document.querySelector('#open-modal-btn');
const closeModalBtn = document.querySelector('#close-modal-btn');
const addBookBtn = document.querySelector('#add-book-btn');
const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const pages = document.querySelector('#pages-input');
const read = document.querySelector('#read-radio');
const notRead = document.querySelector('#not-read-radio');
const libraryContainer = document.querySelector('.library-container');
const error = document.querySelector('#error');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
addBookBtn.addEventListener('click', addNewBookToLibrary);

function addNewBookToLibrary() {
	readValueCheck();
	createNewBook();
	clearDisplay();
	renderDisplay();
}

function openModal() {
	document.querySelector('#overlay').style.display = 'block';
}

function closeModal() {
	document.querySelector('#overlay').style.display = 'none';
	error.textContent = '';
}

function createNewBook() {
	if (title.value === '' && author.value === '' && pages.value === '') {
		return (error.textContent = 'Please enter your book input ⚠️');
	} else {
		let newBook = new Book(
			title.value,
			author.value,
			pages.value,
			read.value.toLowerCase()
		);
		myLibrary.push(newBook);
		trimBookObj();
		closeModal();
		return newBook;
	}
}

class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function readValueCheck() {
	if (read.checked === true) {
		return (read.value = 'yes');
	} else if (notRead.checked === true) {
		return (read.value = 'no');
	}
}

function trimBookObj() {
	myLibrary.forEach((i) => {
		i.title = i.title.replace(/\s+/g, ' ').trim();
		i.author = i.author.replace(/\s+/g, ' ').trim();
		i.pages = i.pages.replace(/\s+/g, ' ').trim();
	});
}

function renderDisplay() {
	libraryContainer.textContent = '';
	for (let i = 0; i < myLibrary.length; i++) {
		const bookContainer = document.createElement('div');
		bookContainer.setAttribute('class', 'book-container');
		bookContainer.setAttribute('data-index', `${i}`);
		libraryContainer.append(bookContainer);

		const bookTitle = document.createElement('p');
		bookTitle.textContent = `Title: ${myLibrary[i].title}`;
		bookContainer.append(bookTitle);

		const bookAuthor = document.createElement('p');
		bookAuthor.textContent = `Author: ${myLibrary[i].author}`;
		bookContainer.append(bookAuthor);

		const bookPages = document.createElement('p');
		bookPages.textContent = `Pages: ${myLibrary[i].pages}`;
		bookContainer.append(bookPages);

		const bookRead = document.createElement('p');
		bookRead.textContent = `Read?: ${myLibrary[i].read}`;
		bookContainer.append(bookRead);

		const readBtn = document.createElement('button');
		readBtn.setAttribute('class', 'read-status-btn');
		readBtn.textContent = `Read? 🙋🏻/🙅🏻‍♂️`;
		bookContainer.append(readBtn);

		const deleteBtn = document.createElement('button');
		deleteBtn.setAttribute('class', 'delete-book-btn');
		deleteBtn.textContent = `Remove 💥`;
		bookContainer.append(deleteBtn);
	}

	const bookReadBtn = document.querySelectorAll('.read-status-btn');

	const bookReadBtnArr = [...bookReadBtn].forEach((btn) => {
		btn.addEventListener('click', readCheck);
	});

	function readCheck(e) {
		const indexNum = e.target.parentElement.dataset.index;
		readStatusChange(indexNum);
	}

	const bookDeleteBtn = document.querySelectorAll('.delete-book-btn');

	const bookDeleteBtnArr = [...bookDeleteBtn].forEach((btn) => {
		btn.addEventListener('click', deleteCheck);
	});

	function deleteCheck(e) {
		const indexNum = e.target.parentElement.dataset.index;
		deleteBook(indexNum);
	}
}

function clearDisplay() {
	libraryContainer.textContent = '';
}

function deleteBook(i) {
	myLibrary.splice(0, 1);
	clearDisplay();
	renderDisplay();
}

function readStatusChange(i) {
	if (myLibrary[i].read === 'yes') {
		myLibrary[i].read = 'no';
	} else if (myLibrary[i].read === 'no') {
		myLibrary[i].read = 'yes';
	}
	clearDisplay();
	renderDisplay();
}

renderDisplay();
