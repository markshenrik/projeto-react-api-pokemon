import {ThemeContext, themes} from './ThemeContext.js'
import React, {useContext} from 'react'
import {Button} from './Button.js'


export const ThemeTogglerButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return (
    <div>
        <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Dark/Light Mode</Button>
    </div>
    )
}
