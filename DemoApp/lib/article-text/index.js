import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { truncate } from 'lodash';
import { primary, gutter } from '../variables';

const styles = StyleSheet.create({
  row: {
    marginVertical: gutter,
  },
  user: {
    marginRight: gutter,
    marginBottom: 5,
    fontWeight: '600',
  },
  mainTxt: {

  },
});

const ArticleText = ({ username, text, highLightColor, onPress }) => (
  <View style={styles.row}>
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.user, { color: highLightColor }]}>
        {username}
      </Text>
    </TouchableOpacity>
    <Text style={styles.mainTxt}>
      {truncate(text, {'length': 100, 'separator': /,? +/})}
    </Text>
  </View>
);

ArticleText.defaultProps = {
  highLightColor: primary,
};

ArticleText.propTypes = {
  username: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  highLightColor: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

export default ArticleText;
