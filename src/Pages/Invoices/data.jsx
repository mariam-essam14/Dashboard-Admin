export const rows = [
    { id: 1, registaraId: "123512", name: "Jon Snow", age: 35, phone: "(665)121-5454", email: "jonsnow@gmail.com", adress: "0912 Won Street, Alabama, SY 10001", city: "New York", zipCode: "10001", },

    { id: 2, registaraId: "123512", name: "Cersei Lamnister", age: 42, phone: "(421)314-2288", email: "cerseilamnister@gmail.com", adress: "1234 Main Street, New York, NY 10001", city: "New York", zipCode: "44215", },

    { id: 3, registaraId: "4132513", name: "Jaime Lamnister", age: 45, phone: "(422)982-6739", email: "jaimelamnister@gmail.com", adress: "3333 Want Blvd, Estanza, NAY 42125", city: "New York", zipCode: "13151", },
    { id: 4, registaraId: "123512", name: "Anya Stark", age: 16, phone: "(921)425-6742", email: "anyastark@gmail.com", adress: "1514 Main Street, New York, NY 22298", city: "New York", zipCode: "87281", },
    { id: 5, registaraId: "123512", name: "Daenerys Tomas", age: 31, phone: "(421)455-6742", email: "daenerystomas@gmail.com", adress: "11122 Welping Ave, Tenting, CD 21321", city: "Tenting", zipCode: "15551", },
    { id: 6, registaraId: "123512", name: "Ever Melisandre", age: 150, phone: "(232)545-6483", email: "evermelisandre@gmail.com", adress: "1234 Canvile Street, Esvazark, NY 10001", city: "Esvazark", zipCode: "14215", },
    { id: 7, registaraId: "123512", name: "Ferrara Clifford", age: 44, phone: "(543)124-8123", email: "ferraraclifford@gmail.com", adress: "22215 Super Street, Everting, ZO 515234", city: "Evertin", zipCode: "10001", },
    { id: 8, registaraId: "512315", name: "Rossini Frances", age: 36, phone: "(222)444-5555", email: "rossinifrances@gmail.com", adress: "4123 Ever Blvd, Wentington, AD 142213", city: "Esteras", zipCode: "51523", },
    { id: 9, registaraId: "928397", name: "Harvey Roxie", age: 65, phone: "(444)555-6239", email: "harveyroxie@gmail.com", adress: "51234 Avery Street, Cantory, ND 212412", city: "Colunza", zipCode: "44215", },
    { id: 10, registaraId: "533215", name: "Enteri Redack", age: 42, phone: "(222)444-5555", email: "enteriredack@gmail.com", adress: "4123 Easer Blvd, Wentington, AD 142213", city: "Esteras", zipCode: "111234", },
    { id: 11, registaraId: "92197", name: "Steve Goodmane",age: 11, phone: "(444)555-6239",email: "stevegoodmane@gmail.com", adress: "51234 Fiveton Street, CunFory, ND 212412", city: "Colunza", zipCode: "1234", },
];

export const columns = [
    { field: 'id', headerName: 'ID', width: 33,},

    { field: 'registaraId', headerName: 'Registara ID'  },

    { field: 'name', headerName: 'Name', flex: 1 , cellClassName: "name-colums--cell" },

    { field: 'age',type:"number" ,headerName: 'Age',flex: 1 , align: "left", headerAlign: "left" },

    { field: 'phone', headerName: 'Phone Number', flex: 1 },

    { field: 'email', headerName: 'Email', flex: 1 },

    { field: 'adress', headerName: 'Adress', flex: 1},

    { field: 'city', headerName: 'City', flex: 1 },

    { field: 'zipCode', headerName: 'Zip Code', flex: 1 },
];