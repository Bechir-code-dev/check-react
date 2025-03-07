import "./App.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "./Image";
import Name from "./Name";
import Description from "./Description";
import Price from "./Price";
import product from "./product";

function App() {
  const firstName = "Bechiro";
  const greeting = firstName ? `Hello, ${firstName}!` : "Hello, there!";
  const imageDisplay = firstName ? (
    <img
      src={product.image}
      alt="user"
      style={{ width: "200px", borderRadius: "20%" }}
    />
  ) : null;

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

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p style={{ textDecoration: "underline" }}>{greeting}</p>
        {imageDisplay}
      </div>
    </>
  );
}

export default App;
