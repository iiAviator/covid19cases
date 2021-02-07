import { SearchIcon } from "@chakra-ui/icons";
import { Box, Image, Heading, IconButton, Modal, Text, Flex, Container, Spacer, Grid } from "@chakra-ui/react";

export default function CaseDisplay({ data }) {
    console.log(data);
    return (
        <>  
            <Flex>
                <Image ml="2rem" width="30rem" height="auto" src={data['flag']}></Image>
                <Box ml="2rem">
                    <Heading fontSize="4xl" fontFamily="Staatliches">{data['name']}</Heading>
                    <Text fontFamily="Staatliches" fontSize="3xl">{data['code']}</Text>
                    <Text fontFamily="Staatliches" fontSize="3xl">{data['continent']}</Text>
                    <Text fontFamily="Staatliches" fontSize="3xl">{`${parseNumber(data['population'])}`}</Text>
                </Box>
            </Flex>
            <Flex display="flex" fontFamily="Staatliches" justifyContent="center" flexWrap="wrap">
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#3c40c6" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Cases: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['data']['cases']) }</Text>
                    <Text fontSize="2xl">{ `(+ ${parseNumber(data['data']['todayCases'])})` }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#485460" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Deaths: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['data']['deaths']) }</Text>
                    <Text fontSize="2xl">{ `(+ ${parseNumber(data['data']['todayDeaths'])})` }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#ff3f34" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Active Cases: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['data']['active']) }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#05c46b" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Recovered Cases: </Text>
                    <Text fontSize="2xl">{ parseNumber(data['data']['recovered']) }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#ffa801" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Total Tests: </Text>
                    <Text fontSize="2xl">{ `${parseNumber(data['data']['tests'])}` }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#575fcf" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Cases per One Million: </Text>
                    <Text fontSize="2xl">{ `${parseNumber(data['data']['casesPerMillion'])}` }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#575fcf" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Deaths per One Million: </Text>
                    <Text fontSize="2xl">{ `${parseNumber(data['data']['deathsPerMillion'])}` }</Text>
                </Box>
                <Box m="1rem" flex="1" width="15rem" backgroundColor="#808e9b" color="white" p="2rem" rounded="md">
                    <Text fontSize="3xl">Tests per One Million: </Text>
                    <Text fontSize="2xl">{ `${parseNumber(data['data']['testsPerMillion'])}` }</Text>
                </Box>
            </Flex>
        </>
    )
}

export const parseNumber = (x) => {
    try {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    catch (e) {
        console.log(e);
    }
}