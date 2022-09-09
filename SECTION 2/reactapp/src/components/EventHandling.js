import React, { useState } from 'react'

const EventHandling = () => {
let x=10;
const [count, setCount] = useState(10);

// const [readonly_var, toupdate ] = useState(10);

    const handleClick = () => {
console.log('button was clicked');
x++;
console.log(x);
    }
    const loadImage = (e) => {
        const file =e.target
    }
  return (
    <div className='container' >
        <h1>Event Handling</h1>
        <h2>Click Event</h2>
        <button className='btn btn-primary' onClick={ (e) => { console.log(e); } }> On Click </button>

        <button className='btn btn-dark' onClick={ (e) => { alert('You clicked that button') } }> Handle Click </button>

        <button className='btn btn-danger' onClick={handleClick}> Passing Defined Function </button>

        <h1>{x}</h1>

        <button className='btn btn-success' onClick={()=>{ setCount(count+1)}}> Updating State </button>
        <h1>{count}</h1>

        <h2 className='mt-5' >Change Event</h2>
        <div className="input-group">
            <input className='form-conrol' onChange={(e) => { console.log(e.target.value)}}/>
            <button className='btn btn-primary'>Send</button>
        </div>
        {/* <input className='form-control mt-4'type="file" onChange={(e) => {console.log(e.target.files)}} /> */}
        <input className='form-control mt-4'type="file" onChange={(e) => {}} />


    </div>
  )
}

export default EventHandling