import styled from 'styled-components';
import { Layout } from './Layout';

const ExperienceContainer = styled.div`
  table {
    background-color: #C8A1B1;
    border-style: dotted;
    padding-bottom: 5%;
    margin: 0 auto 30px;
    width: 100%;
  }

  p {
    text-align: left;
    font-size: calc(2px + 2vw);
  }

  li {
    text-align: left;
  }

  .italics {
    font-style: italic;
  }

  @media screen and (max-width: 900px) {
    table {
      background-color: #C8A1B1;
      border-style: dotted;
      padding-bottom: 5%;
      margin: 0 auto 30px;
    }

    li {
      text-align: left;
    }

    h2 {
      font-size: calc(2px + 1.5vw);
    }
  }
`;

export function Experiences() {
    return (
        <Layout>
            <h2> Experiences </h2>
            <ExperienceContainer id="experience">
                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}> <h4> Boston University - Learning Events & Technology Service</h4></td>
                    </tr>
                    <tr>
                        <td className="italics">IT Support Specialist</td>
                        <td>May 2024 - Present</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>
                                <li>Delivered on-site classroom support by diagnosing and resolving hardware issues including HDMI connections, projectors, and microphones across over 100 classrooms.</li>
                                <li> Updated online IT toolkit by writing solutions to new issues, collaborating with a 10 member team.</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}> <h4> Executive Office of Energy and Environmental Affairs</h4></td>
                    </tr>
                    <tr>
                        <td className="italics">IT Project Management Intern</td>
                        <td>Jun 2026 - Aug 2026</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>
                                <li>Cleaned up Smartsheet project environments and audited assets for completeness, improving data quality and alignment with PMO standards.</li>
                                <li> Built executive dashboards and foundational FY26 reporting views while documenting core intake and governance processes to improve portfolio tracking.</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}> <h4> Host Broadcast Service</h4></td>
                    </tr>
                    <tr>
                        <td className="italics">CCR Assistant</td>
                        <td>May 2026 - Jul 2026</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>
                                <li>Rigged, tested, and fine-tuned commentary equipment across 7 World Cup games, delivering flawless technical quality for global broadcasts reaching 10M+ viewers.</li>
                                <li>Monitored Commentary Control Units (LCUs) to solve real-time audio issues, ensuring seamless multi-language feed delivery for media networks across 20+ countries.</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}> <h4> Office of the State Treasurer and Receiver General</h4></td>
                    </tr>
                    <tr>
                        <td className="italics">Information Technology Intern</td>
                        <td>Jun 2025 - Aug 2025</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>
                                <li>Installed, configured, and maintained desktops, laptops, and mobile devices across more than 11 departments, applying Windows and firmware updates.</li>
                                <li>Coordinated infrastructure improvements for a staff of over 100 by performing VPN upgrades and migrating file systems to OneDrive, enhancing security and accessibility.</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <table>
                    <tbody>
                    <tr>
                        <td colSpan={2}> <h4> MassCyberCenter</h4></td>
                    </tr>
                    <tr>
                        <td className="italics">Student Mentee</td>
                        <td>Sep 2026 - Dec 2026</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>
                                <li>Coming Soon!</li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </ExperienceContainer>
        </Layout>
    );
}

export default Experiences;