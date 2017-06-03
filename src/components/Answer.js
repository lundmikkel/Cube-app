import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import PllTwoSidedView from '../components/PllTwoSidedView';
import PllPlanView from '../components/PllPlanView';
import PllTopView from '../components/PllTopView';

import '../components/Answer.css'

function Answer(props) {
    function opposite(pling) {
        return pling === '\'' ? '' : '\'';
    }

    function reverseRotation(rotation) {
        const regex = /([UuDdFrBbLlRrMESXYZ])(')?(2)?/g;
        var match, reverse = '';

        while (match = regex.exec(rotation)) {
            reverse += match[1] + opposite(match[2]) + (match[3] || '');
        }

        return reverse;
    }    

    var liClasses = classNames(
        'answer',
        {'correct': props.correctAnswer},
        {'incorrect': !props.correctAnswer}
    );

    const shownPermutation = props.preRotation + props.actualPermutation.algorithm + props.postRotation;
    const topView = props.preRotation + props.actualPermutation.algorithm + reverseRotation(props.preRotation);

    const size = 200;

    return (
        <li className={liClasses}>
            <div className='shownPermutation'>
                <PllTwoSidedView
                    algorithm={shownPermutation}
                    size={size} />
            </div>
            <div className='actualPermutation'>
                <PllPlanView
                    algorithm={props.preRotation + props.actualPermutation.algorithm + reverseRotation(props.preRotation)}
                    arrows={props.actualPermutation.arrows}
                    size={size}
                />
                <PllPlanView
                    algorithm={reverseRotation(props.preRotation) + props.actualPermutation.algorithm + (props.preRotation)}
                    arrows={props.actualPermutation.arrows}
                    size={size}
                />
                <PllPlanView
                    algorithm={props.actualPermutation.algorithm + reverseRotation(props.preRotation)}
                    arrows={props.actualPermutation.arrows}
                    size={size}
                />
                <PllPlanView
                    algorithm={ props.actualPermutation.algorithm + (props.preRotation)}
                    arrows={props.actualPermutation.arrows}
                    size={size}
                />
            </div>
            <div className='selectedPermutation'>
                <PllTopView
                    name={props.selectedPermutation.name}
                    arrows={props.selectedPermutation.arrows}
                    size={size}
                />
            </div>
        </li>
    );
}



Answer.propTypes = {
    actualPermutation: PropTypes.object.isRequired,
    selectedPermutation: PropTypes.object.isRequired,
    correctAnswer: PropTypes.bool.isRequired
};

export default Answer;