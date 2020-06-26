import React from "react"
import {Button} from "wix-style-react";
import * as Icon from 'react-bootstrap-icons';

export interface ButtonsContainerProps {
}

export const ButtonsContainer: React.FC<ButtonsContainerProps> = () =>
    <div style={{display: "flex", justifyContent: "space-evenly",padding: "35px 50px"}}>
        <Button size="large" prefixIcon={<Icon.Cart2/>}>Add To Cart</Button>
        <Button size="large" prefixIcon={<Icon.SkipForward/>}>Buy Now</Button>
    </div>
