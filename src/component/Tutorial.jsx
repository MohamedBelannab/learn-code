import React from 'react'

const Tutorial = ({box1}) => {

  return (
    <div className='py-5'>
     <h3 className='text-center'>{box1.name} Tutorial</h3>
        <div class="row gx-5  text-center py-5 ">
          <div class="col">
          <div class="p-3 fs-4  ">{box1.Tutorial}</div>
          </div>
          <div class="col">
            <div class="p-3 fs-4 float-end"><img className='img-fluid' src={`./src/images/${box1.image}`} alt="" /></div>
          </div>
        </div>
      <section className='py-5'>
      <div className='title-box px-3'><h2 >Why to Learn {box1.name}?</h2>  </div>
      <div className='p-3 context'>{box1.Learn}</div>
      </section>
    </div>
  )
}

export default Tutorial