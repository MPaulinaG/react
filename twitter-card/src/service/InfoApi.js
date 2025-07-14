export async function getProducts() {
    return await fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json())
        .then(data => data);
}

/*export async function postCountry(country) {
    return await fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then(data => data);
}*/

export async function getCountry(country) {
    return await fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(res => res.json())
        .then(data => data);
}

export async function postCountry(country) {
    const response = await fetch('https://r8vobscva2.execute-api.us-east-1.amazonaws.com/paises', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(country)
    });
    const data = await response.json();
    return data;
}

export async function putCountry(country, updatedData) {
    const response = await fetch(`https://r8vobscva2.execute-api.us-east-1.amazonaws.com/paises/${country}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    });
    const data = await response.json();
    return data;
}

export async function deleteCountry(id) {
    const response = await fetch(`https://r8vobscva2.execute-api.us-east-1.amazonaws.com/paises/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    return data;
}