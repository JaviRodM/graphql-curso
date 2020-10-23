const users = [
    {
        id: "1",
        name: "Javi",
        lastName: "Rod"
    },
    {
        id: '2',
        name: 'Alex',
        lastName: 'Arias'
    }
]

const authors = [
    {
        id: '1',
        name: 'Grabriel gracia Marquez',
        country: 'Colombia',
        register_by: '1'
    },
    {
        id: '2',
        name: 'Ricardo Palma',
        country: 'Chile',
        register_by: '2'
    },
    {
        id: '3',
        name: 'Pablo Neruda',
        country: 'Peru',
        register_by: '2'
    },
    {
        id: '4',
        name: 'Cesar Vallejo',
        country: 'Argentina',
        register_by: '1'
    },
]

const books = [
    {
        id: '1',
        title: 'Cien anos de Soledad',
        description: 'Libro acerca de un a familia',
        quantity: 280,
        price: 100,
        write_by: '1',
        register_by: '2'
    },
    {
        id: '2',
        title: 'tunsgteno',
        description: 'Libro acerca de la explotacion laboral',
        quantity: 10,
        price: 50,
        write_by: '4',
        register_by: '1'
    },
    {
        id: '3',
        title: 'Los Heraldos negros',
        description: 'Poemas modernistas',
        quantity: 10,
        price: 20,
        write_by: '4',
        register_by: '2'
    },
    {
        id: '4',
        title: 'Vivir para contarlo',
        description: 'Libro acerca de experiencias vividas',
        quantity: 25,
        price: 20,
        write_by: '1',
        register_by: '2'
    },
]

const db = {
    users,
    books,
    authors,
}

export { db as default }