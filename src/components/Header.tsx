import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #6D6943;
  padding-bottom: 5%;

  h1 {
    color: #C8A1B1;
    font-size: calc(2px + 3vw);
  }
`;

export function Header() {
    return (
        <HeaderWrapper>
            <h1>Katherine Vona's Resume</h1>
            <p>A website highlighting my educational and professional experiences</p>
        </HeaderWrapper>
    );
}

export default Header;