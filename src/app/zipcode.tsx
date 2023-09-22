export default async function handler(zipcode: any) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${zipcode}/json/`);
        const data = await response.json();

        return data;
    } catch (error: any) {
        console.error(error);
    }
}
