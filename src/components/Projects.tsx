import styled from 'styled-components';
import { Layout } from './Layout';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorWrapper = styled.div`
    background-color: #48372F;
    color: #C8A1B1;
    text-align: left;
    width: auto;
    padding: 5%;

    button {
        background-color: #C8A1B1;
        border-radius: 25%;
        text-align: center;
        padding: 2%;
        font-size: calc(2px + 2vw);
        cursor: pointer;
    }

    .button-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 2vw;
        gap: 1.5vw;
    }

    @media screen and (max-width: 900px) {
        button {
            font-size: calc(3px + 3vw);
        }
        .field-row {
            display: flex;
        }
        .button-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1vw;
            justify-content: center;
            margin-top: 20px;
        }
    }
`;

const OutputDisplay = styled.h3<{ $isNegative?: boolean }>`
  color: ${(props) => (props.$isNegative ? 'red !important' : 'inherit')};
`;

export function Projects() {
    const {
        firstNumber,
        setFirstNumber,
        secondNumber,
        setSecondNumber,
        output,
        calculate,
        clearFields,
    } = useCalculator();

    const isNegative = output.startsWith('-');

    return (
        <Layout>
            <h3> Projects </h3><br />
            <h4> Calculator </h4><br />
            <p> This is a JavaScript project for my Web Application Development class. </p>

            <CalculatorWrapper className="calculator">
                <div className="field-row">
                    <label htmlFor="first-number">First Number:</label>
                    <input
                        type="number"
                        id="first-number"
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(e.target.value)}
                    />
                </div>
                <br />
                <div className="field-row">
                    <label htmlFor="second-number">Second Number:</label>
                    <input
                        type="number"
                        id="second-number"
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(e.target.value)}
                    />
                </div>

                <div className="button-container">
                    <button onClick={() => calculate('+')}> + </button>
                    <button onClick={() => calculate('-')}> - </button>
                    <button onClick={() => calculate('/')}> / </button>
                    <button onClick={() => calculate('*')}> * </button>
                    <button onClick={() => calculate('**')}> ** </button>
                    <button onClick={clearFields}> clear </button>
                </div>

                <h3>Output:</h3>
                <OutputDisplay id="output" $isNegative={isNegative}>
                    {output}
                </OutputDisplay>
            </CalculatorWrapper>
        </Layout>
    );
}

export default Projects;