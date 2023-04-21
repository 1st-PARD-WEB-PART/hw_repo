import Footer from "./pages/components/Footer";
import {Outlet } from 'react-router-dom';
import AppHeader from "./pages/components/Header";
import styled from 'styled-components';

const LayoutContainer = styled.div`
`;

const Layout = () => {
    return (
      <div> 
          <AppHeader/>
        <LayoutContainer>
            
          <Outlet />
        </LayoutContainer>
        <Footer/>
      </div>
    );
  };
  

export default Layout;