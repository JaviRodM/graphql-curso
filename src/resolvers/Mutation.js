import { v4 as uuidv4 } from 'uuid'

const showMsj = msj => {
    throw new Error(msj)
}

const encontar = (db, id, msj) => {

    const exist = db.find(item => item.id === id)
    if (!exist) {
        throw new Error(msj)
    }

    return exist
}

const Mutation = {
    createUser: (parent, {data}, {db}, info) => {
        const isEmailTaken = db.users.some(user => user.email === data.email)
        if (isEmailTaken) {
            showMsj(`Email is Taken`)
        }

        const user = {
            id: uuidv4(),
            ...data
        }

        db.users.push(user)

        return user
    },
    updateUser: (parent, {id, data}, {db}, info) => {
        const existUser = db.users.find(user => user.id === id)
        if (!existUser) {
            showMsj('User not exist')
        }

        const isEmailTaken = db.users.some(user => user.email === data.email)
        if (isEmailTaken) {
            showMsj('Thats email is taken')
        }

        db.users = db.users.map(user => {
            if (user.id === id) {
                user = {...user, ...data}
                return user
            }
            return user
        })

        return {...existUser, ...data}

    },
    createAuthor: (parent, {data}, {db}, info) => {
        const author = {
            id: uuidv4(),
            ...data
        }

        db.authors.push(author)

        return author
    },
    updateAuthor: (parent, {id, data}, {db}, info) => {
        const existAuthor = db.authors.find(author => author.id === id)

        if (!existAuthor) {
            showMsj('Author not exist')
        }

        db.authors = db.authors.map(author => {
            if (author.id === id) {
                author = {...author, ...data}
                return author
            }

            return author
        })

        return {...existAuthor, ...data}
    },
    createBook: (parent, {data}, {db}, info) => {
        const newBook = {
            id: uuidv4(),
            ...data
        }

        const existBook = db.books.some(book => book.title === newBook.title)
        if (existBook) {
            showMsj(`Sorry that book exist`)
        }

        db.books.push(newBook)

        return newBook
    },
    updateBook: (parent, {id,data}, {db}, info) => {
        const existBook = db.books.find(book => book.id === id)
        if (!existBook) {
            showMsj(`Thats book does not exist`)
        }

        db.books = db.books.map(book => {
            if (book.id === id) {
                book = {...book, ...data}
                return book
            }

            return book
        })

        return {...existBook, ...data}
    },
    deleteBook:(parent, {id}, {db}, info) => {
        const existBook = db.books.find(book => book.id === id)
        if (!existBook) {
            showMsj(`Book not found`)
        }

        db.books = db.books.reduce((acc, book) => {
            if (book.id !== id) {
                acc.push(book)
            }
            return acc
        },[])

        return existBook
    }
}

export default Mutation
