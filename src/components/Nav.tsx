import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  width: 20%;
  background-color: #48372F;

  ul {
    display: flex;
    padding-left: 0;
    list-style: none;
    flex-direction: column;
  }

  li {
    text-align: center;
    margin: 30%;a
  }

  a {
    color: #C8A1B1;
    text-decoration: none;
    font-size: calc(1px + 1.5vw);
    font-family: Monaco, monospace, serif;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    ul {
      flex-direction: row;
      justify-content: center;
    }

    li {
      margin: 3%;
    }
  }
`;

export function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/education">Education </Link></li>
                <li><Link to="/experiences">Experiences </Link></li>
                <li><Link to="/references">References </Link></li>
                <li><Link to="/leadership">Leadership </Link></li>
                <li><Link to="/projects">Projects </Link></li>
            </ul>
        </NavWrapper>
    );
}

export default Nav;