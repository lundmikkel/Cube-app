import React from 'react';
import PropTypes from 'prop-types';

import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import PllTwoSidedView from '../components/PllTwoSidedView';

function Quiz(props) {
    function renderAnswerOption(option) {
        return (
            <AnswerOption
                key={option.name}
                name={option.name}
                arrows={option.arrows}
                onAnswerSelected={props.onAnswerSelected}
                selectedAnswer={props.selectedAnswer}
            />
        );
    }
    
    return (
        <div className="quiz">
            <QuestionCount
                counter={props.counter}
                total={props.total}
            />

            <PllTwoSidedView
                algorithm={props.permutation.algorithm}
                preRotation={props.preRotation}
                postRotation={props.postRotation}
            />
            
            <ul className="answerOptions">
                {props.answerOptions.map(renderAnswerOption)}
            </ul>
        </div>
    );
}


Quiz.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    permutation: PropTypes.object.isRequired,
    answerOptions: PropTypes.array.isRequired,
    selectedAnswer: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;