// Declare an empty books array
let books = [];

// Function to add book details
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to show book details
function showBooks() {
    const booksDiv = books.map((book, index) => `
        <h1>Book Number: ${index + 1}</h1>
        <p><strong>Book Name:</strong> ${book.name}</p>
        <p><strong>Author Name:</strong> ${book.authorName}</p>
        <p><strong>Book Description:</strong> ${book.bookDescription}</p>
        <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
        <button onclick="editBook(${index})">Edit</button>
        <button onclick="deleteBook(${index})">Delete</button>
    `).join('');
    document.getElementById('books').innerHTML = booksDiv;
}

// Function to clear input fields
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// Function to edit a book
function editBook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;

    // Replace the addBook function to updateBook
    document.getElementById('addBookButton').onclick = function() {
        updateBook(index);
    };
}

// Function to update a book
function updateBook(index) {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);

    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        books[index] = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        showBooks();
        clearInputs();
        document.getElementById('addBookButton').onclick = addBook;
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// Function to delete a book
function deleteBook(index) {
    books.splice(index, 1);
    showBooks();
}
