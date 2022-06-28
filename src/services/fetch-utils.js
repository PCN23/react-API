export async function getPokemon() {
    const rawData = fetch ('http://localhost:888/.netlify/functions/pokemon');
    const data = await await (rawData).json();
}