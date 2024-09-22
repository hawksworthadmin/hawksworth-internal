import Container from '@/components/layout/Container'
import DefaultHeader from '@/components/layout/DefaultHeader'
import React from 'react'
import HomeHero from './(home-page)/HomeHero'
import HomeAbout from './(home-page)/HomeAbout'
import HomeRoles from './(home-page)/HomeRoles'
import { getRecentTeams } from '@/lib/prismic/teams.prismic'
import HomeEvents from './(home-page)/HomeEvents'
import HomeResources from './(home-page)/HomeResources'

export default async function page() {

  const roles = await getRecentTeams();

  return (
    <Container>
      <div className='flex flex-col gap-default'>
        <DefaultHeader />
        <HomeHero />
      </div>
      <HomeAbout />
      <HomeRoles roles={roles} />
      <HomeEvents />
      <HomeResources />
    </Container>
  )
}
