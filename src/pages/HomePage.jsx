import React from 'react'
import Hero from "../components/Hero"
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const homepage = () => {
  return (
    <>
      <Hero title='test' subtitle='test 2' />
      <HomeCards />
      <JobListings isHome/>
      <ViewAllJobs />
    </>
  )
}

export default homepage