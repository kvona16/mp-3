import styled from 'styled-components';
import { Layout } from './Layout';
import ireland from '../assets/ireland.jpeg';
import hockey from '../assets/hockey.jpeg';

const LeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3vw;

  table {
    width: 100%;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: 2vw;
  }
`;

export function Leadership() {
    return (
        <Layout>
            <h2> Leadership Experience </h2>
            <LeaderContainer id="leader-container">
                <table>
                    <tbody>
                    <tr>
                        <td><h3>Boston University Study Abroad</h3></td>
                    </tr>
                    <tr>
                        <td>Dublin Study Abroad Ambassador</td>
                    </tr>
                    <tr>
                        <td> <img src={ireland} alt="Picture of Katherine Vona in Ireland" /></td>
                    </tr>
                    <tr>
                        <td>Collaborated with site staff and university advisors to plan events and resolve issues for a 30-person program.</td>
                    </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr>
                        <td><h3>Women’s Club Ice Hockey</h3></td>
                    </tr>
                    <tr>
                        <td>Vice President</td>
                    </tr>
                    <tr>
                        <td> <img src={hockey} alt="Picture of Katherine Vona playing hockey" /></td>
                    </tr>
                    <tr>
                        <td>Organized and managed logistics for a 15 game season, including transportation and referees; hired coaches, and scheduled practice times.</td>
                    </tr>
                    </tbody>
                </table>
            </LeaderContainer>
        </Layout>
    );
}

export default Leadership;