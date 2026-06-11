const locations = [
{
    id: 1,
    name: "Praça do Comércio",
    country: "Portugal",
    city: "Lisboa",
    lat: 38.7077,
    lng: -9.1366,
    image: "/images/praca-comercio.jpg",
    hints: [
        "Capital europeia",
        "Situada junto ao rio Tejo",
        "Lisboa"
    ]
},
{
    id: 2,
    name: "Torre dos Clérigos",
    country: "Portugal",
    city: "Porto",
    lat: 41.1456,
    lng: -8.6147,
    image: "/images/clerigos.jpg",
    hints: [
        "Cidade do norte de Portugal",
        "Monumento religioso",
        "Porto"
    ]
},
{
    id: 3,
    name: "Sagrada Família",
    country: "Espanha",
    city: "Barcelona",
    lat: 41.4036,
    lng: 2.1744,
    image: "/images/sagrada-familia.jpg",
    hints: [
        "Obra de Gaudí",
        "Catalunha",
        "Barcelona"
    ]
},
{
    id: 4,
    name: "Plaza Mayor",
    country: "Espanha",
    city: "Madrid",
    lat: 40.4155,
    lng: -3.7074,
    image: "/images/plaza-mayor.jpg",
    hints: [
        "Capital espanhola",
        "Praça histórica",
        "Madrid"
    ]
},
{
    id: 5,
    name: "Torre Eiffel",
    country: "França",
    city: "Paris",
    lat: 48.8584,
    lng: 2.2945,
    image: "/images/eiffel.jpg",
    hints: [
        "Monumento mais visitado do mundo",
        "Capital francesa",
        "Paris"
    ]
},
{
    id: 6,
    name: "Arco do Triunfo",
    country: "França",
    city: "Paris",
    lat: 48.8738,
    lng: 2.2950,
    image: "/images/arco-triunfo.jpg",
    hints: [
        "Avenida dos Campos Elísios",
        "Capital francesa",
        "Paris"
    ]
},
{
    id: 7,
    name: "Coliseu",
    country: "Itália",
    city: "Roma",
    lat: 41.8902,
    lng: 12.4922,
    image: "/images/coliseu.jpg",
    hints: [
        "Império Romano",
        "Capital italiana",
        "Roma"
    ]
},
{
    id: 8,
    name: "Torre de Pisa",
    country: "Itália",
    city: "Pisa",
    lat: 43.7229,
    lng: 10.3966,
    image: "/images/pisa.jpg",
    hints: [
        "Monumento inclinado",
        "Toscana",
        "Pisa"
    ]
},
{
    id: 9,
    name: "Big Ben",
    country: "Reino Unido",
    city: "Londres",
    lat: 51.5007,
    lng: -0.1246,
    image: "/images/big-ben.jpg",
    hints: [
        "Palácio de Westminster",
        "Capital britânica",
        "Londres"
    ]
},
{
    id: 10,
    name: "Tower Bridge",
    country: "Reino Unido",
    city: "Londres",
    lat: 51.5055,
    lng: -0.0754,
    image: "/images/tower-bridge.jpg",
    hints: [
        "Rio Tamisa",
        "Ponte basculante",
        "Londres"
    ]
},
{
    id: 11,
    name: "Estátua da Liberdade",
    country: "Estados Unidos",
    city: "Nova Iorque",
    lat: 40.6892,
    lng: -74.0445,
    image: "/images/liberty.jpg",
    hints: [
        "Presente francês",
        "Nova Iorque",
        "Estados Unidos"
    ]
},
{
    id: 12,
    name: "Golden Gate Bridge",
    country: "Estados Unidos",
    city: "São Francisco",
    lat: 37.8199,
    lng: -122.4783,
    image: "/images/golden-gate.jpg",
    hints: [
        "Ponte vermelha famosa",
        "Califórnia",
        "São Francisco"
    ]
},
{
    id: 13,
    name: "Cristo Redentor",
    country: "Brasil",
    city: "Rio de Janeiro",
    lat: -22.9519,
    lng: -43.2105,
    image: "/images/cristo.jpg",
    hints: [
        "Uma das Sete Maravilhas Modernas",
        "Rio de Janeiro",
        "Brasil"
    ]
},
{
    id: 14,
    name: "Teatro Amazonas",
    country: "Brasil",
    city: "Manaus",
    lat: -3.1303,
    lng: -60.0234,
    image: "/images/teatro-amazonas.jpg",
    hints: [
        "Floresta Amazónica",
        "Capital do Amazonas",
        "Manaus"
    ]
},
{
    id: 15,
    name: "Shibuya Crossing",
    country: "Japão",
    city: "Tóquio",
    lat: 35.6595,
    lng: 139.7005,
    image: "/images/shibuya.jpg",
    hints: [
        "Passadeira mais famosa do mundo",
        "Capital japonesa",
        "Tóquio"
    ]
},
{
    id: 16,
    name: "Castelo de Osaka",
    country: "Japão",
    city: "Osaka",
    lat: 34.6873,
    lng: 135.5262,
    image: "/images/osaka-castle.jpg",
    hints: [
        "Castelo histórico",
        "Segunda maior área metropolitana do Japão",
        "Osaka"
    ]
},
{
    id: 17,
    name: "Sydney Opera House",
    country: "Austrália",
    city: "Sydney",
    lat: -33.8568,
    lng: 151.2153,
    image: "/images/opera-house.jpg",
    hints: [
        "Edifício com formato de velas",
        "Cidade australiana",
        "Sydney"
    ]
},
{
    id: 18,
    name: "Burj Khalifa",
    country: "Emirados Árabes Unidos",
    city: "Dubai",
    lat: 25.1972,
    lng: 55.2744,
    image: "/images/burj-khalifa.jpg",
    hints: [
        "Edifício mais alto do mundo",
        "Cidade do Médio Oriente",
        "Dubai"
    ]
},
{
    id: 19,
    name: "Taj Mahal",
    country: "Índia",
    city: "Agra",
    lat: 27.1751,
    lng: 78.0421,
    image: "/images/taj-mahal.jpg",
    hints: [
        "Mausoléu famoso",
        "Património UNESCO",
        "Agra"
    ]
},
{
    id: 20,
    name: "Acrópole",
    country: "Grécia",
    city: "Atenas",
    lat: 37.9715,
    lng: 23.7257,
    image: "/images/acropole.jpg",
    hints: [
        "Civilização antiga",
        "Capital grega",
        "Atenas"
    ]
},
{
    id: 21,
    name: "Mont Saint-Michel",
    country: "França",
    city: "Normandia",
    lat: 48.6361,
    lng: -1.5115,
    image: "/images/mont-saint-michel.jpg",
    hints: [
        "Ilha ligada por uma ponte",
        "Normandia",
        "França"
    ]
},
{
    id: 22,
    name: "Hallgrímskirkja",
    country: "Islândia",
    city: "Reiquiavique",
    lat: 64.1417,
    lng: -21.9266,
    image: "/images/hallgrimskirkja.jpg",
    hints: [
        "Igreja moderna muito alta",
        "Capital de uma ilha vulcânica",
        "Reiquiavique"
    ]
},
{
    id: 23,
    name: "Ponte Carlos",
    country: "República Checa",
    city: "Praga",
    lat: 50.0865,
    lng: 14.4114,
    image: "/images/charles-bridge.jpg",
    hints: [
        "Ponte medieval",
        "Cruza o rio Moldava",
        "Praga"
    ]
},
{
    id: 24,
    name: "Palácio de Schönbrunn",
    country: "Áustria",
    city: "Viena",
    lat: 48.1845,
    lng: 16.3122,
    image: "/images/schonbrunn.jpg",
    hints: [
        "Residência imperial",
        "Capital austríaca",
        "Viena"
    ]
},
{
    id: 25,
    name: "Atomium",
    country: "Bélgica",
    city: "Bruxelas",
    lat: 50.8949,
    lng: 4.3415,
    image: "/images/atomium.jpg",
    hints: [
        "Estrutura metálica gigante",
        "Representa um cristal ampliado",
        "Bruxelas"
    ]
},
{
    id: 26,
    name: "Castelo de Neuschwanstein",
    country: "Alemanha",
    city: "Schwangau",
    lat: 47.5576,
    lng: 10.7498,
    image: "/images/neuschwanstein.jpg",
    hints: [
        "Inspirou castelos da Disney",
        "Baviera",
        "Alemanha"
    ]
},
{
    id: 27,
    name: "Blue Mosque",
    country: "Turquia",
    city: "Istambul",
    lat: 41.0054,
    lng: 28.9768,
    image: "/images/blue-mosque.jpg",
    hints: [
        "Mesquita muito famosa",
        "Cidade entre dois continentes",
        "Istambul"
    ]
},
{
    id: 28,
    name: "Petronas Towers",
    country: "Malásia",
    city: "Kuala Lumpur",
    lat: 3.1579,
    lng: 101.7116,
    image: "/images/petronas.jpg",
    hints: [
        "Torres gémeas",
        "Sudeste Asiático",
        "Kuala Lumpur"
    ]
},
{
    id: 29,
    name: "Marina Bay Sands",
    country: "Singapura",
    city: "Singapura",
    lat: 1.2834,
    lng: 103.8607,
    image: "/images/marina-bay.jpg",
    hints: [
        "Hotel com piscina no topo",
        "Cidade-estado asiática",
        "Singapura"
    ]
},
{
    id: 30,
    name: "Stonehenge",
    country: "Reino Unido",
    city: "Wiltshire",
    lat: 51.1789,
    lng: -1.8262,
    image: "/images/stonehenge.jpg",
    hints: [
        "Monumento pré-histórico",
        "Conjunto de pedras gigantes",
        "Sul de Inglaterra"
    ]
},
{
    id: 31,
    name: "Chichén Itzá",
    country: "México",
    city: "Yucatán",
    lat: 20.6843,
    lng: -88.5678,
    image: "/images/chichen-itza.jpg",
    hints: [
        "Civilização Maia",
        "Península de Yucatán",
        "México"
    ]
},
{
    id: 32,
    name: "Moai de Rano Raraku",
    country: "Chile",
    city: "Ilha da Páscoa",
    lat: -27.1212,
    lng: -109.2886,
    image: "/images/moai.jpg",
    hints: [
        "Estátuas gigantes de pedra",
        "Ilha remota do Pacífico",
        "Ilha da Páscoa"
    ]
},
{
    id: 33,
    name: "Mosteiro de Meteora",
    country: "Grécia",
    city: "Kalambaka",
    lat: 39.7217,
    lng: 21.6300,
    image: "/images/meteora.jpg",
    hints: [
        "Mosteiros sobre rochas",
        "Património Mundial",
        "Grécia"
    ]
},
{
    id: 34,
    name: "Bled Castle",
    country: "Eslovénia",
    city: "Bled",
    lat: 46.3690,
    lng: 14.1005,
    image: "/images/bled.jpg",
    hints: [
        "Castelo junto a um lago",
        "Europa Central",
        "Bled"
    ]
},
{
    id: 35,
    name: "Fushimi Inari Taisha",
    country: "Japão",
    city: "Quioto",
    lat: 34.9671,
    lng: 135.7727,
    image: "/images/fushimi-inari.jpg",
    hints: [
        "Milhares de portais vermelhos",
        "Antiga capital japonesa",
        "Quioto"
    ]
}
];

export default locations;