import React from 'react';
import PropTypes from 'prop-types';

function PllPlanView(props) {
    const size = props.size || 200;

    return (
        <img
            src={'http://cube.crider.co.uk/visualcube.php?fmt=svg&size=' + size + '&view=plan&bg=t&case=' + props.algorithm + '&arw=' + props.arrows}
            alt={''}
            width={size}
            height={size}
        />
    );
}

PllPlanView.propTypes = {
    algorithm: PropTypes.string.isRequired,
    arrows: PropTypes.string.isRequired,
    size: PropTypes.number
};

export default PllPlanView;