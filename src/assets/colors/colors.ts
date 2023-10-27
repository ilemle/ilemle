const light = {
    text: {
        default: 'rgb(51, 51, 51)', // Темный серый цвет
    },
    background: {
        default: '#f0f0f0', // Светло-серый фон
    },
    switch: {
        active: '#ff3399',
        disable: '#f4f3f4',
        activeBackground: '#81b0ff',
        disableBackground: '#767577',

    },
    primary: '#0099cc', // Более яркий синий цвет
    secondary: '#ff6600', // Более яркий оранжевый цвет
    border: 'rgb(199, 199, 204)',
    base: '#000000', // Черный цвет
    notification: '#66ff66', // Светло-зеленый цвет
    accent: '#ff3399', // Розовый акцент
    tabBar: {
        background: '#ffffff',
        selectedText: '#ff3399',
        disabledText: '#222'
    }
};

//fffacc
const dark = {

    text: {
        default: '#e0e0e0', // Светло-серый цвет
    },
    background: {
        default: '#333333', // Темно-серый фон
    },

    switch: {
        active: '#f5dd4b',
        disable: '#f4f3f4',
        activeBackground: '#81b0ff',
        disableBackground: '#767577',
    },

    primary: '#007acc', // Синий цвет
    secondary: '#ffa500', // Оранжевый цвет
    border: 'rgb(199, 199, 204)',
    base: '#ffffff', // Белый цвет
    notification: '#33cc33', // Ярко-зеленый цвет
    accent: '#f5dd4b',
    tabBar: {
        background: 'lightgray',
        selectedText: '#673ab7',
        disabledText: '#222',
    }
};



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

