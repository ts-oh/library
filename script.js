// book container div
const bookContainer = document.querySelector('#card-container');

// button to open pop-up form
const openFormBtn = document.querySelector('#open-form');
openFormBtn.addEventListener('click', openForm);

// closing button for pop-up form
const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', closeForm);

// accessing the values in the add book form
const bookTitle = document.forms['form-container']['book-title'];

const bookAuthor = document.forms['form-container']['book-author'];

const bookPages = document.forms['form-container']['book-pages'];

const bookRead = document.forms['form-container']['readCheckBox'];

// add button to add new books from the pop-up form
const addBook = document.querySelector('.btn-add');
addBook.addEventListener('click', createBook);

const addBtn = document.querySelector('.btn-add');

// button to delete each book
const delBtn = document.querySelector('.btn-delete');

function isRead(readValue) {
	if (readValue === 'true') {
		return 'Read';
	} else if (readValue === 'false') {
		return 'Not Read';
	}
}

addBtn.addEventListener('click', function (e) {
	e.preventDefault();
	const titleVal = bookTitle.value;
	const authorVal = bookAuthor.value;
	const pagesVal = bookPages.value;
	const readVal = bookRead.value;

	const readBool = isRead(readVal);

	const newBook = new createBook(titleVal, authorVal, pagesVal, readBool);
	console.log(newBook);

	myLibrary.push(newBook);

	Book();
});

let myLibrary = [];
console.log(myLibrary);

function Book() {
	const bookAddedTitle = myLibrary[myLibrary.length - 1].title;
	const bookAddedAuthor = myLibrary[myLibrary.length - 1].author;
	const bookAddedPages = myLibrary[myLibrary.length - 1].pages;
	const bookAddedRead = myLibrary[myLibrary.length - 1].read;

	const bookCardTitle = document.createElement('h2');
	const bookCardAuthor = document.createElement('p');
	const bookCardPages = document.createElement('p');
	const bookCardRead = document.createElement('p');
	const bookDelete = document.createElement('button');

	bookDelete.classList.add('btn-delete');

	bookCardTitle.textContent = bookAddedTitle;
	bookCardAuthor.textContent = bookAddedAuthor;
	bookCardPages.textContent = bookAddedPages;
	bookCardRead.textContent = bookAddedRead;
	bookDelete.textContent = 'Delete';

	bookContainer.appendChild(bookCardTitle);
	bookContainer.appendChild(bookCardAuthor);
	bookContainer.appendChild(bookCardPages);
	bookContainer.appendChild(bookCardRead);
	bookContainer.appendChild(bookDelete);

	delBtn.addEventListener('click', function (e) {
		e.preventDefault();
		console.log('this is delete btn');
	});
}

// An object constructor
function createBook(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function openForm() {
	document.querySelector('#book-popup').style.display = 'block';
}

function closeForm() {
	document.querySelector('#book-popup').style.display = 'none';
}
