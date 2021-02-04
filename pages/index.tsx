import Head from 'next/head'
import CaseDisplay from '../components/CaseDisplay';
import { useState } from 'react';
import QueryForm from '../components/QueryForm';

export default function Home() {

  const [query, setQuery] = useState("World");
  const [queryScope, setQueryScope] = useState("");
  const [data, setData] = useState({});

  return (
    <div>
      <Head>
        <title>Covid19Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <QueryForm setQuery={setQuery} query={query} setData={setData} setQueryScope={setQueryScope} queryScope={queryScope}/>
        <CaseDisplay data={data}/>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch("https://disease.sh/v3/covid-19/all");
  const fetchedData = await res.json();

  return {
    props: {data:fetchedData},
  }
}
