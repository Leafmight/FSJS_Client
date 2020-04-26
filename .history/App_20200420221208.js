import React, { useState, useEffect, useRef } from 'react';
import { Platform, Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Constants from 'expo-constants';
import facade from "./serverFacade";

const SERVER_URL = "https://1bf1238a.ngrok.io";

const MyButton = ({ txt, onPressButton }) => {
  return (
    <TouchableHighlight style={{ backgroundColor: "#4682B4", margin: 3 }} onPress={onPressButton}>
      <Text style={{ fontSize: 22, textAlign: "center", padding: 5 }}>{txt}</Text>
    </TouchableHighlight>
  );
}

export default App = () => {

  //HOOKS
  const [position, setPosition] = useState({ latitude: null, longitude: null })
  const [errorMessage, setErrorMessage] = useState(null);
  const [gameArea, setGameArea] = useState([]);
  const [region, setRegion] = useState(null);
  const [serverIsUp, setServerIsUp] = useState(false);
  const [status, setStatus] = useState("");
  let mapRef = useRef(null);


  useEffect(() => {

  }, [])

  async function getGameArea() {
    //Fetch gameArea via the facade, and call this method from within (top) useEffect
  }

  getLocationAsync = async () => {
    //Request permission for users location, get the location and call this method from useEffect
  };

  /*
  When a press is done on the map, coordinates (lat,lon) are provided via the event object
  */
  onMapPress = async (event) => {
    //Get location from where user pressed on map, and check it against the server
  }

  onCenterGameArea = () => {
    // (RED) Center map around the gameArea fetched from the backend
    Alert.alert("Message", "Should center map around the gameArea")
  }

  sendRealPosToServer = async () => {
    //Upload users current position to the isuserinarea endpoint and present result
    Alert.alert("Message", "Should send users location to the 'isuserinarea' endpoint")
  }

  const info = serverIsUp ? status : " Server is not up";
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>

      {!region && <Text style={styles.fetching}>
        .. Fetching data</Text>}

      {/* Add MapView */}

      <Text style={{ flex: 1, textAlign: "center", fontWeight: "bold" }}>
        Your position (lat,long): {position.latitude}, {position.longitude}
      </Text>
      <Text style={{ flex: 1, textAlign: "center" }}>{info}</Text>

      <MyButton style={{ flex: 2 }} onPressButton={sendRealPosToServer}
        txt="Upload real Position" />

      <MyButton style={{ flex: 2 }} onPressButton={() => onCenterGameArea()}
        txt="Show Game Area" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  fetching: {
    fontSize: 35, flex: 14,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    paddingTop: Constants.statusBarHeight
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

function showStatusFromServer(setStatus, status) {
  setStatus(status.msg);
  setTimeout(() => setStatus("- - - - - - - - - - - - - - - - - - - -"), 3000);
}
