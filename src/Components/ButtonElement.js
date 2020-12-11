import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowarop;
    padding: ${({big})=> (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606':'#fff')};
    outline: none;
    border: none;
    display: flex;
    cursor: pointer;
    justify-content: center;
    font-size: ${({fontBig}) => (fontBig ? '24px' : '18px')};
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all ease-in-out;
        background: ${({primary}) => (primary ? '#040601': '#fff')}
    }
`