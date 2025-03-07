import * as Location from 'expo-location';

export async function getCurrentCityAndState() {
    const API_KEY = "f32cc3e300769ce7113bee9dd4ca67bb";
    const limit = 5;
    // Solicita permissão para acessar a localização
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        throw new Error('Permissão para acessar a localização foi negada.');
    }

    // Obtém a posição atual do usuário
    const { coords } = await Location.getCurrentPositionAsync({});
    // Apos obter as coordenadas quero utilizar a api
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${coords.latitude}&lon=${coords.longitude}&limit=${limit}&appid=${API_KEY}`);
    const data = await response.json();
    if (data) {
        const location = `${data[0].local_names.en}, ${data[0].country}`;

        return location;
    } else {
        throw new Error('Não foi possível obter a cidade e o estado a partir das coordenadas.');
    }
}
