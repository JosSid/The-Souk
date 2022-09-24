
export function getAdvertisments(){


    return new Promise((resolve,reject) => {

        setTimeout(() => {
            const advertismentsList = [
                {
                    statement: 'Wanted',
                    photo: 'https://img.remediosdigitales.com/109c49/volkswagen-beetle-1967-annie-1-/450_1000.jpg',
                    name: 'VolksWagen Beetle',
                    description: 'string',
                    price: 'max. 5000 €'
                },
                {
                    statement: 'For Sale',
                    photo: 'https://violin.com',
                    name: 'Stradivarius',
                    description: 'Violin de la casa Stradivarius',
                    price: '3000 €'
                },
                {
                    statement: 'For Sale',
                    photo: 'https://sneakers.com',
                    name: 'Adidas',
                    description: 'string',
                    price: '40 €'
                },
                {
                    statement: 'Wanted',
                    photo: 'https://table.com',
                    name: 'Student table',
                    description: 'string',
                    price: 'max. 150 €'
                },
            ];

            resolve(advertismentsList)
        },1500)
    });
}