import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { Home, List, Form } from './';

const Body = () => {

  const { currentTab  } = useSelector(state => state.tabs);

  const whatToDisplay = () => {  
      switch (currentTab?.type) {
        case 'list':
            // Return your components here, based on type
            return <List />;
        case 'form':
            return <Form />;
        default:
            return <Home />;
      }
  };

  return <Style>{whatToDisplay()}</Style>;
};

export default Body;

const Style = styled.div`
    padding: 50px;
`;
