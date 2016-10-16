import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Heading, Avatar, DateItem } from '../';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const AvatarHeader = ({
  src, timestamp, heading, circle, backgroundColor, height, gutter,
  avatarStyle, avatarContainerStyle, avatarImageStyle, style, headingStyle, dateStyle,
}) => (
  <View
    style={[ containerStyle, styles.header, {
      backgroundColor,
      padding: gutter,
    }]}
  >
    <Avatar
      circle={circle}
      size={height}
      src={src}
      style={avatarStyle}
      containerStyle={avatarContainerStyle}
      imageStyle={avatarImageStyle}
    />
    <View style={[ style, styles.titleContainer, { height }]} >
      <Heading size={15} weight={'600'} style={headingStyle}>
        {heading}
      </Heading>
      <View style={{ marginLeft: 10 }}>
        <DateItem timestamp={timestamp} style={dateStyle} />
      </View>
    </View>
  </View>
);

AvatarHeader.defaultProps = {
  avatarStyle: {},
  avatarContainerStyle: {},
  avatarImageStyle: {},
  containerStyle: {},
  style: {},
  headingStyle: {},
  dateStyle: {},
};

AvatarHeader.propTypes = {
  src: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.number,
  heading: React.PropTypes.string,
  circle: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  height: React.PropTypes.number,
  gutter: React.PropTypes.number,
};

export default AvatarHeader;
