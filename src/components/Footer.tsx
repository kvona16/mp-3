import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #6D6943;
  padding-bottom: 5%;
`;

export function Footer() {
    return (
        <FooterWrapper>
            <p> All Rights Reserved by Katherine Vona © </p>
        </FooterWrapper>
    );
}

export default Footer;