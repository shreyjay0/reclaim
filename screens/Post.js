import React, { useState, useEffect } from 'react';
import { StyleSheet ,Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';

export default function App() {
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);
const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
   <View style={{ flex: 1}}>
      <View style={styles.cameraContainer}>
            <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
      </View>

      {/* Flip Camera */}
      <TouchableOpacity style={styles.flipImage} onPress={() => { setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back)}}>
        <Image source={require('./../assets/img/Flip_button.png')}/>
      </TouchableOpacity>

      {/* Picture taking */}
      <TouchableOpacity style={styles.cameraButton} onPress={() => takePicture()}>
        <Image source={require('./../assets/img/photo_buton.png')}/>
      </TouchableOpacity>

      {/*This is were the picture is saved/ taken, change this aspect */}
      {image && <Image source={{uri: image}} style={{flex:.5}}/>} 
   </View>
  );
}

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  fixedRatio:{
    flex: 1,
    aspectRatio: .5
  },
  cameraButton:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 23,
  },
  flipImage:{
    alignSelf: 'flex-end',
    marginTop: 45,
    paddingRight: 10,
    position: 'absolute'
  }
})