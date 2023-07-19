import React,{useState} from 'react'


export default function TextForm(props) {
  const[text,setText]=useState('');
  const [wordCount, setWordCount] = useState(0);  

  const onClickUp=()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to LowerCase.","success")
    
  }
  // const removeEmptyspaces=()=>{
  //   let newText = text.replace(/ /g, "");
  //   setText(newText.length)
  // }

  const handleExtraSpaces =()=>{

     let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
  }
  
  const countWords = ()=>{
    let words = text.split(' ');
    let wordCount = 0 ;
    words.forEach((word) => {
      if (word.trim() !== '') {
        wordCount++;
      }
});
setWordCount(wordCount);

  }
  const onClickDown=()=>{
    let newText = text.toLowerCase();
    setText(newText);
   
    props.showAlert("Converted to LowerCase.","success")
   
  }
  const onClear=()=>{

    let newText = "";
    setText(newText)
    props.showAlert("Clear text","success")
  }

  const handleCopy =()=>{
    console.log('Copied');
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copy to clipboard","success")
  }

  const handleOnChange=(event)=>{
    setText(event.target.value)
  }




  return (
    <>
    <div className='container'>

      <h1>{props.heading}</h1>
     <div className="mb-3">

     <textarea className="form-control"   value={text} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'? '#495057' : 'white',color:props.mode=== 'dark'?'white':'black'}} onChange={handleOnChange} ></textarea>
      </div>
      <button className="btn btn-primary mx1" onClick={onClickUp}>Convert to Upper Case</button>
      <button className="btn btn-primary mx-1" onClick={onClickDown}>Convert to Lower Case</button>

      
      <button className="btn btn-primary mx-1" onClick={onClear}>Clear Text</button>
     
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>

      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
     
      <button className="btn btn-primary mx-1" onClick={countWords}>Count Words</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{wordCount} words  {text.length} characters</p>
      <p>
         {0.008*(text.split("").length)}Minutes Read
      </p>
         
    <h2>Preview</h2>
      
      <p>{text.length>0?text:'Enter something above to preview it here. '}</p>
    </div>
    </>
  )
}
