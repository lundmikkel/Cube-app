import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PllTopView from '../components/PllTopView';

import '../components/AnswerOption.css';

function AnswerOption(props) {
    const selected = props.name === props.selectedAnswer;
    const id = props.name;

    var liClasses = classNames(
        'answerOption',
        {'selected': selected}
    );

    return (
        <li className={liClasses}>
            <input
                type="radio"
                className='radioCustomButton'
                name="radioGroup"
                checked={selected}
                id={id}
                value={props.name}
                disabled={props.selectedAnswer}
                onChange={props.onAnswerSelected}
            />
            <label className="radioCustomLabel" htmlFor={id}>
                <PllTopView
                    arrows={props.arrows}
                    name={props.name}
                />
                <div className="permutationName">
                    {props.name}
                </div>
            </label>
        </li>
    );
}

AnswerOption.propTypes = {
    name: PropTypes.string.isRequired,
    arrows: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired,
    selectedAnswer: PropTypes.string.isRequired
};

export default AnswerOption;