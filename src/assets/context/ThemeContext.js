import {createContext, useState} from 'react';

export const themes = {
light: {
    color: '#ffffff',
    background:  'radial-gradient(circle at 18.76% 50%, #f8ffff 0, #eaffff 12.5%, #dafffc 25%, #c8faf7 37.5%, #b5f2f2 50%, #a1eaee 62.5%, #8ee2ec 75%, #7bdbeb 87.5%, #69d4eb 100%)',
    buttonBackground: '#fff',
    buttonColor: '#000'
},

dark: {
    color: '#ffffff',
    background: 'radial-gradient(circle at 51.37% 50%, #4e3e66 0, #3a2e5f 25%, #1f1f59 50%, #001253 75%, #00004e 100%)',
    buttonColor: '#fff',
    buttonBackground: 'hsla(236, 14%, 21%, 1)'
}
    }

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)
return(
    <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
    </ThemeContext.Provider>
)
}

