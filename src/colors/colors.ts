
const light = {
    primary: '#fff',
    secondary: '#fff000'
}

const dark = {
    primary: '#fffacc',
    secondary: '#ff22cc '
}

// type ColorSchemeType=[typeof ]

interface IColors {
    light: typeof light,
    dark: typeof dark,
}

export const colors: IColors = {
    light,
    dark
}

