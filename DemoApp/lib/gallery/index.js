import React from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = ({ images, heightGallery, onPress }) => (
  <ScrollView
    horizontal={true}
    decelerationRate={'fast'}
    directionalLockEnabled={true}
    pagingEnabled={true} // NOTE jumps to next
    showsHorizontalScrollIndicator={false}
    removeClippedSubviews={true} // NOTE experimental feature
    ref={(scrollView) => { _scrollView = scrollView; }}
    automaticallyAdjustContentInsets={false}
    onScroll={() => { console.log('onScroll!'); }}
    scrollEventThrottle={200}
    //style={styles.scrollView}
    heightGallery={heightGallery}>
    {images.map((uri, i) => {
      return (
        <TouchableOpacity onPress={onPress} key={i}>
          <Image style={[styles.img, {height: heightGallery}]} source={{uri: uri}} />
        </TouchableOpacity>
      );
    })}
  </ScrollView>
);

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width: width
  }
})
Carousel.defaultProps = {
  images: [],
  heightGallery: 300,
}
Carousel.propTypes = {
  images: React.PropTypes.array,
  heightGallery: React.PropTypes.number,
  onPress:  React.PropTypes.func,
}
export default Carousel;
