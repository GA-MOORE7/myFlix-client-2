import{ useState } from "react";
import Button from "react-bootstrap/Button"; 
import Form from "react-bootstrap/Form"; 

export const SignupView = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirthday] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

    const data = {
      Username: username,
      Password: password,
      Email: email,
      Birth: birth
    };

    fetch("https://movies-flix-2-2c5b748a56db.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (response.ok) {
        alert("Signup successful");
        window.location.reload();
      } else {
        alert("Signup failed");
      }
    });
    };
  
    return (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
          <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              minLength="3"
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
          <Form.Label>Birthday:</Form.Label>
            <Form.Control
              type="date"
              value={birth}
              onChange={(e) => setBirthday(e.target.value)}
              required
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
        </Form>
      );
  };