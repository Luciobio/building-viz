export const fetchBuildData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                floors: [
                    { 
                        id: 1, 
                        name: 'Piso 1',
                        img: '/media/Floorplans/1550 Lamar St-Building_Level 01.jpg',
                        units:[
                        {
                            id: 101,
                            name: 'Lobby',
                            category: 'Amenities',
                            img:'',
                            features: '',
                            tour:'', 
                        },
                        {
                            id: 102,
                            name: 'Lobby',
                            category: 'Amenities',
                            img:'',
                            features: '',
                            tour:'', 
                        },
                        {
                            id: 103,
                            name: 'Local Comercial',
                            category: 'Comercial',
                            img:'',
                            features: '',
                            tour:'', 
                        },
                        ]
                     },
                    { 
                        id: 29, 
                        name: 'Piso 29',
                        img: '/media/Floorplans/1550 Lamar St-Building_Level 29.jpg',
                        units:[
                            {
                                id: 291,
                                name: 'Espacio Ejecutivo',
                                category: 'Amenities',
                                img:'../src/assets/Espacio Ejecutivo.jpeg',
                                availability: '',
                                features: {
                                    TotalAream2: 220,
                                    Bathrooms: 1,
                                    price: 'NA',
                                },
                                gallery: ['../src/assets/EE - Gal 01.jpeg', '../src/assets/EE - Gal 02.jpeg'],
                                floorplan: '../src/assets/EE - Floorplan.jpeg',
                                tour:'../src/assets/360tours/Penthouse/index.html', 
                            }
                        ]
                    },
                ],
            });
        }, 10);
    });
};