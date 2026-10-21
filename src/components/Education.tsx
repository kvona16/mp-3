import styled from 'styled-components';
import { Layout } from './Layout';
import buLogo from '../assets/BUlogo.png';

const ClassList = styled.div`
  background-color: #F4F1E2;
  width: 100%;
  margin: 15px 0;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    background-color: #C8A1B1;
    padding: 4px 10px;
    margin: 0;
    border-radius: 5px;
    text-align: center;
    white-space: nowrap;
    font-size: calc(0.8em + 0.5vw);
  }

  @media screen and (max-width: 900px) {
    margin: 0;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 8px;
      padding: 5%;
      margin: 90px 0;
      list-style: none;
    }

    li {
      margin: 4px;
      background-color: #C8A1B1;
      padding: 15px 14px;
      border-radius: 5px;
      text-align: center;
      font-size: calc(0.7em + 0.3vw);
    }
  }
`;

export function Education() {
    return (
        <Layout>
            <ClassList className="class-list">
            <h3> Education </h3>
            <img src={buLogo} alt="Picture of Boston University Logo" />
            <p>
                I am a senior at Boston University and am a computer science major with an international relations minor. I will graduate in May 2027. Related coursework:
            </p>
                <ul>
                    <li> Computer Systems </li>
                    <li> Software Engineering </li>
                    <li> Web Development </li>
                    <li> Advanced Algorithms & AI </li>
                    <li> Technology & Global Governance </li>
                </ul>
            </ClassList>
        </Layout>
    );
}

export default Education;