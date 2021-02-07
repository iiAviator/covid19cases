import Head from 'next/head'
import CaseDisplay, { parseNumber } from '../components/CaseDisplay';
import { useState } from 'react';
import QueryForm from '../components/QueryForm';
import { Container, Heading } from "@chakra-ui/react";

export default function Home({fetchedData}) {
  
  const [query, setQuery] = useState("World");
  const [queryScope, setQueryScope] = useState("");
  const [data, setData] = useState(fetchedData);
  const [error, setError] = useState("");
  return (
     <div id="main">
      <Head>
        <title>Covid19Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fontFamily="Staatliches" my="2rem" textAlign="center">
        <Heading fontFamily="Staatliches">Covid19 Cases</Heading>
      </Container>
      <div>
        <QueryForm setQuery={setQuery} query={query} setData={setData} setQueryScope={setQueryScope} queryScope={queryScope} setError={setError}/>
        <CaseDisplay data={data}/>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ ctx }) => {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const data= await res.json();
  const fetchedData = {
    "flag": "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_the_United_Nations.svg",
    "name": "World",
    "code": "",
    "population": parseNumber(data['population']),
    "data": {
      "cases": data['cases'],
      "todayCases": data['todayCases'],
      "casesPerMillion": data['casesPerOneMillion'],
      "deaths": data['deaths'],
      "todayDeaths": data['todayDeaths'],
      "deathsPerMillion": data['deathsPerOneMillion'],
      "active": data['active'],
      "recovered": data['recovered'],
      "tests":  data['tests'],
      "testsPerMillion": data['testsPerOneMillion']
    }
  }

  return {
    fetchedData,
  }
}