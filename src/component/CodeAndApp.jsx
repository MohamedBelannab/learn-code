import React from 'react'

const CodeAndApp = ({box2}) => {
  return (
    <>
    <section className='py-5'>
      <div className='title-box px-3'><h2 >Hello World using {box2.name}.</h2>  </div>
      <pre><code class="language-html" >{box2.exemple}</code></pre>
      
      </section>
      <section className='py-5'>
      <div className='title-box px-3'><h2 >Applications of {box2.name}</h2>  </div>
      <ul className='app'>
      <li><a href="">{box2.app.app1}</a></li>
      <li><a href="">{box2.app.app2}</a></li>
      <li><a href="">{box2.app.app3}</a></li>
      <li><a href="">{box2.app.app4}</a></li>
   
      </ul>

      </section >
    </>
  )
}

export default CodeAndApp