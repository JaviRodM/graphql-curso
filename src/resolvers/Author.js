const Author = {
    register_by: (parent, args,{db}, info) => {
        return db.users.find(user => user.id === parent.register_by)
    },
    books: (parent, args, {db}, info) => {
        return db.books.filter(book => book.write_by === parent.id)
    }
}

export default Author