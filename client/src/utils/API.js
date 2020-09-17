import axios from "axios";

export default {
    createBook( data ){
        return axios.post("/api/books", data);
    },

    deleteBook(bookId) {
        return axios.delete(`/api/books/${bookId}`);
    },

    getBooks(){
        return axios.get("/api/books");
    }
}