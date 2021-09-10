import React, {useState, useEffect} from "react";
import { connect } from "frontity";
import { fetch } from "frontity";
import DeleteIcon from '@material-ui/icons/Delete'

const Delete = ({ state }, props) => {
    const authToken = sessionStorage.getItem("token");

    function handleDelete() {
       
            useEffect(() => {
                fetch("http://wordpress.vrs/wp-json/wp/v2/watchlist/" + props.id ,{ 
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
            }, [])
        
    }

    function handleClick() {
        props.onDelete(handleDelete())
    }

    return (
        <button onClick={handleClick}> <DeleteIcon/></button>
    )
  
};

export default connect(Delete);