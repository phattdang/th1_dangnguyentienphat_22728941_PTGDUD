export default async function fetchPersonAPI(){
    const res = await fetch("https://67ecb918aa794fb3222e975f.mockapi.io/admin/person");
    const data = await res.json();
    return data;
}