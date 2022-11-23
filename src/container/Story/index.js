import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

const width = Dimensions.get('screen').width;

class Story extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.route.params;
    const {renderNext} = this.props.route.params;
    const index = this.props.route.params.index;
    const {renderPrev} = this.props.route.params;
    return (
      <SafeAreaView
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ImageBackground
          style={{
            height: 500,
            width: 300,
            position: 'absolute',
            zIndex: 1,
          }}
          source={{uri: data?.storySection?.imgUrl}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              left: 0,
            }}>
            <TouchableOpacity
              onPress={() => {
                renderPrev && renderPrev(index - 1);
              }}
              style={{
                width: 195,
                height: 850,
              }}></TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              zIndex: 2,
              right: 0,
            }}>
            <TouchableOpacity
              onPress={() => {
                renderNext && renderNext(index + 1);
              }}
              style={{
                width: 195,
                height: 850,
              }}></TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default Story;
