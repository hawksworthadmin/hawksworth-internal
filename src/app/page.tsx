import React from 'react'
import { getRecentTeams } from '@/lib/prismic/teams.prismic'
import HomeHero from './(home-page)/HomeHero'
import HomeAbout from './(home-page)/HomeAbout'

export default async function page() {

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <h1>How va na</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium soluta assumenda illo tempore cum nemo, natus quasi laudantium harum labore voluptatum itaque dolore odio omnis ad quibusdam molestiae ipsam tenetur.</p>
    </>
  )
}
