export const toBase64 = (file) => {
    return new Promise ((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('loadend', () => {
            resolve(reader.result);
        });

        reader.addEventListener('error', () => {
            reject(err);
        });

        reader.readAsDataURL(file);
    })
} 


export const currencyFormatRUB = (number) => {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
    }).format(number)
} 