import React from "react"
import { connect, styled } from "frontity"

const Logout = () => {
    const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;
    
    function handleDelete() {
        sessionStorage.clear();
        window.location.href = "http://localhost:3000/login/";
    }

    return (
       <LogoutButton className="logout-btn">
          { username ==  null ? null :  <button className="btn btn-warning" onClick={handleDelete}> Abmelden </button> }  
       </LogoutButton> 
    )
}


export default connect(Logout)

const LogoutButton = styled.div`
  @media screen and (max-width: 600px) { 
    margin-top: 1rem
  }
`;