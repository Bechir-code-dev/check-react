import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "./Image";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";


function App() {
  // we must declare variables
  const firstName = prompt('Insert your name');
  

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Image></Image>
        <Card.Body>
          <Card.Title>
            <Name></Name>
          </Card.Title>
          <Card.Text>
            <Description></Description>
          </Card.Text>
          <Card.Text>
            <Price></Price>
          </Card.Text>
          <Button variant="primary" style={{ marginLeft: "60px" }}>
            Buy Maybach
          </Button>
        </Card.Body>
      </Card>
{ (firstName)?(<div><h2>Hello {firstName}</h2> <img src='./image1.jpg' alt='name'/></div>):(<h2>hello there !</h2>)}
     
    </>
  );
}

export default App;
