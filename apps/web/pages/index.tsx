import { useRouter } from 'next/dist/client/router'
import React from 'react'

export default function Page() {
  const router = useRouter()

  return (
    <div
      style={{
        paddingTop: '20px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <h2>Personal Site</h2>
      </div>
    </div>
  )
}
