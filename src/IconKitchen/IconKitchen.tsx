import { useEffect, useState } from 'react'
import TheMask from 'src/components/TheMask'
import Kitchen from './Kitchen'

export default function IconKitchen() {
  const [show, setShow] = useState(false)
  setTimeout(() => {
    setShow(true)
  }, 500)
  return (
    <>
      <TheMask time="3000" />
      {show && <Kitchen />}
    </>

  )
}
