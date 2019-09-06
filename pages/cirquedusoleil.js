import React, { Fragment } from 'react';
import ViewLayout from '../components/ViewLayout';
import SurveyCard from '../components/SurveyCard';

import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import nextCookie from 'next-cookies'
import { withAuthSync } from '../utils/auth'
import getHost from '../utils/get-host'

import Head from 'next/head';
import CirquedusoleilCard from '../components/Cirquedusoleil';

function Cirquedusoleil(props) {
  //console.log(props.data);

  return (
    <Fragment>
      <Head>
        <title>Theme #4: Cirque du Soleil</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <ViewLayout data={props.data} titlepage={'Cirque du Soleil'}>
        <CirquedusoleilCard />
      </ViewLayout>
    </Fragment>
  );
}


Cirquedusoleil.getInitialProps = async ctx => {
  const { token }  = nextCookie(ctx)
  const apiUrl = getHost(ctx.req) + '/api/index'

  const redirectOnError = () =>
    typeof window !== 'undefined'
      ? Router.push('/login')
      : ctx.res.writeHead(302, { Location: '/login' }).end()

  try {
    const response = await fetch(apiUrl, {
      credentials: 'include',
      headers: {
        Authorization: JSON.stringify({ token })
      }
    })

    if (response.ok) {
      const js = await response.json()
      //console.log('js', js)
      return js
    } else {
      // https://github.com/developit/unfetch#caveats
      return await redirectOnError()
    }
  } catch (error) {
    // Implementation or Network error
    return redirectOnError()
  }
}

export default withAuthSync(Cirquedusoleil)