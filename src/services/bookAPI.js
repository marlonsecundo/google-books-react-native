import { create } from 'apisauce';

const api = create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes',
});


api.addAsyncRequestTransform(request => async () => {
    request.url += '&key=AIzaSyCNZFT6IgyNQJEZoowp8S9l_-O3jnDNrLQ';
});

searchBooks = async (title) => {

    const response = await api.get("?q=" + title);

    let books = [];

    if (response.data.totalItems > 0) {
        books = response.data.items.map((item) => {
            let image = null;
            if (item.volumeInfo.imageLinks !== undefined) image = item.volumeInfo.imageLinks.smallThumbnail;
            return { id: item.id, title: item.volumeInfo.title, image: image }
        });
    }
    return { books, response };
}

export { searchBooks };