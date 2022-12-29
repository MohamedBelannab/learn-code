import React from 'react'

const Tradu= ({obj}) => {
  return (
    <div className="row box-3 gx-5">
        <div className={`col order-${obj.orderone} d-flex align-items-center`}>
        <i className="fa-solid fa-chevron-left"></i>
        <div className="p-3 ">{obj.concept}</div>
        <div className='fs-3'>&#47;</div>
        <i className="fa-solid fa-chevron-right"></i>
        </div>
        <div className={`col order-${obj.ordertwo} `}>
        <div className={`p-3 float-${obj.float}`} ><img src={obj.img} className="img-fluid" alt="" /></div>
        </div>
  </div>
  )
}

export default Tradu