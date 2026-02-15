import React, { useState } from 'react'

export default function TextForm(props) {
    //child property ke roop me props pass kar rahe hain
    //  taki parent component se data receive kar sake
    const handleUpClick = () => {
        let newText = text.toUpperCase();//toUpperCase() method string ke sare characters ko uppercase me convert kar deta hai.
        setText(newText);//setText function ke through hum text variable ki value ko update kar sakte hain. Yaha hum newText variable ki value ko text variable me set kar rahe hain.
    }


    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleDownClick =() => {
        let newText = text.toLowerCase();//toLowerCase() method string ke sare characters ko lowercase me convert kar deta hai.
        setText(newText);
    }

    const [text, setText] = useState('Enter text here'); //(enter text here). default value set karne ke liye useState hook ka use karte hain. 
    //  setText function ke through hum text variable ki value ko update kar sakte hain.
    return (                                            // text variable me current value store hoti hai aur setText function ke through hum text variable ki value ko update kar sakte hain.
       <> 
      
       { /*//text = "new text"; //wrong way to change the state
        //setText("new text"); //correct way to change the state */}
       
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1> {props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
        
       { /* //onChange event
        //value attribute ke through hum textarea ke andar text variable ki value ko display kar rahe hain. 
        // onChange event ke through hum handleOnChange function ko call kar rahe hain jab bhi user textarea me kuch type karta hai. 
        // handleOnChange function me hum setText function ke through text variable ki value ko update kar rahe hain.

        //onclick event
      //onClick event ke through hum handleUpClick function ko call kar rahe hain jab bhi user button par click karta hai.
      // handleUpClick function me hum text variable ki value ko uppercase me convert kar rahe hain aur phir setText function ke through text variable ki value ko update kar rahe hain.
    */}
     

    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>



       </>
    )
}
