import React, {useContext} from 'react';
import {ThemeContext} from './ThemeContext.js'
import styled from 'styled-components'

export const Button = (props) => {
    const {theme} = useContext(ThemeContext)

    return(
        <TogglerButton {...props} 
        style={{
            color: theme.buttonColor, 
            backgroundColor: theme.buttonBackground
        }}/>
    )
}
const TogglerButton = styled.button`
    padding: 10px;
    border-radius: 30px;
    font-size: 20px;
    margin-left: 50px;
    margin-top: 15px;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 300;
    cursor: pointer;
`