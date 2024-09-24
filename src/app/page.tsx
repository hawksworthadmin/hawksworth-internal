import React from 'react'
import LoginPage from './LognPage'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default function page() {
  const cookie = cookies();
  const hwToken = cookie.get('hw-token');

  if(hwToken){
    redirect('/internal/website')
  }

  return (
    <>
      <LoginPage />
    </>
  )
}
