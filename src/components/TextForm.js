import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        setText(text.toUpperCase());
        props.showAlert("coverted to upper case", "success");
    };

    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        setText(text.toLowerCase());
        props.showAlert("coverted to lower case", "success");
    };

    const handleClearClick = (event) => {
        // console.log("On change");
        setText("");
        props.showAlert("text cleared", "success");
    };

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    };


    const [text, setText] = useState("");
    return (
        <>
            <div className='container' style={{color: props.mode === "dark" ? "white" : "black"}} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode === "dark" ? "rgb(55, 57, 57)" : "#eae9e6", color: props.mode === "dark" ? "white" : "black"}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
            </div>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
