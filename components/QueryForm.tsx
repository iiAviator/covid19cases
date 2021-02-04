import { fetchData } from "../api/covid";
import { IconButton, Flex, Space, Container, Select, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

let data;

export default function QueryForm({setQuery, query, setData, setQueryScope, queryScope}) {

    const handleChange = event => {
        console.log(event.target.value);
        setQuery(event.target.value);
    }

    const handleSubmit = () => {
        if (query.toLowerCase() == 'world') {
            data = fetchData('all');
        }
        else {
            data = fetchData(queryScope + query);
        }
        
        data.then((data) => {
            setData(data);
        });
    }

    return (
        <>
            <Flex my="3rem" mx="1rem" justifyContent="center">
                <Input value={query} onChange={handleChange} width="12.5rem"/>
                <IconButton aria-label="Search database" color="white" backgroundColor="blue.500" icon={<SearchIcon />} onClick={handleSubmit} />
                <Select name="scope" id="scope-select" onChange={(event) => setQueryScope(event.target.value)} width="10rem">
                    <option value="">World</option>
                    <option value="continents/">Continent</option>
                    <option value="countries/">Country</option>
                    <option value="states/">US States</option>
                    {/* <option value="jhucsse/counties/">US Counties</option> */}
                </Select>
            </Flex>
        </>
    )
}