import React from 'react';
import styled from 'styled-components';

import { SideNav, TabsBar } from './';

const Header = () => {    
    return (
        <Style>
            <SideNav />
            <TabsBar />
        </Style>
    );
}

export default Header;

const Style = styled.div`
    background: #D9E9F1;
    display: flex;
    align-items: center;
    overflow: hidden;
`