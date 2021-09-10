import React, { useState } from "react"
import { connect, styled } from "frontity"

const Footer = () => {
   

    return (
      <Foot>
          <p>All the informations come from <a href="https://www.themoviedb.org/?language=de">TMDB</a></p>
      </Foot>
    )
}


export default connect(Footer)

const Foot = styled.footer`
  text-align: center;
  padding: 2rem 2rem;
  border-top: 1px solid #f0eeee;
`;