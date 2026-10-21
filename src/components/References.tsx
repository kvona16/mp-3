import styled from 'styled-components';
import { Layout } from './Layout';

const ReferencesWrapper = styled.div`
    .table-container {
        width: 100%;
        margin: 20px auto;
    }

    table {
        width: 100%;
        margin: 20px auto;
    }

    th, td {
        text-align: left;
        padding: 2% 2.5%;
        vertical-align: top;
        word-break: break-word;
    }

    th {
        border-bottom: 2px solid #48372F;
        font-weight: bold;
    }

    td {
        border-bottom: 1px solid #C8A1B1;
    }

    .rec-container {
        font-family: arial, sans-serif;
        background-color: #ffffff;
        text-align: left;
    }

    @media screen and (max-width: 900px) {
        table {
            display: block;
            overflow-x: auto;
            width: 90%;
            margin: 10px 0;
        }

        th, td {
            padding: 1.5% 2%;
        }
        .rec-container {
            font-family: arial, sans-serif;
            background-color: #ffffff;
            text-align: left;
        }
    }
`;

export function References() {
    return (
        <Layout>
            <ReferencesWrapper>
                <h3> References </h3>
                <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Organization</th>
                            <th>Contact</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Henry Zeph</td>
                            <td> IT Supervisor </td>
                            <td> Office of the State Treasurer and Receiver General </td>
                            <td> Henry.Zeph@tre.state.ma.us </td>
                        </tr>
                        <tr>
                            <td> Julia Volkovich </td>
                            <td> IT Project Management Office Director </td>
                            <td> Executive Office of Energy and Environmental Affairs </td>
                            <td>Julia.Volkovich@mass.gov</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <br /><br />

                <h3> Recommendation Letter </h3><br/>
                <p>This recommendation letter was written by Henry Zeph, my supervisor at the Office of the State Treasurer and Receiver General, while I worked as an Information Technology intern. </p><br />
                <div className="rec-container">
                    <p> To whom it may concern: </p> <br />
                    <p> I am pleased to write this recommendation for Katherine Vona. I was the IT Helpdesk Manger for Massachusetts State Treasury Office where Katherine worked during her 2025 summer internship. I must mention that she is an exceptional individual. Katherine is highly responsible with a clear vision for her future. One of her primary strengths according to my observation is her sense of creativity and dedication. The Treasury helpdesk department supports more than 300 individuals, spanning multiple agencies and locations that require various technical assistance daily. Her ability to quickly assimilate and provide top-notch technical assistance to users is a testament to unyielding desire to learn regardless of circumstance. Katherine is truly a genuine and most importantly a deserving young lady that encompasses the quintessential values for a good academically driven student. Besides, the sense of desire to learn is a proven testimony of her humbleness.
                        Despite a few months’ internship with the IT department, Katherine marvelous transformation has shown her disciplined attitude and resilience to cope under pressure. Katherine has made learning and academic advancement the cornerstone for her future success in life. She understood that intellectual knowledge requires commitment, dedication, and the ability to comprehend with rigorous hard work for a computer science student. The proven work ethics testify to her unfazed desire to perform well in the future. As I have noticed, Katherine possesses all qualities that signify the idea and standard desired by an organization as a guideline that enhances knowledge and shared principles.
                        Without hesitation, I am very proud to recommend Katherine Vona. I found her to be punctual, assiduous, and inquisitive.</p><br />
                    <p>Sincerely, </p>
                    <p> Henry Zeph </p>
                </div>
            </ReferencesWrapper>
        </Layout>
    );
}

export default References;