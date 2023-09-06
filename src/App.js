// break into components and see why we cant remove the event listner
import './App.css';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import ModalComponent from './ModalComponent';

function App() {
 
  const [name, setName] = useState("");//name input
  const [color, setColor] = useState("");//color input
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const nameChangeHandler=(e)=>{
    console.log("nameChange" +e.target.value)
    setName(e.target.value);

  }
  
  const colorChangeHandler=(e)=>{
    console.log("colorChange");
   console.log("colorChange" + e.target.value)
    setColor(e.target.value);
   
  }
  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    window.removeEventListener('keydown', handleEscapeKey);
    setIsModalOpen(false);
    // setName("");
    // setColor("");

  }
   
  // Function to close modal on Esc key press
  const handleEscapeKey=(e)=>{
    if (e.key === 'Escape') {
          closeModal();
    }//else {alert("you pressed a key "+ e.key)}

  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    openModal(); // Open the modal when the form is submitted
    window.addEventListener('keydown', handleEscapeKey);
  }
  ;
  // div> 
  //              <div className="backdrop" onClick={closeModal} > </div>
  //              <div className="modal" >
  //                 <h2>Hello, {name}!</h2>
  //                 <p>Your favorite color is {color}.</p>
  //                 <button onClick={closeModal}>Close</button>
  //             </div>
  //         </div>

  return (
   

    <div className="App">
      <header className="App-header">

      {isModalOpen && ( 
         <ModalComponent onConfirm={closeModal} name={name}  color={color}/>     
        )}
        
        <form onSubmit={onSubmitHandler}>
          Enter your Name: <input  id="username"
            type="text"
            value={name}
            onChange={nameChangeHandler} />
         
          Enter your Favorite Color: 
          <input id="color"
            type="text"
            value={color}
            onChange={colorChangeHandler} />
          <button>Enter</button>
        </form>
        

      </header>
    </div>
  );
}

export default App;
