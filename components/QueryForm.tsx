import { fetchCountryCodeData, fetchWorldData, fetchCovidData } from "../api/data";
import { IconButton, Flex, Container, Select, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

let data;
let worldData;

export default function QueryForm({setQuery, query, setData, setQueryScope, queryScope, setFlag, setName, setCountryData}) {

    const handleChange = event => {
        console.log(event.target.value);
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        if (query.toLowerCase() == 'world') {
            data = fetchCovidData('all');
        }
        else {
            data = fetchCovidData(queryScope + query);
            worldData = fetchWorldData(handleQuery(query));
        }
        
        data.then((data) => {
            setData(data);
        });

        worldData.then((data) => {
            console.log(data);
            setFlag(data['flag']);
            setName(data['name']);
            setCountryData([data['region'],
            data['subregion'],
            data['population'],
            fetchCountryCodeData()[1][handleCapitalization(query)]
        })
    }

    const handleQuery = (query) => {
        const codes = fetchCountryCodeData()[1];
        return codes[handleCapitalization(query)];
    }

    const handleCapitalization = (query) => {
        let wordList = query.split(" ");
        let finalWord = "";
        wordList.forEach(word => {
            finalWord += word.charAt(0).toUpperCase() + word.substring(1, word.length) + " "
        });

        console.log(finalWord.trim());
        return finalWord.trim();
    }

    return (
        <>
            <Flex fontFamily="sans-serif" my="3rem" mx="1rem" justifyContent="center">
                <Input value={query} onChange={handleChange} width="12.5rem"/>
                <Select fontFamily="sans-serif" name="scope" id="scope-select" onChange={(event) => setQueryScope(event.target.value)} width="10rem" color="white">
                    <option value="">World</option>
                    <option value="continents/">Continent</option>
                    <option value="countries/">Country</option>
                    <option value="states/">US States</option>
                    {/* <option value="jhucsse/counties/">US Counties</option> */}
                </Select>
                <IconButton aria-label="Search database" color="white" backgroundColor="blue.500" icon={<SearchIcon />} onClick={handleSubmit} />
            </Flex>
        </>
    )
}