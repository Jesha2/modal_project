import React from "react";
import ReactDOM from "react-dom";
import "./ModalComponent.css";

const Backdrop = (props) => {
	return <div className="backdrop" onClick={props.onConfirm} />;
};
const ModalOverLay = (props) => {
	return (
		<div className="modal">
			<h2>"Howdy, {props.name}! Welcome to the Modal."</h2>
			<p>Your favorite color is {props.color}.</p>
			<button onClick={props.onConfirm}>Close</button>
		</div>
	);
};
const ModalComponent = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
			{ReactDOM.createPortal(
				<ModalOverLay
					name={props.name}
					color={props.color}
					onConfirm={props.onConfirm}
				/>,
				document.getElementById("overlay-root")
			)}
		</React.Fragment>
	);
};

export default ModalComponent;
