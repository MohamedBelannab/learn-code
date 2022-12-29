import React from 'react'
import Prism from "prismjs";
import { useEffect } from 'react';
import Tutorial from '../component/Tutorial';
import CodeAndApp from '../component/CodeAndApp';
import Exercise from '../component/Exercise';

const Language = ({lang}) => {
  
  useEffect(() => {
    
    Prism.highlightAll();
  });

  return (
    <div className='container py-5'>
      {lang && <Tutorial box1={lang}/>}
      {lang && <CodeAndApp box2={lang}/>}
      {lang && <Exercise box3={lang}/>}
      

    
      
    </div>
  )
}

export default Language