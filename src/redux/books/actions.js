export const types = {
    addBook: "ADD_BOOK",
    removeBook: "REMOTE_BOOK",
    updateBook: "UPDATE_BOOK",
    getBook: "GET_BOOK",
}

export function addBook(book) {
    return {
        type: types.addBook,
        book: book,
    }
}

export function removeBook(book) {
    return {
        type: types.removeBook,
        book: book,
    }
}

export function updateBook(book) {
    return {
        type: types.updateBook,
        book: book
    }
}

export function getBook(id) {
    return {
        type: types.getBook,
        id: id
    }
}