import React, { useState } from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"

const Logout = () => {
    const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;
    
    function handleDelete() {
        sessionStorage.clear();
        window.location.href = "http://localhost:3000/login/";
    }

    return (
       <div>
          { username ==  null ? null :  <button className="btn btn-warning" onClick={handleDelete}> Logout </button> }  
       </div> 
    )
}


export default connect(Logout)