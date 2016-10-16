import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ListView,
  Dimensions,
} from 'react-native';

import { floor, divide, take, chunk } from 'lodash';

const { width } = Dimensions.get('window');
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Grid = ({ images, headerContent, footerContent, onPress, itemsPerRow, spacing, style, containerStyle }) => {
  const rounded = floor(divide(images.length, itemsPerRow));
  const outputRounded = take(images, rounded * itemsPerRow);
  const data = chunk(outputRounded, itemsPerRow); // [[],[],[]]

  // Fix row cell padding
  function paddingFix(i, row) {
    if (i === 0) {
      return {
        // LEFT
        marginRight: spacing,
      };
    } else if (i === row) {
      // RIGHT
      return {
        marginLeft: spacing,
      };
    }
    return {
      // CENTER
      marginHorizontal: spacing,
    };
  }

  return (
    <ListView
      enableEmptySections={true}
      renderHeader={() => <View style={[ { width }, headerStyle ]}>{headerContent}</View>}
      renderFooter={() => <View style={[ { width }, footerStyle ]}>{footerContent}</View>}
      dataSource={ds.cloneWithRows(data)}
      pageSize={10}
      renderRow={(rowData, i) =>
        <View key={i} style={styles.container}>
          {rowData.map((item, ii) =>
            <TouchableOpacity
              key={ii}
              onPress={() => onPress(item.id)}
              style={[ { flex: 1 }, containerStyle ]}
            >
              <Image
                style={[ {
                  flex: 1,
                  height: width / (itemsPerRow),
                  marginVertical: 2,
                }, paddingFix(ii, itemsPerRow - 1), style]}
                source={{ uri: item.src }}
              />
            </TouchableOpacity>
          )}
        </View>
      }
    />
  );
};

Grid.defaultProps = {
  images: [],
  spacing: 2,
  rows: 3,
  style: {},
  containerStyle: {},
  headerStyle: {},
  footerStyle: {},
};

Grid.propTypes = {
  images: React.PropTypes.array.isRequired,
  spacing: React.PropTypes.number,
  rows: React.PropTypes.number,
  headerContent: React.PropTypes.element,
  footerContent: React.PropTypes.element,
  onPress: React.PropTypes.func,
  itemsPerRow: React.PropTypes.number,
};

export default Grid;
