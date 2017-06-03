import React from 'react';
import PropTypes from 'prop-types';

function PllTopView(props) {
    const size = props.size || 100;

    return (
        <img
            src={'http://cube.crider.co.uk/visualcube.php?fmt=svg&size=' + size + '&r=x-45x-45&dist=1.5&bg=t&arw=' + props.arrows}
            //src={require('../api/images/pll_top_view_' + props.name + '.svg')}
            alt={''}
            title={props.name}
            width={size}
            height={size}
        />
    );
}

PllTopView.propTypes = {
    name: PropTypes.string.isRequired,
    arrows: PropTypes.string.isRequired,
    size: PropTypes.number
};

export default PllTopView;