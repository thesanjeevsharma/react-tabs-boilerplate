import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { tabClose, tabSwitch } from '../state/actions';
import { CloseIcon } from '../assets/icons';


const Tab = ({ data, active }) => {

    const dispatch = useDispatch();

    return (
        <Style active={ active } onClick={ () => dispatch(tabSwitch({ currentTab : data })) }>
            { data.title } 
            <Icon onClick={ (e) => {e.stopPropagation(); dispatch(tabClose());} } hidden={ !active }>
                <CloseIcon />
            </Icon>
        </Style>
    );
}

export default Tab;

const Style = styled.span(
    ({ active }) => `
        background: ${ active ? '#fff' : 'rgba(255, 255, 255, 0.5);' };
        padding: 15px;
        color: #555B6E;
        font-weight: 500;

        &:hover {
            cursor: pointer;
        }
    `
);

const Icon = styled.span`
    margin-left: 28px;

    &:hover {
        cursor: pointer;
    }
`