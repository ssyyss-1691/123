import CircularProgress from '@mui/material/CircularProgress'
import { useEffect, useState } from 'react'

export default function TheMask({ time }) {
  const [show, setShow] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false)
    }, time || 1000)
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <>
      {
        show && (<div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(22, 28, 36, 0.8)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CircularProgress />
        </div>)
      }
    </>

  )
}
