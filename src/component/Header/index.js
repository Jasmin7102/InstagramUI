import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import style from './style';

const Header = props => {
  return (
    <View style={style.headerContainer}>
      <View style={style.iconHeader}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image
            style={style.backBtn}
            source={{
              uri: 'https://img.icons8.com/ios-filled/50/000000/left.png',
            }}
          />
        </TouchableOpacity>
        <Text style={style.headingTxt}>{props.heading}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          alert('share button');
        }}>
        <Image
          style={style.shareBtn}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhRu6LXb_XJgyO23-iOSSaMgi5mYyphh7zQ&usqp=CAU',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
