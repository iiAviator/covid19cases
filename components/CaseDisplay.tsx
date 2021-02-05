import { SearchIcon } from "@chakra-ui/icons";
import { Box, Image, Heading, IconButton, Modal, Text, Flex, Container, Spacer, Grid } from "@chakra-ui/react";

export default function CaseDisplay({data, flag, name, countryData}) {
    return (
        <>  
            <Flex>
                <Image ml="2rem" width="20rem" height="auto" src={flag}></Image>
                <Box ml="2rem">
                    <Heading fontFamily="Staatliches">{name}</Heading>
                    {
                        countryData.map(country => (
                            <h1>{country}</h1>
                        ))
                    }
                </Box>
            </Flex>
            <Flex display="flex" fontFamily="Staatliches" justifyContent="center">
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#3c40c6" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Cases: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['cases']) }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#485460" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Deaths: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['deaths']) }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#ff3f34" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Active Cases: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['active']) }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#05c46b" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Recovered Cases: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['recovered']) }</Text>
                </Box>
            </Flex>
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