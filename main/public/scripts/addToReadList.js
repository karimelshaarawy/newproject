function addToReadList(bookName) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/addBook', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        bookName,
        hi: "fuck you"
    }));
}