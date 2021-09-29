// File: /packages/my-first-theme/src/components/list.js

import React, { useState } from "react"
import { connect, styled } from "frontity"

const Login = ({ state, libraries, actions  }) => {
  const data = state.source.get(state.router.link)
  const Html2React = libraries.html2react.Component;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handlePwChange(event) {
    setPassword(event.target.value);
  }
  
  const login = {
    /*  username: "wantan",
        password: "Tx@0gJLkM*dh4R$mpO)fiv!B"   */
     username: name,
     password: password
  };

 const getToken = async (event) => {
  event.preventDefault();
     const response = await fetch("https://johndiesattheend.de/wp-json/jwt-auth/v1/token",{ 
     method: 'POST', // or 'PUT'
     headers: {
     'Content-Type': 'application/json',
     },
     body: JSON.stringify(login),
     })
     .then(response => response.json())
     .then(login => {
         console.log('Success:', login);
         sessionStorage.setItem('token', login.token);
         sessionStorage.setItem('username', login.user_nicename);
         if(sessionStorage.getItem("token").value != "" || sessionStorage.getItem("token") != undefined ){
          window.location.href = "http://localhost:3000/watchlist/";
         }else{
          return "Wrong Datas"
         }
     })
     
     .catch((error) => {
         console.error('Error:', error);
         alert("not registered");
     });

     console.log(response.token);
     const body = await response.json();
     sessionStorage.setItem('token', response.data.token);

  return body;
 };

        return (
           <Container>
            <div class="formContent"> 
                  <h1>Login</h1>
                  <form onSubmit={getToken}>
                        <input
                            onChange={handleChange}
                            type="text"
                            name="username"
                            style = {{ margin: '20px'}}
                            value={name}
                            placeholder="username"
                        >
                    </input>
                    <br />  
                        <input
                            onChange={handlePwChange}
                            type="password"
                            name="password"
                            style = {{ margin: '20px'}}
                            value={password}
                            placeholder="password"
                        >
                        </input>
                        <br/>
                        <input className="btn btn-primary ms-3" type="submit" value="submit"></input>
                  </form>
                </div>
              </Container>
        )     
}

const Container = styled.section` 
  margin-top: 6rem;
  padding: 20px;
  display: flex;
  justify-content:center;
  align-items: center;
  width: 100%;
  min-height: 100%;

  h1 {
    color: steelblue;
  }

  .formContent {
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #fff;
    padding: 30px;
    width: 90%;
    max-width: 450px;
    position: relative;
    padding: 0px;
    -webkit-box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
    text-align: center;
  }

  input[type=text], input[type=password]  {
    background-color: #f6f6f6;
    color: #0d0d0d;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 5px;
    width: 85%;
    border: 2px solid steelblue ;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
  }

  input[type=submit] {
    background-color: #56baed;
    border: none;
    color: white;
    padding: 15px 80px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-size: 13px;
    -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
    -webkit-border-radius: 5px 5px 5px 5px;
    border-radius: 5px 5px 5px 5px;
    margin: 5px 20px 40px 20px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
`;

export default connect(Login)