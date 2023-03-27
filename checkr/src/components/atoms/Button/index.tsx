import React, { ReactNode } from "react";
// import './Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import  {StyledButton} from './index.styles'


interface ButtonProps{
    variant:'primary' | 'secondary' | 'primary-disabled'; 
    startIcon?:IconDefinition;
    endIcon?:any;
    children:ReactNode;
    onClick?():void ;
}

const Button = (props:ButtonProps) =>{
    const {variant='primary',startIcon='',endIcon='', onClick,children}=props;
    return(
        <StyledButton variant={variant} onClick={onClick}>
            {startIcon ==='' ? null :<FontAwesomeIcon icon={startIcon as IconProp}/>}
            {children}
            {endIcon ==='' ? null :<FontAwesomeIcon icon={endIcon as IconProp}/>}
        </StyledButton>

    );
} 
export default Button;