import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log('UpperCase Was Clicked'+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
        
    }
    const handleLpClick=()=>{
        console.log('UpperCase Was Clicked'+text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");

        
    }
    const handleCopy=()=>{
       
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success");

        
    }
    const handleOnChange=(event)=>{
        console.log('UpperCase Was handleOnChange');
        setText(event.target.value)
        
    }
    const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading} -</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" placeholder="Enter Your Text Here" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white',
            
            color:props.mode==='dark'?'white':'#042743'}}></textarea>
            </div>
            
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handleLpClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Sumary</h1>
            <p>{text.split(' ').length} Word and {text.length} character's</p>
            <p>{0.008* text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Something in the Text Box"}</p>
        
        </div>
        </>
    )
}
