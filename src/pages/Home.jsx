import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../request'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowID='1' title='Popular' fetchURL={Requests.requestPopular}/>
      <Row rowID='2' title='Top rated' fetchURL={Requests.requestTopRated}/>
      <Row rowID='3' title='Trending' fetchURL={Requests.requestTrending}/>
      <Row rowID='4' title='Horror' fetchURL={Requests.requestHorror}/>
      <Row rowID='5' title='Upcoming' fetchURL={Requests.requestUpcoming}/>
    </div>
  )
}

export default Home
