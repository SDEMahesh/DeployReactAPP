import React,{useState} from "react"
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export default function TextForm(props) {

const handleupclick=()=>{
  console.log("handle Up click",+text);
  let newtext = text.toUpperCase();
  setText(newtext)
  props.alertfunc("Text has been change to Uppercase","success");

} 

const handlelowerclick = ()=>{
  console.log("handle Up click",+text);
  let newtext = text.toLowerCase();
  setText(newtext)
  props.alertfunc("Text has been change to Lowercase","success");
};
const handleonchange = (event)=>{
    console.log("handle on change");
    setText(event.target.value)
};
const handlePropclick = () =>{
      let proper = text.toLocaleLowerCase().split(' ');
      // console.log(proper.length);
      for(var i=0; i<=proper.length-1;i++)
      {
            // let firstletter = i.charAt(i);
            proper[i] = proper[i].charAt(0).toUpperCase()+proper[i].slice(1);
            // console.log(proper[i].slice(1));
            console.log(proper);
            
            
      }
      setText(proper.join(' '));
      // props.alertfunc("Text has been change to Propercase","success");
      alertFun();

};
const cleartext=()=>{
  console.log("Text Is clear");
  setText('');
  // text.value='';
  props.alertfunc("Text Cleared","success");
};

// let finalvalue;
// useEffect(()=> {
// function countWhiteSpaces (){
//   let arr2 = text.split(' ');
//   var arr3 = [];
//   arr2.forEach(element => {
//     if(element !== '')
//     {
//         arr3.push(element);
//     }
//     return arr3.length;
//   })}
//   setText(countWhiteSpaces());
// },[]);

const removeSpaces=() =>{
  let arr = text.split(' ');
  var arr1 = [];
  arr.forEach(element => {
    
    if(element !== '')
    {
        arr1.push(element);
    }
    
  });
  console.log(arr1);
  setText(arr1.join(' '));
  props.alertfunc("Extra Spaces Removed","success");
  

};
const originalText = () =>{
  const originaltextvar = orgText;
  setoriginText(originaltextvar)
};
// let textlength=text.split(' ').length-1;

const [text, setText] = useState("");
const [orgText,setoriginText]=useState(text);

const alertFun =()=>{
  const notyf = new Notyf(
    {
      duration: 1000,
      position: {
        x: 'right',
        y: 'top',
      }
    }
  );
  notyf.success('Successfully');
};


  return (
    <>
    <div className="Container" style = {{color: props.mode==='dark'? 'white':'black'}}>
    <div className="mb-3">
      {/* <h1>{props.heading}</h1> */}
    <h1>{props.heading}</h1>
    {/* <label for="myBox" className="form-label">Example textarea</label> */}
    <textarea className="form-control" value={text} onChange={handleonchange} style = {{background: '#c9bcbc'}} id="myBox" rows="9"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert To Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowerclick}>Convert To Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handlePropclick}>Convert To ProperCase</button>
    <button className="btn btn-primary mx-2" onClick={originalText}>Original Text</button>
    <button className="btn btn-primary mx-2" onClick={cleartext}>Clear</button>
    </div>
<button type="button" className="btn btn-primary my-2 mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Remove Extra Space
</button>
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Are you Sure to Remove All Spaces From Text</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"  onClick={removeSpaces}>Yes</button>
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
      </div>
    </div>
  </div>
</div>
    <div className="ExtraFeature my-3" style = {{color: props.mode==='dark'? 'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.replace(/\s{1,}/g,'')===''?0:text.replace(/\s{2,}/g,' ').trim().split(' ').length} words and {text.replace(/\s{2,}/g,'')===''?0:text.replace(/\s{2,}/g,' ').trim().length} Characters </p>
      <h2>Preview</h2>
      <p>{text}</p>
      {/* <p>{text.}</p> */}
    </div>
    </>
  )
}
