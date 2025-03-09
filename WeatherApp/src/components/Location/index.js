import React, { useState, useEffect, useRef } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ActivityIndicator, 
    Image, 
    TextInput,
    Animated } from 'react-native';
import { getCurrentCityAndState } from '../../services/GeoLocationService';
import { useAppFonts } from '../../fonts';
import AppLoading from 'expo-app-loading';
import LocationIcon from '../../../assets/icons/locationIcon.png';
import { Pressable } from 'react-native';
import SearchIcon from '../../../assets/icons/searchIcon.png';

export default function Location({}) {

    const fontsLoaded = useAppFonts();
    const [location, setLocation] = useState('');
    const [error, setError] = useState(null);
    const [showSearch, setShowSearch] = useState(false);
    const [searchText, setSearchText] = useState('');
    const fadeAnim = useRef(new Animated.Value(0)).current;


    if (!fontsLoaded) return <AppLoading />;
    
    console.log(fontsLoaded);

    useEffect(() => {
        async function fetchLocation() {
        try {
            const loc = await getCurrentCityAndState();
            setLocation(loc);
        } catch (err) {
            setError(err.message);
        }
        }
        fetchLocation();
    }, []);

    if (error) {
        return (
        <View style={styles.container}>
            <Text style={styles.error}>Erro: {error}</Text>
        </View>
        );
    } 

    if (!location) {
        return (
        <View style={styles.container}>
            <ActivityIndicator size="small" color="#fff" />
        </View>
        );
    }

    const openSearch = () => {
        setShowSearch(true);
      };
    
      const closeSearch = () => {
        setShowSearch(false);       
      };

    return (
        
        <View style={styles.wrapper}>
        <Pressable 
             onPress={openSearch}>
            <View style={styles.container}>
                <Image source={LocationIcon} style={styles.icon} />
                <Text style={styles.text} >{location.toUpperCase()}</Text>
            </View>
        </Pressable>
        
        {showSearch && (
            <View style={styles.searchBox}
                onPressOut={closeSearch}
            >
              <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.searchInput}
                    placeholder={location}
                    placeholderTextColor="#fff"
                    autoFocus
                    value={searchText}
                    onChangeText={setSearchText}
                    onBlur={closeSearch}
                    

                />

                <Pressable
                    onPress={() => {
                        setLocation(searchText);
                        setShowSearch(false);
                        console.log('search: ', searchText, '\n\n ');
                    }}
                >
                    <Image source={SearchIcon} style={styles.icon} />
                </Pressable>
              </View>
                <View style={styles.searchResults}>                   
                    <View>
                        <Text>Resultado 1</Text>
                    </View>
                </View>
            </View>
        )}
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 'fit-content',
    height: 32
  },
  wrapper: {
    position: 'relative',
    width: 325
  },
  searchBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    width: '100%',
    height: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
    zIndex: 1,
    borderRadius: 10,
    backgroundColor: '#ADB9D4'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5671AB',
    height: 50,
    borderRadius: 10,
  },
  searchInput: {    
    fontFamily: 'Poppins_700Bold',  
    color: '#fff',
    width: '90%',
    paddingLeft: 15,
    alignItems: 'center',

},
  icon: {
    width: 22,
    height: 22,
    marginRight: 5,
    paddingRight: 15
  },
  text: {
    fontSize: 22,
    height: 32,
    color: '#fff',
    fontFamily: 'Poppins_700Bold',
  },
  error: {
    fontSize: 16,
    color: 'red',
  },
});
