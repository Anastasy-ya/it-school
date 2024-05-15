import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';
import Form from "../Form/Form";



function Main(props) {
  
  return (
    <main className="content">
      {props.isWide && <Menu/>}
      <Banner></Banner>
      <Form
        userData = {props.userData}
        setUserData = {props.setUserData}
        onsubmit = {props.handleSubmit}
      ></Form>

    </main>
  );
}

export default Main;