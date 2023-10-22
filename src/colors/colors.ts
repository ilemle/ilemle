
const light = {
    primary: 'rgb(211,255,245)',
    secondary: '#fff000',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(12, 253, 255)',
}

const dark = {
    primary: '#fffacc',
    secondary: '#ff22cc ',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(2, 69, 58)',
}

// type ColorSchemeType=[typeof ]

interface IColors {
    light: typeof light,
    dark: typeof dark,
    system: typeof light | typeof dark,
}

export const colors: IColors = {
    light,
    dark,
    system: light
}

