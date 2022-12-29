import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import Error404 from './page/Error404'
import Language from './page/Language'
import data from './data/db.json'
import Footer from './component/Footer'




function App() {
  const [store , setstore] = useState()
  const [lang  , setlang] = useState()
  useEffect(()=>{
    setstore(data.language)
    setlang(data.html)
  } , [])

  return (
    
    <div className="App">
      
      <BrowserRouter>
      <Navbar store={store}/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        
      
        {
          store && store.map((ele)=>{
            return <Route path={`/${ele}`} element={<Language lang={data[ele]}/>}></Route>
          })
        }
        <Route  path='*' element={<Error404/>}></Route>
        
       
      </Routes>
      
      
      </BrowserRouter>
      
      

    </div>
  )
}

export default App
