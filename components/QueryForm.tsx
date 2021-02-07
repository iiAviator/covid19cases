import { fetchCovidData, convertStateName, handleCapitalization } from "../api/data";
import { parseNumber } from "../components/CaseDisplay"
import { IconButton, Flex, Container, Select, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

let data;
let worldData;
const UNFlag = "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg";
const info = {
    "name": "",
    "code": "",
    "flag": "",
    "continent": "",
    "population": 0,
    "data": {
        "cases": 0,
        "todayCases": 0,
        "casesPerMillion": 0,
        "deaths": 0,
        "todayDeaths": 0,
        "deathsPerMillion": 0,
        "active": 0,
        "recovered": 0,
        "tests": 0,
        "testsPerMillion": 0
    }
}

export default function QueryForm({setQuery, query, setData, setQueryScope, queryScope, setError}) {

    const handleChange = event => {
        setQuery(event.target.value);
    }

    const handleSubmit = async () => {
        console.log(`${query} ${queryScope}`)
        if (query.toLowerCase() == 'world') {
            data = fetchCovidData('all');
        }
        else {
            data = fetchCovidData(queryScope + query);        
        }
        
        if (data) {
            data.then(async (data) => {
                console.log("Raw Data: ");
                console.log(data);
                if (query.toLowerCase() == 'world') {
                    info['flag'] = UNFlag;
                    info['name'] = "World";
                    info['code'] = "";
                } else if (queryScope.toLowerCase() == "states/") {
                    const flag = `http://flags.ox3.in/svg/us/${convertStateName(query).toLowerCase()}.svg`
                    info['flag'] = flag;
                    info['name'] = handleCapitalization(query);
                    info['code'] = convertStateName(handleCapitalization(query));
                } else {
                    info['name'] = data['country'];
                    info['flag'] = data['countryInfo']['flag'];
                    info['code'] = data['countryInfo']['iso2'];
                }
    
                info['continent'] = data['continent'];
                info['population'] = data['population'];
                info['data']['cases'] = data['cases'];
                info['data']['todayCases'] = data['todayCases'];
                info['data']['casesPerMillion'] = data['casesPerOneMillion'];
                info['data']['deaths'] = data['deaths'];
                info['data']['todayDeaths'] = data['todayDeaths'];
                info['data']['deathsPerMillion'] = data['deathsPerOneMillion'];
                info['data']['active'] = data['active'];
                info['data']['recovered'] = data['recovered'];
                info['data']['tests'] = data['tests'];
                info['data']['testsPerMillion'] = data['testsPerOneMillion'];
    
                console.log("Parsed Data:");
                console.log(info);
    
                await setData(info);
            });
        } else {
            console.log("Error");
        }
    }

    return (
        <>
            <Flex fontFamily="sans-serif" my="3rem" mx="1rem" justifyContent="center">
                <Input value={query} onChange={(e) => handleChange(e)} width="12.5rem"/>
                <Select fontFamily="sans-serif" name="scope" id="scope-select" onChange={(event) => setQueryScope(event.target.value)} width="10rem" color="white">
                    <option value="">World</option>
                    <option value="continents/">Continent</option>
                    <option value="countries/">Country</option>
                    <option value="states/">US States</option>
                    {/* <option value="jhucsse/counties/">US Counties</option> */}
                </Select>
                <IconButton aria-label="Search database" color="white" backgroundColor="blue.500" icon={<SearchIcon />} onClick={() => handleSubmit()} />
            </Flex>
        </>
    )
}