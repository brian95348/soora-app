import { TextInput as TI } from "react-native"
import styled from "styled-components/native";

export const BlockContainer = styled.View`
    flex: 1;
    width: 100%;   
`

export const Block = styled.View`
    margin-top:  ${props => props.marginTop};
    flex: 1;
`

export const TextContainer = styled.View`
    display: flex;
    justify-content: center; 
    align-items: center;   
`

export const Line = styled.View`
    flex: 1;
    height: 1px;
    width: 18px;
    backgroundColor: black;   
`

export const LinksContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;   
`

export const ImageContainer = styled.View`
    flex: 1;
    display: flex;
    justify-content: center; 
    align-items: center;   
`

export const RowCentered = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;  
    width: 100px; 
`

export const Header = styled.View`
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    width: 90%;
    align-self: center;  
`

export const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonWithIcon = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.borderRadius};
    padding: ${props => props.paddingTopBottom}  ${props => props.paddingLeftRight};
    background: ${props => props.background};
`;

export const Button = styled(ButtonWithIcon)`
    width: 120px;
    height: 38px;
`;

export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 45px;
    width: 350px;
    border-radius: 100px;   
    border: 0.803982px solid #0B0B0B;
    padding: 0 2px 0 10px;
`

export const TextInput = styled(TI)`
    height: 36px;  
    border: none;
    width: 216px;
`