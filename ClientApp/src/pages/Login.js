
import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';
import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForm";
import {useAuth} from "../context/auth";

function Login(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { setAuthTokens } = useAuth();  
    const referer = props.location.state.referer || '/';

    if (isLoggedIn) {
        return <Redirect to={referer} />;
      }

    function postLogin() {
        console.log(username);

        /*
        var postData = {
            username: username,
          password: password
        };
        
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };



        axios.post('https://localhost:5001/Token', postData, axiosConfig)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        }
         */

        axios.post("/Token", {
            username,
            password
        }

        ).then(result => {
          if (result.status === 200) {
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        }).catch(e => {
          setIsError(true);
        });
      }

      if (isLoggedIn) {
        return <Redirect to="/" />;
      }

  return (
      <Card>
      <Logo src={logoImg} />
      <Form>
        <Input
          type="username"
          value={username}
          onChange={e => {
            setUserName(e.target.value);
          }}
          placeholder="username"
        />
        <Input
          type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
          placeholder="password"
        />
        <Button onClick={postLogin}>Sign In</Button>
      </Form>
      <Link to="/signup">Don't have an account?</Link>
        { isError &&<Error>The username or password provided were incorrect!</Error> }
    </Card>
  );
}

export default Login;