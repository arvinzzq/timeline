import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import ColorPicker from 'rc-color-picker';
import 'rc-color-picker/assets/index.css';
const noop = () => {};

export default class ColorPickerFormItem extends (PureComponent || Component) {
  static propTypes = {
    onChange: PropTypes.func,
    placement: PropTypes.string,
    style: PropTypes.object
  };

  static defaultProps = {
    onChange: noop,
    placement: 'topRight',
    style: {}
  };

  changeHandler = (val) => {
    this.props.onChange(val.color);
  };

  render() {
    const { style, value, placement } = this.props;
    return (
      <div
        style={{
          ...style
        }}
      >
        <ColorPicker
          defaultColor={value}
          color={value}
          enableAlpha={false}
          onChange={this.changeHandler}
          placement={placement}
        />
      </div>
    );
  }
};