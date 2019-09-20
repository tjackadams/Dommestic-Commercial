import React, { useState, useEffect } from "react"

import { Icon as FabricIcon, IIconProps } from "office-ui-fabric-react"

const Icon = (props: IIconProps) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setState(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return <>{state ? <FabricIcon {...props} /> : null}</>
}

export default Icon
