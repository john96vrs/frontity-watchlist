import React from "react"
import { connect, Global, css } from "frontity"

const GlobalStyles = () => {
  
    return (
        <Global
        styles={css`
          * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
          },
          html, body{
            font-family: system-ui, Verdana, Arial, sans-serif;
            height: 100%
          }
          nav {
            padding: 2rem;
            background: #F5F8FA;
            max-width: 100%
          }
          nav ul li{
            display: inline;
            padding-right:2rem;
            list-style-type: none;
            text-decoration: none;
          }

          nav ul li a{
            color: steelblue;
            text-decoration: none;
            font-size: 1.5rem
          }

          a{ text-decoration: none !important }

          .navbar-brand {
            color: #145A95 !important;
            font-weight: 600;
            font-size: 3rem
          }

          @media screen and (max-width: 600px) { 
            .navbar {
              text-align: left;

              .navbar-nav { margin-top: 1rem }
              
            }

          @media (min-width: 1200px) {
            .container{
                max-width: 1400px;
                position: relative;
                min-height: 100%;
            }
          }

        `}
      />
    )
}


export default connect(GlobalStyles)

