import { useEffect } from "react"

function App() {
  const hasNFC = ('NDEFReader' in window)
  return (
    <div style={{background: hasNFC ? 'green':'red',width:'100vw',minHeight:'100vh',fontFamily:'system-ui',display:'flex',alignItems:'center',justifyContent:'center',}}>
      {hasNFC ? <h1 style={{color:'white'}}>TIENE NFC ✅</h1>:<h1 style={{color:'white'}}>NO TIENE NFC 😢</h1>}
    </div>
  )
}

export default App
