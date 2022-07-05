import React from 'react';
import {TouchableOpacity, Text}  from 'react-native';
import propTypes from 'prop-types';

const Mybutton = (props) => {
    return ( 
        <TouchableOpacity onPress={props.onPress}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
     );
}
 
export default Mybutton;

Mybutton.propTypes ={
    title:propTypes.string.isRequired,
    onPress: propTypes.func
}

Mybutton.defaultProps ={
    title:'Click'
}