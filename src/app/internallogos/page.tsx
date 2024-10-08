import { redirect } from 'next/navigation'
import React from 'react'

export default function page() {
  redirect("https://drive.google.com/drive/folders/1TuU8zyueBAzrfv1TsTvMQHLOr9WQODYR?usp=sharing")
  return (
    <div>page</div>
  )
}
