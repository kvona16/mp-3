import styled, { createGlobalStyle } from 'styled-components';
import { Header } from './Header';
import { Nav } from './Nav';
import { Footer } from './Footer';
import React from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    color: #48372F;
  }
  img {
    max-width: 80%;
  }
`;

const PageWrapper = styled.div`
  background-color: #F4F1E2;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
    min-height: 100vh;
`;

const Container = styled.div`
  background-color: #F4F1E2;
  width: 100%;
  display: flex;
  flex-direction: row;
    flex: 1;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const MainWrapper = styled.main`
  width: 80%;
  font-size: calc(2px + 1.5vw);
  text-align: center;
  padding: 2%;
    flex: 1;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <GlobalStyle />
            <PageWrapper id="page-wrapper">
                <Header />
                <Container id="container">
                    <Nav />
                    <MainWrapper>{children}</MainWrapper>
                </Container>
                <Footer />
            </PageWrapper>
        </>
    );
}

export default Layout;