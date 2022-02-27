import React, { useState } from "react";
import { View, Text, StatusBar, StyleSheet, SafeAreaView, Image } from "react-native";
import {Button, Card, FAB, IconButton, List, Paragraph, Title } from 'react-native-paper';
import MapView from 'react-native-maps';
import { Marker } from "react-native-svg";

var mapStyle = [
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#e9e9e9"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f5f5f5"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 29
          },
          {
              "weight": 0.2
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#ffffff"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f5f5f5"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#dedede"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#ffffff"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#333333"
          },
          {
              "lightness": 40
          }
      ]
  },
  {
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#f2f2f2"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#fefefe"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#fefefe"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  }
]

export default Browse = () => {

  const [state, setState] = useState(1);

  return (
    <SafeAreaView style={styles.areaView}>
        <MapView
            customMapStyle={mapStyle}
            style={{flex: 1}} 
            initialRegion={{
            latitude: 40.721597,
            longitude: -73.9898259,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04
          }}>
          {
            state == 1 ?
            <>
            <MapView.Marker 
              onPress = {() => {
                setState(2)
              }}
             description = "pinpoint"
              coordinate={{latitude: 40.721598, longitude: -73.989826}}>
             <Image source={require('./../assets/img/marker_map.png')} />
            </MapView.Marker>

            <MapView.Marker
              onPress = {() => {
                setState(2)
              }}
              description = "pinpoint"
              coordinate={{latitude: 41.721599, longitude: -75.989827}}>
              <Image source={require('./../assets/img/marker_map.png')} />
            </MapView.Marker>

            <MapView.Marker
              onPress = {() => {
                setState(2)
              }}
              description = "pinpoint"
              coordinate={{latitude: 40.8216, longitude: -74.989828}}>
              <Image source={require('./../assets/img/marker_map.png')} />
            </MapView.Marker>
            </>
          :null
          }
          {
            state == 2 ?
            <Card >  
              <Card.Content style={styles.card_view}>
                <List.Item 
                  style={ styles.listItems}
                  title="White Lorraine Tufted Chair"
                  description="One mile away" />
                <Image style={styles.img_asset} source={require('./../assets/img/Test_objectone.png')}/> 
                  <Paragraph style={styles.card_btn}>
                    Continue {'\n'}
                    Exit
                  </Paragraph>
              </Card.Content>     
            </Card>
            :null
          }
        </MapView>
        {
          state == 1 ?
          <FAB 
            style={styles.fab} 
            icon="plus" />
          :null
        }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fab:{
    position: "absolute",
    right: 0,
    bottom: 0,
    margin: 16
  },
  areaView:{
    flex: 1,
    backgroundColor: "#e9e9e9"
  },
  img_asset:{
    height: 90,
    width: 90,
  },
  exit:{
    backgroundColor: "black",
    flex: 1
  },
  card_view:{
    backgroundColor: "#83C5BE",
    borderRadius: 0
  },
  card_btn:{
    textAlign: "center",
    color: "#E5E5E5",
    fontSize: 16
  },
  listItems:{
    textAlign: "right",
  }
})