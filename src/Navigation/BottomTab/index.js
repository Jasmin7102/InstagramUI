import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../container/Home';
import {style} from './style';

const Tab = createBottomTabNavigator();

function Search() {
  return alert('Search posts and people here');
}

function Reels() {
  return alert('Scroll reels here');
}

function Notification() {
  return alert('Notifications can be seen here');
}

function Profile() {
  return alert('Welcome to your profile "Jasmin Kaur"');
}

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <TouchableOpacity
              onPress={() => {
                alert('Dropdown menu');
              }}>
              <Image
                style={style.insta}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png',
                }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={style.rightIcons}>
              <TouchableOpacity
                style={style.border}
                onPress={() => {
                  alert('Add post by clicking on this icon');
                }}>
                <Image
                  style={style.plus}
                  source={{
                    uri: 'https://img.icons8.com/material-outlined/24/null/plus-math--v1.png',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  alert('Start conversation by clicking on this icon');
                }}>
                <Image
                  style={style.messenger}
                  source={{
                    uri: 'https://img.icons8.com/ios/50/null/facebook-messenger--v1.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitleAlign: 'left',
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image
              style={style.tabIcons}
              source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/48/null/home.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image
              style={style.tabIcons}
              source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/48/null/search--v1.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          headerTitle: 'Reels',
          headerTitleAlign: 'left',
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image
              style={style.tabIcons}
              source={{
                uri: 'https://img.icons8.com/ios/50/000000/instagram-reel.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerTitle: 'Notifications',
          headerTitleAlign: 'left',
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image
              style={style.tabIcons}
              source={{
                uri: 'https://img.icons8.com/windows/32/null/like--v1.png',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: 'jasmin_kaur',
          headerTitleAlign: 'left',
          tabBarLabel: '',
          tabBarIcon: ({}) => (
            <Image
              style={style.tabIcons}
              source={{
                uri: 'https://success-factor.s3.amazonaws.com/prod/profilePicFolder/9fa7d59d-4e8b-4f72-8339-f72c884a1a4e_Jasmin--Kaur-Profile-Pitcure.jpeg',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
