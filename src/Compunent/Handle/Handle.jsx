import React, { Component } from 'react'

export default class Handle extends Component {
  render() {
    return (
      <div className='container'>
          <h3>Handle</h3>
          <input className='form-control w-25' type="text" onChange={(e) => {
            //   e.target chính là thẻ input
            var tagInput = e.target;
            console.log('value',tagInput.value);
          }}/>
      </div>
    )
  }
}
