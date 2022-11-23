import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {jsonData} from '../../redux/action';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
    };
  }

  componentDidMount() {
    this.props.dataValue();
  }

  renderNextStory = index => {
    if (index === this.props.data.data[0].story.length) {
      this.props.navigation.goBack();
    } else {
      this.props.navigation.replace('Story', {
        renderNext: this.renderNextStory,
        renderPrev: this.renderPreviousStory,
        index: index,
        ...this.props?.data?.data[0]?.story[index],
      });
    }
  };

  renderPreviousStory = index => {
    if (index === -1) {
      this.props.navigation.goBack();
    } else {
      this.props.navigation.navigate('Story', {
        renderPrev: this.renderPreviousStory,

        index: index,
        ...this.props.data?.data[0]?.story[index],
      });
    }
  };

  render() {
    const {data} = this.props;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFF'}}>
        <FlatList
          data={data.data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item}) => {
            const rail = item.rail;
            if (rail === 'story') {
              return (
                <FlatList
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={item?.story}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        style={{
                          margin: 8,
                          alignItems: 'center',
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate('Story', {
                              ...item,
                              renderNext: this.renderNextStory,
                              renderPrev: this.renderPreviousStory,
                              index: index,
                            });
                          }}>
                          <Image
                            style={{
                              height: 60,
                              width: 60,
                              borderRadius: 100,
                              overflow: 'hidden',
                              alignSelf: 'center',
                            }}
                            source={{uri: item.img}}
                          />

                          <Text
                            style={{
                              width: '100%',
                              height: 20,
                              fontSize: 10,
                              color: '#000000',
                              alignSelf: 'center',
                            }}>
                            {item.username}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  }}
                />
              );
            } else {
              return (
                <View>
                  <View
                    style={{
                      borderBottomColor: 'rgb(242,242,242)',
                      borderBottomWidth: 1,
                    }}
                  />
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    data={item?.post}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => {
                      return (
                        <View>
                          <View style={{paddingBottom: 10}}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                              }}>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                  padding: 10,
                                }}>
                                <Image
                                  style={{
                                    height: 30,
                                    width: 30,
                                    borderRadius: 100,
                                    marginRight: 8,
                                  }}
                                  source={{uri: item.profilephoto}}
                                />

                                <View
                                  style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingVertical: 5,
                                  }}>
                                  <Text
                                    style={{
                                      fontSize: 14,
                                      textAlign: 'center',
                                      color: '#000000',
                                    }}>
                                    {item.username}
                                  </Text>
                                </View>

                                {item.famous && (
                                  <View style={{padding: 5}}>
                                    <Image
                                      style={{height: 15, width: 15}}
                                      source={{uri: item.famous}}
                                    />
                                  </View>
                                )}
                              </View>

                              <TouchableOpacity
                                style={{padding: 12}}
                                onPress={() => {
                                  alert('Vertical menu');
                                }}>
                                <Image
                                  style={{height: 20, width: 20}}
                                  source={{
                                    uri: 'https://img.icons8.com/material-rounded/24/null/menu-2.png',
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View
                              style={{
                                borderBottomColor: 'rgb(242,242,242)',
                                borderBottomWidth: 1,
                              }}
                            />
                            <View
                              style={{
                                height: 350,
                                width: 390,
                              }}>
                              <Image
                                resizeMode="contain"
                                style={{
                                  height: '100%',
                                  width: '100%',
                                }}
                                source={{uri: item.post}}
                              />
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingHorizontal: 15,
                            }}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                width: 100,
                                paddingBottom: 8,
                              }}>
                              <TouchableOpacity
                                onPress={() => {
                                  alert('like button');
                                }}>
                                <Image
                                  style={{width: 25, height: 25}}
                                  source={{
                                    uri: 'https://img.icons8.com/windows/32/null/like--v1.png',
                                  }}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  this.props.navigation.navigate('Detail', {
                                    ...item,
                                  });
                                }}>
                                <Image
                                  style={{width: 25, height: 25}}
                                  source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/512/3031/3031126.png',
                                  }}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity
                                onPress={() => {
                                  alert('share button');
                                }}>
                                <Image
                                  style={{width: 20, height: 20, margin: 3}}
                                  source={{
                                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMhRu6LXb_XJgyO23-iOSSaMgi5mYyphh7zQ&usqp=CAU',
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View>
                              <TouchableOpacity
                                onPress={() => {
                                  alert('save button');
                                }}>
                                <Image
                                  style={{width: 20, height: 20}}
                                  source={{
                                    uri: 'https://cdn-icons-png.flaticon.com/128/84/84510.png',
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                          <View
                            style={{paddingHorizontal: 15, paddingBottom: 8}}>
                            <Text
                              style={{
                                fontWeight: '600',
                                paddingBottom: 3,
                                color: '#000000',
                              }}>
                              {item?.like.length} likes
                            </Text>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                paddingBottom: 3,
                              }}>
                              <Text
                                style={{fontWeight: '600', color: '#000000'}}>
                                {item.username} {}
                              </Text>
                              {item?.caption.length > 140 ? (
                                <Text
                                  style={{
                                    fontSize: 14,
                                    lineHeight: 20,
                                  }}>
                                  {this.state.showText
                                    ? item?.caption
                                    : `${item?.caption.substring(0, 140)}...`}
                                  <TouchableOpacity
                                    onPress={() => {
                                      this.setState({
                                        showText: !this.state.showText,
                                      });
                                    }}>
                                    <Text
                                      style={{
                                        color: 'rgb(128,130,138)',
                                        fontSize: 14,
                                      }}>
                                      {this.state.showText ? 'less' : 'more'}
                                    </Text>
                                  </TouchableOpacity>
                                </Text>
                              ) : (
                                <Text style={{color: '#000000'}}>
                                  {item?.caption}
                                </Text>
                              )}
                            </View>

                            <TouchableOpacity
                              onPress={() => {
                                this.props.navigation.navigate('Detail', {
                                  ...item,
                                });
                              }}>
                              <Text style={{color: 'rgb(144,144,144)'}}>
                                View all {item.commentSection.length} comments
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    }}
                  />
                </View>
              );
            }
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.reducer,
  };
};

const mapDispatchToProps = {
  dataValue: jsonData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
