import React from "react";


// import './App.css'
import { useState , useEffect} from "react";
import {Card,Button} from 'react-bootstrap';


let list = ["London", "Paris", "Riyadh"]

export default function Effect() {
  const [name, setName] = useState(list); //list of names
  const [input , setData] = useState("")


useEffect(()=>{
if( input == ""){ //didAmount
    setName(list) 
    console.log("Welcome");
}else{

    console.log("Search Now");
    setName (name.filter( d => d.includes(input.toLowerCase()) ))
}

},[input]) // didUpdate





  return (
    <div>
       {name.map((data) => 
          (
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{data}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          )
        )}

      <br></br>
      <input value={input} placeholder="Enter Name ?" onChange={(e) => {setData(e.target.value);}}></input> 
      {/* <button>search</button> */}
    
    </div>
  );
}