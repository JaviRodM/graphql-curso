const Book = {
    write_by: (parent, args, {db}, info) => {
        return db.authors.find(author => author.id === parent.write_by)
    },
    register_by: (parent, args, {db}, info) => {
        return db.users.find(user => user.id === parent.register_by)
    }
}

export default Book