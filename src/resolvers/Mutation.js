import { v4 as uuidv4 } from 'uuid'

const Mutation = {
    createUser: (parent, args, {db}, info) => {
        const isEmailTaken = db.users.some(user => user.email === args.email)
        if (isEmailTaken) {
            throw new Error('Thats email is taken')
        }

        const user = {
            id: uuidv4(),
            ...args
        }

        db.users.push(user)

        return user
    },
    updateUser: (parent, args, {db}, info) => {
        const {id, ...data} = args
        const existUser = db.users.find(user => user.id === id)
        if (!existUser) {
            throw new Error('User not exist')
        }

        const isEmailTaken = db.users.some(user => user.email === data.email)
        if (isEmailTaken) {
            throw new Error('Thats email is taken')
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
    createAuthor: (parent, args, {db}, info) => {
        const author = {
            id: uuidv4(),
            ...args
        }

        db.authors.push(author)

        return author
    },

    updateAuthor: (parent, args, {db}, info) => {
        const { id, ...data} = args
        const existAuthor = db.authors.find(author => author.id === id)

        if (!existAuthor) {
            throw new Error('Author not exist')
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
    createBook: (parent, args, {db}, info) => {
        const newBook = {
            id: uuidv4(),
            ...args
        }

        const existBook = db.books.some(book => book.title === newBook.title)
        if (existBook) {
            throw new Error(`Sorry that book exist`)
        }

        db.books.push(newBook)

        return newBook
    },
    updateBook: (parent, args, {db}, info) => {
        const {id, ...data} = args;
        const existBook = db.books.find(book => book.id === id)
        if (!existBook) {
            throw new Error(`Thats book does not exist`)
        }

        db.books = db.books.map(book => {
            if (book.id === id) {
                book = {...book, ...data}
                return book
            }

            return book
        })

        return {...existBook, ...data}
    }
}

export default Mutation
