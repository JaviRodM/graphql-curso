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
    }
}

export default Mutation
