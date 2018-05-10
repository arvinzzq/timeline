import React from 'react';
import PropTypes from 'prop-types';

const calcProgress = (beginTime, endTime) => {
  const date = ((new Date()).getTime() / 1000).toFixed(0);
  if (date < beginTime) {
    return '0%';
  } else if (date > endTime) {
    return '100%'
  }
  const percentProgress = (100 * (date - beginTime) /
  (endTime - beginTime)).toFixed(2);
  return `${percentProgress < 100 ? percentProgress : 100}%`
}

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