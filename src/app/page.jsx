'use client'

import { useQuery } from '@tanstack/react-query';
import HeaderChange from './components/header-change/HeaderChange';
import axios from 'axios';
import Section from './sections/section 1/Section';
import SectionTwo from './sections/section 2/SectionTwo';
import SectionThree from './sections/section 3/SectionThree';
import FooterNav from './components/footer-nav/FooterNav';
import Footer from './components/footer/Footer';

export default function Home() {
  // const defaultQueryFn = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:2000/api/auth/users`,
  //   )
  //   return data
  // }

  // const { status, data, error, isFetching, isLoading } = useQuery({
  //   queryKey: ['asdasdasd'],
  //   queryFn: defaultQueryFn
  // })

  // if (isLoading) return 'Loading...'

  // if (error) {
  //   console.log(error)
  //   return 'An error has occurred: ' + error.message
  // }

  return (
    <div className='flex flex-col items-center'>
      <HeaderChange />
      {/* {data.map((e, i) =>
        <div key={i} className='h-[300px] w-[50%] my-4 rounded bg-slate-700 text-white flex flex-col items-start p-5 justify-center'>
          <h1>Username: {e.username}</h1><br />
          <h2>Name: {e.name}</h2>
          <h2>lastName: {e.lastName}</h2>
          <h2>Email: {e.email}</h2>
          <h2>password: {e.password}</h2>
        </div>
      )} */}
      <Section />
      <SectionThree />
      <SectionTwo />
      <FooterNav />
      <Footer />
    </div>
  )
}

function Example() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
      res.json()
    )
  )

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{' '}
      <strong>✨ {data.stargazers_count}</strong>{' '}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  )
}
