// File: /packages/my-first-theme/src/components/list.js

import React, {useState, useEffect} from "react"
import { connect, styled } from "frontity"
import { fetch } from "frontity";
import Image from "@frontity/components/image";
import DeleteIcon from '@material-ui/icons/Delete'

const ListWatchlist = ({ state, libraries, actions }) => {
  const data = state.source.get(state.router.link);
  const [list,deleteItem] = useState(data.items);
  const Html2React = libraries.html2react.Component;
  const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;

  useEffect(async () => {
      actions.source.fetch(state.router.link, { force: true });
  })
  
  return (
    <div>
       <h1 className="my-3 mx-4">My Watchlist</h1>
      <Container>
      <div> {username == null ? <p>You have to log in to see your watchlist. You can register <a href="http://wordpress.vrs/">here.</a> </p>: null} </div>
        {list.map((item) => {
          const post = state.source[item.type][item.id]
          const author = state.source.author[post.author]
          //const username = typeof window !== 'undefined' ? sessionStorage.getItem("username") : null;
        
              const deleteFilm = async (id) => {
                  const authToken = sessionStorage.getItem("token");
                 
                  const response = await fetch("http://wordpress.vrs/wp-json/wp/v2/watchlist/" + item.id ,{ 
                      method: 'DELETE', // or 'PUT'
                      mode: 'cors',
                      headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${ authToken }`
                      },
                  })
                  
                  .then(filmejs => {
                  
                      console.log('Deleted:', filmejs);
                  })
        
                  .catch((error) => {
                      console.error('Error:', error);
                  });

                 let liste = list.filter(test => {
                   return test.id !== id
                 })

                 deleteItem(liste);  
                
              };

          if(author.name == username)   {
            return ( 
              <div key={item.id} className="col-md-2 px-0">
                <div className="card border-0">
                <button onClick={ () => {deleteFilm(item.id)}}> <DeleteIcon/> </button>
                  <StyledImage src={"https://image.tmdb.org/t/p/w200/" + post.title.rendered }/> 
              
                  <p> Added from {author.name} </p>
                  
                </div> 
              </div> 
            )
          }
        })}
      
      </Container>
    
    </div>  
  )
}

const Container = styled.section`
  margin:  0 auto;
  padding: 24px;
  list-style: none;
  
  display:flex;
  
  flex-direction:row;
  flex-wrap: wrap;

  p {
    font-weight: 400;
  }

  h3 {
    display:inline
  }

  button {
    position:absolute;
    bottom: 40px;
    right: 0;
    background-color: rgb(0, 0, 0); 
    color: rgb(255, 255, 255); 
    border: none
  }

  
`;

const StyledImage = styled(Image)`
  width: 100%
`;

export default connect(ListWatchlist);