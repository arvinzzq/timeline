import React from 'react';
import PropTypes from 'prop-types';

const calcProgress = (beginTime, endTime) => `${(100 * ((new Date()).getTime() - beginTime) /
   (endTime - beginTime)).toFixed(2)}%`

const getStyleProgressBarWrap = (height) => ({
  height,
  padding: '5px 3px',
  borderRadius: '3px',
  boxSizing: 'border-box'
});

const getStyleProgressBarOuter = () => ({
  height: '100%',
  backgroundColor: '#e5e5e5',
  borderRadius: '3px'
});

const ProgressBar = ({ style, color, beginTime, endTime, height }) => (
  <div
    style={{
      ...getStyleProgressBarWrap(height),
      ...style
    }}
  >
    <div
      style={getStyleProgressBarOuter()}
    >
      <div
        style={{
          backgroundColor: color,
          width: calcProgress(beginTime, endTime),
          height: '100%',
          borderRadius: '3px'
        }}
      >
      </div>
    </div>
  </div>
);

ProgressBar.propTypes = {
  style: PropTypes.object,
  color: PropTypes.string,
  height: PropTypes.number,
  beginTime: PropTypes.number.isRequired,
  endTime: PropTypes.number.isRequired
};

ProgressBar.defaultProps = {
  style: {},
  color: '#f47983',
  height: 20
};

export default ProgressBar;