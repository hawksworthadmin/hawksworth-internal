import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  redirect("https://drive.google.com/drive/folders/1IB3eeQXFVLqpdD5gz7XfLUv7DfeuiXxU?usp=drive_link")
  return (
    <div>page</div>
  )
}
