import React from 'react'
import { auth, signOut } from '@/auth'

const Setting = async () => {
  const session = await auth();

  console.log(session?.user?.role)

  return (
    <div>Settings
      <p>{JSON.stringify(session)}</p>

      <form action={async () => {
        "use server";
        await signOut();
      }}>
        <button type='submit'>Sign out</button>
      </form>
      
    </div>
  )
}

export default Setting