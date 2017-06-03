import React from 'react';
import PropTypes from 'prop-types';

import Answer from '../components/Answer';

import '../components/Result.css'

function Result(props) {
    function renderAnswer(answer) {
        return (
            <Answer
                actualPermutation={answer.actualPermutation}
                selectedPermutation={answer.selectedPermutation}
                correctAnswer={answer.correctAnswer}
                preRotation={answer.preRotation}
                postRotation={answer.postRotation}
            />
        );
    }

    const numberOfCorrectAnswers = props.answers.reduce((sum, answer) => sum + (answer.correctAnswer ? 1 : 0), 0);

    return (
        <div className="result">
            <div>You had {numberOfCorrectAnswers} correct answer{numberOfCorrectAnswers === 1 ? '' : 's'}.</div>
            <ul className='answers'>
                {props.answers.map(renderAnswer)}
            </ul>
        </div>
    );
}

Result.propTypes = {
    answers: PropTypes.array.isRequired
};

export default Result;