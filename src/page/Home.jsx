import React from 'react'
import Particle from '../assets/particles'
import EditorFront from '../component/HomePage/EditorFront'
import EditorBack from '../component/HomePage/EditorBack'
import Head from '../component/HomePage/Head'
import Tradu from '../component/HomePage/Traduction'
import Footer from '../component/Footer'


const Home = () => {
  const obj ={
    "first" : {
      img : "./src/images/home.svg" ,
      concept : "Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you." ,
      orderone : "0" ,
      ordertwo : "1" ,
      float : "end"
    } ,
    second : {
      img : "./src/images/home2.svg" ,
      concept : "Apply key programming concepts like variables and functions by writing your first lines of code. \n Determine your path after exploring different careers in tech and hearing from real-life web developers, data scientists, and more." ,
      orderone : "1" ,
      ordertwo : "0" ,
      float : "start"

    }

  }
  return (
      <div className=' scroll-container'>
        
          <div className='container'>
          <div class="scroll-area">
           <Particle/>
           <Head/>
          </div>
          <div class="scroll-area">
           <div className='element'>
            FrontEnd
           </div>
            <div className='box-2'>
              <EditorFront />
            </div>
          </div>
          <div className="scroll-area">
          <div className='element'>
            BackEnd
           </div>
            <div className='box-2'>
              <EditorBack />
            </div>
          </div>
          <div className="scroll-area">
            <Tradu obj ={obj.first}/>
          </div>
          <div className="scroll-area">
            <Tradu obj={obj.second} />
           
          </div>
          </div>
          <div className="scroll-area container-fluid ">
         
            <Footer/>
           
          </div>
          
          
            
          

      </div>
     )
}

export default Home