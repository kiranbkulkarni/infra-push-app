//import React, { Component } from 'react';

// Input: liked: boolean
//Output: onClick() --> raiase an event
const Like = (props) => {
    let classes = "fas fa-bell";
        if(!props.liked) classes += "-o"

        return (
            <i onClick={props.onClick} style={{cursor: 'pointer'}} className={classes} aria-hidden="true"></i>
         );
}
 
export default Like;
