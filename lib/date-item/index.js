import React from 'react';
import {
  Text,
} from 'react-native';

import moment from 'moment'

const DateItem = ({ timestamp, color, marginLeft, fontSize }) => (
  <Text style={{ color, marginLeft, fontSize }}>
    { moment(timestamp).fromNow() }
  </Text>
);

DateItem.defaultProps = {
  color: '#222',
  marginLeft: 0,
  fontSize: 13,
};

DateItem.propTypes = {
  color: React.PropTypes.string,
  timestamp: React.PropTypes.number.isRequired,
  marginLeft: React.PropTypes.number,
  fontSize: React.PropTypes.number,
};

export default DateItem;
