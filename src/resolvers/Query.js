const Query = {
    hello: (args) => {
        const {name} = args;
        return `Hola ${name || 'Mundo'}`
    },
    cantidad: () => 1,
    getUser: () => { return {name: 'Juan', lastName: 'Rod'} }
}

export default Query