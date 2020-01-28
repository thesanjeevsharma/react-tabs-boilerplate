import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { tabOpen } from '../state/actions';
import { MenuIcon, CloseIcon, SettingsIcon } from '../assets/icons';

const SideNav = () => {

    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Style>
            <Icon onClick={ () => setIsOpen(true) }>
                <MenuIcon />
            </Icon>
            <Content open={ isOpen }>
                <Icon onClick={ () => setIsOpen(false) }>
                    <CloseIcon size={ 16 }/>
                </Icon>
                <ListTop className="nav-list-top">
                    <ListItem onClick={ () => {dispatch(tabOpen({ type : 'list', title : 'List' })); setIsOpen(false);} }> List </ListItem>
                    <ListItem onClick={ () => {dispatch(tabOpen({ type : 'form', title : 'Form' })); setIsOpen(false);} }> Form </ListItem> 
                </ListTop>
                <ListBottom className="nav-list-bottom">
                    <ListItem> 
                        <SettingsIcon /> &nbsp; Manage Settings 
                    </ListItem>
                </ListBottom>
            </Content>
        </Style>
    );
}

export default SideNav;

const Style = styled.div`
    z-index: 100;
`

const Icon = styled.span`
    cursor: pointer;
    margin: 10px;
`

const Content = styled.div(
    ({ open }) => `
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${ open ? '0' : '-500px' };
        color: #555B6E;
        background: #D9E9F1;
        min-width: 200px;
        transition: .5s ease;
        padding: 10px;
    `
);

const ListTop = styled.ul`
    list-style-type: none;
    margin: 50px 0;
    padding: 15px;
    font-weight: 500;
`

const ListBottom = styled(ListTop)`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`

const ListItem = styled.li`
    border-bottom: 1px solid #D9E9F1;
    padding: 5px;
    display: flex;
    align-items: center;

    &:hover {
        cursor: pointer;
        border-bottom: 1px solid #fff;
    }

    &:not(:last-child) {
        margin-bottom: 15px;
    }
`