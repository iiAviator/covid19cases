import Head from 'next/head'
import CaseDisplay from '../components/CaseDisplay';
import { useState } from 'react';
import QueryForm from '../components/QueryForm';
import { Container, Heading } from "@chakra-ui/react";

export default function Home({fetchedData, fetchedWorldData}) {
  
  const [query, setQuery] = useState("World");
  const [queryScope, setQueryScope] = useState("");
  const [data, setData] = useState(fetchedData);
  const [countryData, setCountryData] = useState([]);
  const [flag, setFlag] = useState("");
  const [name, setName] = useState("World");

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
        <QueryForm setQuery={setQuery} query={query} setData={setData} setQueryScope={setQueryScope} queryScope={queryScope} setFlag={setFlag} setName={setName} setCountryData={setCountryData}/>
        <CaseDisplay data={data} flag={flag} name={name} countryData={countryData}/>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ ctx }) => {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const fetchedData = await res.json();
  
  console.log(fetchedData);
  return {
    fetchedData,
  }
}

// export async function getStaticProps(context) {
//   const res = await fetch("https://disease.sh/v3/covid-19/all");
//   const fetchedData = await res.json();
  
//   console.log(fetchedData);
//   return {
//     fetchedData
//   }
// }
