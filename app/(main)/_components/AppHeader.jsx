import React from 'react'
import Image from 'next/image'
import { UserButton, Button } from '@stackframe/stack'

function AppHeader() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <Image 
        src={'/logo.svg'} 
        alt='logo'
        width={30}
        height={30}
      />
    <div className="flex items-center gap-4">
    <div></div>
       
        
      </div>
    </div>
  ) 
}

export default AppHeader
