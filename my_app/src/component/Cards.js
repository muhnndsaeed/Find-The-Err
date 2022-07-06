import React, { useState } from "react";
import CardData from "./CardData";
import {Card,Button} from 'react-bootstrap'
function Cards() {
  const [memeImage, setMemeImage] = useState();

  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImage(url);
  };
  return (
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={memeImage} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    
    <Button onClick={myRandomEmg}>Get a new image</Button>
  </Card.Body>
</Card>
    
    // <div>
    //   <button onClick={myRandomEmg}>Get a new image</button>
    //   <img src={memeImage}></img>
    // </div>
  );
}

export default Cards;
