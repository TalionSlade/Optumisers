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

  async function createRouterLine() {
    const startCoords = `${coords[0]},${coords[1]}`;
    console.log(startCoords)
    const endCoords   = `88.3415726640635,22.523813758444632`;
    console.log(endCoords)
    const geometries  = "geojson";
    const geometry    = [];
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving-traffic/${startCoords};${endCoords}?alternatives=false&geometries=${geometries}&steps=false&overview=full&access_token=${APIKEY}`;
    
    try {
      let response = await fetch(url);
      let json = await response.json();
      let coordinates = json["routes"][0]["geometry"]["coordinates"];
      console.log(coordinates)
      if(coordinates.length) {
        const routerFeature = makeRouterFeature([...coordinates]);
        setRoute(routerFeature);
      }      
    } catch(e) {
      console.log(e);
    } 
  }

  useEffect(() => {

    
    const intervalId = setInterval(() => { 
      Tts.speak("PLEASE TURN LEFT AND MOVE 10 metres", {
        androidParams: {KEY_PARAM_PAN: -1, KEY_PARAM_VOLUME: 0.5},
      })
      
    }, 5000)
  
    return () => clearInterval(intervalId); //This is important
   
  }, [useState])


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.page}>
        {hasCoords() ? (
          <View style={styles.container}>
            <KeepAwake />
            <MapboxGL.MapView 
            style={styles.map} 
            zoomEnabled={true}
            onDidFinishLoadingMap={async () => {
              await createRouterLine();
            }}
            onLongPress={async (latLng) => {
              console.log(latLng['geometry']);
              await createRouterLine(latLng["geometry"]["coordinates"]);
            }}
            >
              <MapboxGL.Camera
                zoomLevel={16}
                animationMode={'flyTo'}
                animationDuration={6000}
                centerCoordinate={coords}
                ref={camRef}
              />

              {route && (
                  <MapboxGL.ShapeSource id="line1" shape={route}>
                    <MapboxGL.LineLayer
                      id="routerLine01"
                      style={{lineColor: '#458de1', lineWidth: 4}}
                    />
                  </MapboxGL.ShapeSource>
              )}

              <MapboxGL.UserLocation
                animated={true}
                androidRenderMode={'gps'}
                showsUserHeadingIndicator={true}
              />
              <MapboxGL.PointAnnotation id={'hello'} coordinate={[88.3415726640635,22.523813758444632]}/>
                            
                        
            </MapboxGL.MapView>
           
          </View>
        ) : (
          <View style={styles.container}>
            <Text style={styles.info}>

              FIND HOME

            </Text>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  info: {
    color: '#222',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  map: {
    flex: 1,
  },
});

export default App;
