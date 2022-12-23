import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MyView from '../components/MyView';
import {HEIGHT} from '../constants';
import Video from 'react-native-video';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/RootStack';
import MyText from '../components/themed/MyText';

type Props = NativeStackScreenProps<RootStackParamList, 'VideoScreen'>;

const VideoScreen = ({route, navigation}: Props) => {
  const {video} = route.params;
  //   console.log({video});
  const [buffering, setBuffering] = useState(true);

  useEffect(() => {
    // console.log({bufferingState: buffering});
  }, [buffering]);
  return (
    <MyView style={styles.container}>
      <Pressable onPress={() => navigation.pop()} style={styles.back}>
        <MyText>{'<'}Back</MyText>
      </Pressable>
      <View style={styles.videoContainer}>
        <Video
          style={styles.video}
          source={{uri: video}}
          resizeMode="cover"
          controls
          repeat
          onBuffer={data => {
            // console.log('buffering...', data);
            if (data.isBuffering) {
              setBuffering(true);
            } else {
              setBuffering(false);
            }
          }}
        />
        {buffering && (
          <ActivityIndicator
            size={'small'}
            color="#d4d4d4"
            style={styles.loader}
          />
        )}
      </View>
    </MyView>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoContainer: {
    height: HEIGHT / 3,
    width: '100%',
    backgroundColor: 'black',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
