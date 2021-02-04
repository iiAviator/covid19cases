export default function CaseDisplay({data}) {
    return (
        <>
            <h1>Total Cases: { parseNumber(data['cases']) }</h1>
            <h1>Total Deaths: { parseNumber(data['deaths']) }</h1>
            <h1>Total Active: { parseNumber(data['active']) }</h1>
            <h1>Total Recovered: { parseNumber(data['recovered']) }</h1>
        </>
    )
}

const parseNumber = (x) => {
    try {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    catch (e) {
        console.log(e);
    }
}