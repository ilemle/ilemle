const light = {
    primary: '#0099cc', // Более яркий синий цвет
    secondary: '#ff6600', // Более яркий оранжевый цвет
    border: 'rgb(199, 199, 204)',
    base: '#000000', // Черный цвет
    notification: '#66ff66', // Светло-зеленый цвет
    accent: '#ff3399', // Розовый акцент
    Text: {
        default: 'rgb(51, 51, 51)', // Темный серый цвет
        inverted: '#767577'
    },
    Background: {
        default: '#f0f0f0', // Светло-серый фон
    },
    Switch: {
        active: '#ff3399',
        disable: '#f4f3f4',
        activeBackground: '#81b0ff',
        disableBackground: '#767577',

    },
    TabBar: {
        background: '#ffffff',
        selectedText: '#ff3399',
        disabledText: '#222'
    },
    Icon: {
        active: '#ff3399',
        disabled: '#333333',
    },
    Button: {
        active: 'pink'
    }
};

//fffacc
const dark = {
    primary: '#007acc', // Синий цвет
    secondary: '#ffa500', // Оранжевый цвет
    border: 'rgb(199, 199, 204)',
    base: '#ffffff', // Белый цвет
    notification: '#33cc33', // Ярко-зеленый цвет
    accent: '#673ab7',

    Text: {
        default: '#e0e0e0', // Светло-серый цвет
        inverted: '#767577',
    },
    Background: {
        default: '#333333', // Темно-серый фон
    },

    Switch: {
        active: '#f5dd4b',
        disable: '#f4f3f4',
        activeBackground: '#81b0ff',
        disableBackground: '#767577',
    },
    TabBar: {
        background: 'lightgray',
        selectedText: '#673ab7',
        disabledText: '#222',
    },
    Icon: {
        active: '#673ab7',
        disabled: '#767577',
    },
    Button: {
        active: '#fffacc'
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

