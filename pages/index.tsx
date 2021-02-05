import Head from 'next/head'
import CaseDisplay from '../components/CaseDisplay';
import { useState } from 'react';
import QueryForm from '../components/QueryForm';
import { Container, Heading } from "@chakra-ui/react";

export default function Home({fetchedData}) {
  
  const [query, setQuery] = useState("World");
  const [queryScope, setQueryScope] = useState("");
  const [data, setData] = useState(fetchedData);

  return (
    <div>
      <Head>
        <title>Covid19Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container my="2rem" textAlign="center">
        <Heading>Covid19 Cases</Heading>
      </Container>
      <div>
        <QueryForm setQuery={setQuery} query={query} setData={setData} setQueryScope={setQueryScope} queryScope={queryScope}/>
        <CaseDisplay data={data}/>
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ ctx }) => {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const fetchedData = await res.json();
  
  console.log(fetchedData);
  return {
    fetchedData
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
