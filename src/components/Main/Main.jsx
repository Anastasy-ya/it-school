import styled from 'styled-components';
import React, { useState, useEffect } from "react";
import Menu from '../Menu/Menu';
import Banner from '../Banner/Banner';



function Main({isWide}) {
  
  return (
    <main className="content">
      {isWide && <Menu/>}
      <Banner></Banner>

    </main>
  );
}

export default Main;