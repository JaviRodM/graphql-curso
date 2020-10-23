const Book = {
    write_by: (parent, args, {db}, info) => {
        return db.authors.find(author => author.id === parent.write_by)
    }
}

export default Book