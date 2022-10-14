import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import KeepAwake from 'react-native-keep-awake';
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tts from "react-native-tts";


const APIKEY = "pk.eyJ1IjoibGFtYmRhbGFiczI1ZWNvc29hcCIsImEiOiJja2VhZWRhOG4wNmU5MnNxZXQ0bmhxZnU3In0.zWyuwunBSy51dulZG9gowQ";
// const APIKEY = ""
MapboxGL.setAccessToken(APIKEY);
MapboxGL.setConnected(true);
MapboxGL.setTelemetryEnabled(false);


Geolocation.setRNConfiguration({skipPermissionRequests: false, authorizationLevel: 'auto'});

const App = () => {
  const [route, setRoute] = useState(null);
  const [coords, setCoords] = useState([88.34158, 22.52727]);
  const camRef = useRef(null);
  const mapRef = useRef(null);
  const hasCoords = () => coords[0] !== 0 && coords[1] !== 0;


  useEffect(() => {
    async function getPermissionLocation() {
      const geo = await Geolocation.getCurrentPosition(
        (location) =>
          setCoords([location.coords.longitude, location.coords.latitude]),
        (err) => console.log(err),
        {enableHighAccuracy: true},
      );
    }

    getPermissionLocation();
  }, []);

  function makeRouterFeature(coordinates = []) {

    let routerFeature = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: coordinates,
          },
        },
      ],
    };
    return routerFeature;
  }
}  
