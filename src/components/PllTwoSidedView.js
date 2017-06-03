import React from 'react';
import PropTypes from 'prop-types';

function PllTwoSidedView(props) {
    const size = props.size || 200;

    const algorithm = (props.preRotation || '') + props.algorithm + (props.postRotation || '');

    console.log(props);
    return (
        <img
            src={'http://cube.crider.co.uk/visualcube.php?fmt=svg&size=' + size + '&stage=ll&bg=t&case=' + algorithm}
            alt={''}
            width={size}
            height={size}
        />
    );
}

PllTwoSidedView.propTypes = {
    algorithm: PropTypes.string.isRequired,
    size: PropTypes.number,
    preRotation: PropTypes.string,
    postRotation: PropTypes.string,
};

export default PllTwoSidedView;