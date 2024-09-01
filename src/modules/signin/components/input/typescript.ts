import { KeyboardTypeOptions } from "react-native";

interface IInput{
    title: string;
    color: string;
    placeholder?: string;
    icon: string;
    keyboardType?: KeyboardTypeOptions | undefined;
    value: string;
    set: (value: string) => void
    hide?: boolean;
}

export default IInput;

export interface IHide{
    hide: boolean;
}