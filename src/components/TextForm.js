import React, { useState } from 'react';
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.givealert("Converted to Upper Case ","success")
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.givealert("Converted to Lower Case ","success")
  };
  const handleClearText = () => {
    if (window.confirm('Are You Sure !') === true) {
      let newText = '';
      setText(newText);
    } else {
      setText(text);
    }
    props.givealert("Text Cleared ","success")
  };
  const handleTrim = () => {
    let newText = text.trim();
    setText(newText);
    props.givealert("Text Trimmed","success");
  };
  
  const handleOnChange = (event) => {
   // console.log(text.length);
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    //window.alert('Copied the text: ' + text.value);
    props.givealert("Text Copied Sucessfully ","success")
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.givealert("Extra Space Removed ","success")
  };


  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            
            style={{backgroundColor: props.mode ==='dark'?'grey':'white',
            color: props.mode ==='dark'?'white':'#042743',
            
          }}
          ></textarea>
          <br />
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            Convert To LowerCase
          </button>

          <button className="btn btn-primary mx-1" onClick={handleTrim}>
            Trim Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div>
        <div className="container my-3" style={{ color: props.mode ==='dark'?'white':'#042743'}}>
          <h2>Text Summary</h2>
          <p>
            <b>Words:</b>
            {/* {text.split(' ').length === 1 ?0:text.trim().split(' ').length} words */}
            
            {text.length>0 ? text.trim().split(" ").length : 0}
            {/* {text.trim().split(" ").length} */}
            <b> Characters: </b>
            {text.length} characters
          </p>
          <p>
            {/* {' '} */}
            {/* text.length>0 ? text.trim().split(" ").length : 0 */}
            {/* <b>Minutes to Read (min's): </b> {0.008 * text.split(' ').length} */}
            <b>Minutes to Read (min's): </b> { text.length>0 ? (text.trim().split(" ").length)*0.008 : 0}
          </p>
          <h2>Preview</h2>
          {/* text.length>0 ?text:"Enter some text to preview" */}
          <p>{text.length>0 ?text:"Enter some text to preview"}</p>
        </div>
      </div>
    </>
  );
}
