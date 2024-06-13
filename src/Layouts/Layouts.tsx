import Navbar from './Navbar/Navbar'


export default function Layouts({ children }) {
  return (
    <div
      style={{ display: 'flex', height: '100%' }}
    >
      <Navbar ></Navbar>
      <div
        style={{ flex: 1, height: '100%', overflowY: 'auto', paddingTop: 64, position: 'relative' }}
      >
        {children}
      </div>
    </div>
  )
}
