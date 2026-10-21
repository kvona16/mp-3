import styled from 'styled-components';
import { Layout } from './Layout';
import personalImg from '../assets/personalimage.jpeg';

const BioContainer = styled.div`
  padding-top: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8%;

  .bio {
    width: 60%;
    font-size: calc(2px + 2vw);
    text-align: center;
  }

  img {
    max-width: 35%;
    height: auto;
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 80%;
      height: auto;
      margin-top: 10px;
    }

    .bio {
      width: 100%;
      font-size: calc(2px + 2vw);
    }
  }
`;

export function Home() {
    return (
        <Layout>
            <h3> Home </h3>
            <BioContainer className="bio-container">
                <img src={personalImg} alt="Picture of Katherine Vona" />
                <p className="bio">
                    My name is Katherine Vona, and I am a senior at Boston University majoring in Computer Science with a minor in International Relations. I am seeking a cybersecurity or IT position after graduation. Welcome to my digital resume!
                </p>
            </BioContainer>
        </Layout>
    );
}

export default Home;