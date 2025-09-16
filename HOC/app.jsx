


import React, { useState } from 'react'

import SimpleButton from './SimpleButton'
import withloggin from './withloggin'

const LoggedButton  = withloggin(SimpleButton)

function app() {

const [count, setCount] = useState(0)

  return (
    <div> 
        <h1>HOC example </h1>
        <LoggedButton 
        label= {`Clicked  ${count} times `}
            onclick ={() => setCount (count + 1)}
        
        />
        
    </div>
  )
}

export default app