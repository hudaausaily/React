import React from 'react';
import Card from 'react-bootstrap/Card';

function CardComponent({ message }) {
  return (
    <div>
      {message.map((item, index) => (
        <div key={index} style={{ width: '18rem' , display: 'inline-block',margin:'5px 20px'}}>
        <Card style={{ width: '18rem' , display: 'inline-block',margin:'5px 20px'}}>
        <Card.Img style={{height:'20rem'}} variant="top" src={item.bookImage}  alt={item.bookTitle}/>
        <Card.Body>
          <Card.Title>{item.bookTitle}</Card.Title>
          <Card.Text>{item.description} </Card.Text>
          <Card.Text>{item.author}</Card.Text>
          
        </Card.Body>
      </Card>
          
        </div>
      ))}
    </div>
  );
}

export default CardComponent



