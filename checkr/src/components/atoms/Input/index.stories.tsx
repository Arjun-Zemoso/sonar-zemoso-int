import React from "react";
import Input from "./index";
export default{
    title : 'Input',
    component: Input
}
export const InputText = () => <Input type="text" placeholder='Normal Input' />
export const InputCheckbox = () => <Input type="checkbox"/>