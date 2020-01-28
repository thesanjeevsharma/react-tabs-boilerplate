import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { Tab } from '.';

const TabsBar = () => {

    const { tabs, currentTab } = useSelector(state => state.tabs);

    return (
        <Style>
            {
                tabs.map((tab, i) => <Tab key={ i } data={ tab } active={ currentTab.title === tab.title } />)
            }
        </Style>
    );
}

export default TabsBar;

const Style = styled.div``;