import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const COLORS = {
    primary: "yellow",
    secondary: '#164a00',
    accent: '#164a00',
    
    success: '#00C851',
    error: '#ff4444',

    black: "#171717",
    white: "#FFFFFF",
    background: "yellow"
}


export const SIZES = {
    base: 10,
    width,
    height
}
