import fetch from 'isomorphic-unfetch';

export async function fetchData(query) {
    const res = await fetch("https://disease.sh/v3/covid-19/" + query);
    const data = await res.json();

    return data;
}