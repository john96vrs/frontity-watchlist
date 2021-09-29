import React, {useState, useEffect} from "react";
import { connect } from "frontity";
import { fetch } from "frontity";
import DeleteIcon from '@material-ui/icons/Delete'
import notificationService from './notificationService';
import Notification from './notification';

const Delete = ({ state }, props) => {
    const authToken = sessionStorage.getItem("token");

    function handleDelete() {
       
            useEffect(() => {
                fetch("https://johndiesattheend.de/wp-json/wp/v2/watchlist/" + props.id ,{ 
                    method: 'DELETE', // or 'PUT'
                    mode: 'cors',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ authToken }`
                    },
                })
                
                .then(filmejs => {
                
                    console.log('Deleted:', filmejs);
                    notificationService.open(filmejs.message);
                   
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
        <div>
            <button onClick={handleClick}> <DeleteIcon/></button>
            <Notification/>
        
        </div>
    )
  
};

export default connect(Delete);