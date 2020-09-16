import React from 'react';
import './App.css';
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import styled from "styled-components"

const AppWrapper = styled.div`
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`


function App() {

    return (
        <AppWrapper>
            <CurrencyConverter/>
        </AppWrapper>
    );
}

export default App;
