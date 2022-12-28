import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/Header'
import HeaderOptions from '../components/HeaderOptions'
import SearchResults from '../components/SearchResults'

const search = ({ results }) => {
  const router = useRouter()


  return (
    <div>
        <Head>
            <title>{router.query.term} - Google Search</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        <HeaderOptions />
        <SearchResults results={results} />
    </div>
  )
}

export default search

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "0";

  const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
  .then((response) =>  response.json())

  return {
      props: {
        results: data,
      }
  }
}