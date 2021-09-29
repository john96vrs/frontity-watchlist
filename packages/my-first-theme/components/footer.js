import React from "react"
import { connect, styled } from "frontity"

const Footer = () => {
   

    return (
      <div> 
        <Foot>
            
            <p>All the informations come from <a href="https://www.themoviedb.org/?language=de">TMDB</a></p>

        </Foot>
      </div>
 
    )
}


export default connect(Footer)

const Foot = styled.footer`
  padding: 2rem 2rem;
    border-top: 1px solid #f0eeee;   

  @media (max-width: 600px) {
    position: relative;
    text-align: center;
    margin-top: 1rem;
    padding: 2rem 2rem;
    border-top: 1px solid #f0eeee;    
  }
`;