import React from 'react'
import { useRef , useEffect } from 'react'
import { Link , NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = ({store}) => {
  const navBar = useRef(null)
  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY <= 10) {
      
      navBar.current.classList.remove('scrollBar')
    } else {
      navBar.current.classList.add('scrollBar')
      
    }
  }
  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
    <nav ref={navBar} className="navbar navbar-expand-lg navbar-dark  shadow-5-strong fixed-top ">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><i className="fa-solid fa-house-chimney"></i></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {
                 store && store.map((ele , index)=>{
                    return(<li key={index} className="nav-item">
                    <NavLink key={index} to={`/${ele}`} className="nav-link" activeClassName="active">{ele}</NavLink>
                  </li>)
                  })
                }
            </ul>
            <div className='me-3 fs-4'><i class="fa-solid fa-circle-half-stroke"></i></div>
            <SearchBar storeData={store}/>

        </div>
        </div>
    </nav>
  

    </>
  )
}

export default Navbar