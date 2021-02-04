import { fetchData } from "../api/covid";

export default function QueryForm({setQuery, query, setData, setQueryScope, queryScope}) {

    const handleChange = event => {
        console.log(event.target.value);
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        let data = fetchData(convertQueryScope(queryScope) + query);
        
        data.then((data) => {
            setData(data);
        });
    }

    const convertQueryScope = (queryScope) => {
        switch (queryScope) {
            case 'world':
                return 'all';
            case 'country':
                return 'countries/';
            case 'state':
                return 'states/';
            case 'continent':
                return 'continents/'
        }
    }

    return (
        <>
            <div>
                <input value={query} onChange={handleChange}/>
                <input type="submit" value="Search" onClick={handleSubmit}/>
                <select name="scope" id="scope-select" onChange={(event) => setQueryScope(event.target.value)}>
                    <option value="world">World</option>
                    <option value="continent">Continent</option>
                    <option value="country">Country</option>
                    <option value="state">US States</option>
                </select>
            </div>
        </>
    )
}