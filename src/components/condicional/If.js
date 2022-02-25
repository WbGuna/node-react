import React from 'react'

function If(props) {
    // Condicional para atravez do children colocar objeto atravez da props.
    if(props.test){
        return props.children;
    } else {
        return false;
    }
}

export default If