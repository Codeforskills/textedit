import React from 'react';
export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // });
  // const [btntext, setBtnText] = useState('Enable Dark Mode');

  // const toggleStyle = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle({
  //       color: 'white',
  //       backgroundColor: 'black',
  //       border: '1px solid white',
  //     });
  //     setBtnText('Enable Light Mode');
  //   } else {
  //     setMyStyle({
  //       color: 'black',
  //       backgroundColor: 'white',
  //     });
  //     setBtnText('Enable Dark Mode');
  //   }
  // };
 let myStyle={
   color:props.mode === 'dark'?'white':'rgb(36 74 104)',
   backgroundColor:props.mode === 'dark'? 'rgb(36 74 104)':'white',
   
 }
  
  return (
    <div className="container" style={{color:props.mode === 'dark'?'white':'rgb(36 74 104)'}}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
            
              <strong>Developed By</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Rajan Gupta
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
             <strong> What is Text Util ?</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              In this appliation you can manipulate your text by various options like Uppercase to lowercase ,remove extra space ,copy output to clipboard etc.It also supports Dark Mode.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Broswer Compatible and Responsive</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This Application can run on any browser e.g chrome,safari,firefox,microsoft edge, brave and also it is responsive as well.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" class="btn btn-primary my-3" onClick={toggleStyle}>
        {btntext}
      </button> */}
    </div>
  );
}
