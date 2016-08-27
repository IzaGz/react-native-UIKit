import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import _ from 'lodash'
import {gutter} from '../variables'

const Card = ({src, title, link, radius, gutter, onPress, marginBottom, shadow}) => (
  <View style={{marginHorizontal: gutter, borderRadius: radius, marginBottom: marginBottom}}>
    <View style={[styles.card, {shadowOpacity: shadow ? 0.6 : 0, borderRadius: radius}]}>
      <View style={styles.clipRadius}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{uri: src}} style={styles.img}/>
        </TouchableOpacity>
        <View style={styles.imgBorderBtm}></View>
        <View style={styles.lowerSection}>
          <Text style={styles.title}>{_.truncate(title, {'length': 64, 'separator': /,? +/})} </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.link}>{link}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

var styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#D8D8D8',
    borderWidth: 1,
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {width: 0, height: 1},
  },
  clipRadius: {
    borderRadius: 4,
    overflow: 'hidden'
  },
  lowerSection: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500'
  },
  link: {
    fontSize: 15,
    marginTop:5,
    color: '#979DA8'
  },
  img: {
    height: 200,
    resizeMode: 'cover'
  },
  imgBorderBtm: {
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
    height: 1,
  }
})

Card.defaultProps = {
  gutter: gutter,
  radius: 4,
  marginBottom: 0,
  shadow: true,
}

Card.propTypes = {
  src: React.PropTypes.string,
  title: React.PropTypes.string,
  link: React.PropTypes.string,
  gutter: React.PropTypes.number,
  onPress: React.PropTypes.func,
  marginBottom: React.PropTypes.number,
  shadow: React.PropTypes.bool,
}

export default Card;
