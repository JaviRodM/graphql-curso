const Query = {
    hello: (parant, args, ctx, info) => {
        const {name} = args;
        return `Hola ${name || 'Mundo'}`
    },
    quantity: () => 1,
    user: (parent, {id}, ctx, info) =>  {
      const {db} = ctx
      if(!id) {
          return db.users
      } 
      return db.users.filter(user => user.id === id)
    },
    author: (parent, {id}, {db}, info) => {
        if (!id) {
            return db.authors
        }
        return db.authors.filter(author => author.id === id)
    },
    book: (parent, {id}, {db}, info) => {
        if (!id) {
            return db.books
        }
        return db.books.filter(book => book.id === id)
    }
}

export default Query