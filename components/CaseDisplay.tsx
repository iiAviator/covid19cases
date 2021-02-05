import { Box, Text, Flex, Container, Spacer, Grid } from "@chakra-ui/react";

export default function CaseDisplay({data}) {
    return (
        <>  
            <Flex display="flex" justifyContent="center">
                <Box flex="1" boxShadow="dark-lg" width="15rem" backgroundColor="blue.500" color="white" p="2rem" rounded="md">
                    <Text fontWeight="bold" fontSize="3xl">Total Cases: </Text>
                    <Text fontSize="xl">{ parseNumber(data['cases']) }</Text>
                </Box>
                <Box flex="1" boxShadow="dark-lg" width="15rem" backgroundColor="blue.500" color="white" p="2rem" rounded="md">
                    <Text fontWeight="bold" fontSize="3xl">Total Deaths: </Text>
                    <Text fontSize="xl">{ parseNumber(data['deaths']) }</Text>
                </Box>
                <Box flex="1" boxShadow="dark-lg" width="15rem" backgroundColor="blue.500" color="white" p="2rem" rounded="md">
                    <Text fontWeight="bold" fontSize="3xl">Total Active Cases: </Text>
                    <Text fontSize="xl">{ parseNumber(data['active']) }</Text>
                </Box>
                <Box flex="1" boxShadow="dark-lg" width="15rem" backgroundColor="blue.500" color="white" p="2rem" rounded="md">
                    <Text fontWeight="bold" fontSize="3xl">Total Recovered Cases: </Text>
                    <Text fontSize="xl">{ parseNumber(data['recovered']) }</Text>
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