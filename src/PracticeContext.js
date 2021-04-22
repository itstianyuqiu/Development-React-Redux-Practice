import { createContext, React, useContext , useState} from "react";

const themes = {
    light: {
        backgroundColor: "red"
    },
    dark: {
        backgroundColor: "blue"
    }
}

const mainThemeContext = createContext(themes.light)



const ChangedThemes = () => {

    const themeContext = useContext(mainThemeContext)

    return (
        <div style={themeContext.currentTheme}>
TextTextTextTextTextText
        </div>
    )
}

const ButtonChangeTheme = () => {
    const themeContext = useContext(mainThemeContext)
    return (
        <div>
            <button onClick={themeContext.changeThemes}>Click</button>
        </div>
    )
}

const PracticeContext = () => {

    const [theme, setTheme] = useState(themes.light)

    const changeThemes = () => {
        setTheme(
            pre => {
                if (pre === themes.light) {
                    return themes.dark
                }
                return themes.light
            }
        )
    }

//Q1: {{}}
    return (
        <div>
        <mainThemeContext.Provider value={{
            currentTheme: theme,
            changeThemes,
        }

        }>
            <ChangedThemes />
            <ButtonChangeTheme />
        </mainThemeContext.Provider>
        </div >
    )
}

export default PracticeContext