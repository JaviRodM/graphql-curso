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

        if (isEmailTaken) {
            throw new Error('email is taken')
        }

        db.users = db.users.map(user => {
            if (user.id === id) {
                users = {...user, ...data}
                return user
            }
            return user
        })

        return {...existUser, ...data}

    }
}

export default Mutation
