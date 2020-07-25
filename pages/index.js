import React, { Component } from 'react';
import { getData } from '../assets/js/gson';
import Layout from '../components/Layout';

export default function Index({ gson, preview }) {
  return (
    <Layout>
      {gson.map((rec) => (
        <div>
          <p>{JSON.stringify(rec)}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps({ preview = false }) {
  const sheetsURL = process.env.URL;

  console.log('env', sheetsURL);

  const gson = await getData(sheetsURL);
  console.log(gson.length);

  return {
    props: { gson }, // will be passed to the page component as props
  };
}
