import './App.css';
import { ThemeProvider } from 'styled-components';
import { useResize } from "../../components/hooks/useResize";
import React from "react";
import GlobalStyle from '../../global/global';
import theme from '../../theme/theme';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {

  const [userData, setUserData] = React.useState([]);

  const isWide = useResize();

  // function handleSubmit(userData) { /*пригодится позже*/
  //   console.log('user data sent:', userData);
  // };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="page">
        <Header
          isWide={isWide}
        >
        </Header>
        <Main
          isWide={isWide}
          userData={userData}
          setUserData={setUserData}
        // handleSubmit = {handleSubmit} //Для реализации функции отправки перенести в отдельный компонент
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
