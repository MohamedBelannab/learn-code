import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link,  useNavigate } from 'react-router-dom'

const SearchBar = ({storeData}) => {
    const [query , setquery] = useState('')
    const div = useRef(null)
    const [filter , setfilter]= useState([])
    const navigate = useNavigate()

    const handleInpuut = (e)=>{
        setquery(e.target.value)
        const data = Array.isArray(storeData) ? storeData.filter((e)=>{return e.toLowerCase().includes(query.toLowerCase())} ) : []
        setfilter(data)
        
        

    }
    const handleSubmit = (e)=>{
        e.preventDefault()
    
         setquery('')
        navigate(`/${query}`)
    }
    
    useEffect(()=>{
        if(query === ''){
            div.current.classList.remove('act')
        }else{
            div.current.classList.add('act') 
        }
    },[query])

    
    
   

   
  
  return (
    <form onSubmit={handleSubmit}  className="d-flex">
             
    <div ref={div} className='search-input '>
      <input type="text" value={query} onChange={handleInpuut} className='form-control' placeholder="Type to search..."/>
      <div class="autocom-box">
        {
            filter.map((ele , index)=>{
                return  <Link onClick={()=>{setquery('')}} to={`/${ele}`}><li key={index}> {ele}</li></Link>
            })
        }
      
      </div>
      <div className="icon"><i className=" fas fa-search"></i></div>
    </div>
        
        
      
      
        
       
    </form>
  )
}

export default SearchBar