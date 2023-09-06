import React from 'react';
import ReactDOM from 'react-dom'

const Backdrop = (props)=>{
    return(
      //className="backdrop" onClick={closeModal}
      <div className="backdrop" onClick={props.onConfirm} />
    )
  }
  const ModalOverLay = (props)=>{
    return(
      <div className="modal">
      <h2>Hey, {props.name}! How is it going?</h2>
      <p>Your favorite color is {props.color}.</p>
      <button onClick={props.onConfirm}>Close</button>
    </div>
    )
  }
const modalComponent = (props) => {
  return (
    <React.Fragment>

        {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
        {ReactDOM.createPortal(<ModalOverLay name={props.name}  color={props.color} onConfirm={props.onConfirm}/>, document.getElementById("overlay-root"))}

  </React.Fragment>
  )
}

export default modalComponent
