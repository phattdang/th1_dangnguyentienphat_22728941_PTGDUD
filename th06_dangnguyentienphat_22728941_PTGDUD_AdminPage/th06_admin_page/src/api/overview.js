export default async function fetchOverviewData() {
    const res = await fetch('https://67ecb918aa794fb3222e975f.mockapi.io/admin/overview');
    const data = await res.json();
    return data;
  }