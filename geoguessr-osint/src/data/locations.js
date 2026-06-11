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
}
];

export default locations;