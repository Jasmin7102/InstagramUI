import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Header from '../../component/Header';

class Detail extends Component {
  render() {
    const data = this.props.route.params;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <Header heading="Comments" navigation={this.props.navigation} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            margin: 10,
          }}>
          <Image
            source={{uri: data.profilephoto}}
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              marginRight: 10,
            }}
          />
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                paddingBottom: 5,
              }}>
              <Text
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  fontWeight: '500',
                  fontSize: 12,
                  color: '#000000',
                }}>
                {data.username}
              </Text>
              <Image
                source={{
                  uri: 'https://img.icons8.com/fluency-systems-filled/48/22C2FF/instagram-check-mark.png',
                }}
                style={{height: 15, width: 15, marginHorizontal: 3}}
              />
              <Text style={{fontSize: 12, color: 'rgb(133,133,133)'}}>1 d</Text>
            </View>
            <Text style={{color: '#000000'}}>{data.caption}</Text>
          </View>
        </View>
        <View
          style={{
            borderBottomColor: 'rgb(240,240,240)',
            borderBottomWidth: 1,
          }}
        />

        <FlatList
          data={data.commentSection}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={{padding: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    margin: 10,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    {item?.url && (
                      <Image
                        source={{uri: item.url}}
                        style={{
                          height: 35,
                          width: 35,
                          borderRadius: 100,
                          marginRight: 10,
                        }}
                      />
                    )}
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          paddingBottom: 5,
                        }}>
                        {item?.user && (
                          <Text style={{color: '#000000'}}>{item.user}</Text>
                        )}
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'rgb(133,133,133)',
                            padding: 2,
                          }}>
                          {' '}
                          1 d
                        </Text>
                      </View>
                      {item?.comment && (
                        <Text style={{paddingBottom: 5, color: '#000000'}}>
                          {item.comment}
                        </Text>
                      )}
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                        }}>
                        <TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'rgb(133,133,133)',
                            }}>
                            Reply
                          </Text>
                        </TouchableOpacity>
                        <View style={{width: 20}} />
                        <TouchableOpacity>
                          <Text
                            style={{
                              fontSize: 12,
                              color: 'rgb(133,133,133)',
                            }}>
                            Send
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Image
                      style={{
                        height: 20,
                        width: 20,
                      }}
                      source={{
                        uri: 'https://img.icons8.com/windows/32/null/like--v1.png',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

export default Detail;
