import React, {useState, useEffect} from "react";
import { connect, styled } from "frontity";
import { fetch } from "frontity";

const Add = ({ state },props) => {
    const data = state.source.get(state.router.link)
    const filme = state.source[data.type][data.id]
    
    const [btnText, changeBtnText] = useState("Add to Watchlist")
    const [isAdded, updateAdded] = useState(false);
    const [isDisabled, updateDisabled] = useState(false);

    const login = {
       /*  username: "john",
        password: "Acbf6996-"   */
        username: "wantan",
        password: "Tx@0gJLkM*dh4R$mpO)fiv!B"  
    };

    const filmejs = {
        title: filme.poster,
        content: filme.overview,
        excerpt: filme.filmtitle,
        status: "publish"
        
    };

    const handleSubmit = async (event) => {
        const authToken = sessionStorage.getItem("token");

        const response =  await fetch("http://wordpress.vrs/wp-json/wp/v2/watchlist/",{ 
            method: 'POST', // or 'PUT'
            mode:'cors',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ authToken }`
            },
            body: JSON.stringify(filmejs),
        })

       // .then(response => response.json())
        .then(filmejs => {
            console.log('Success:', filmejs);
            updateAdded(true)
            updateDisabled(true)
            changeBtnText("Added to your Watchlist")
            return filmejs
        })
        
        .catch((error) => {
            console.error('Error:', error);
        });
      
        isAdded == true;
       // const body = await response.json();
        return filmejs;
    };

   

    return (
        <Button>
            <button disabled= {isDisabled} type="submit" onClick={handleSubmit} className={ isAdded ? "btn btn-success"  : "btn btn-primary"}>
                {btnText}
            </button>
        </Button>
        )
    }        

export default connect(Add);

const Button = styled.div`
  margin-top: 1rem
`;