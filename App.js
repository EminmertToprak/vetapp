import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import SplashScreenComponent from './screens/SplashScreen';
import ChatScreen from './screens/ChatScreen';
import PetsScreen from './screens/PetsScreen';
import SettingsScreen from './screens/SettingsScreen';
import TestScreen from './screens/TestScreen';
import './global.css';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {
	const [fontsLoaded, setFontsLoaded] = useState(false);

	// Load custom fonts
	const loadFonts = async () => {
		await Font.loadAsync({
			'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
			'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
		});
		setFontsLoaded(true);
	};

	useEffect(() => {
		const prepareApp = async () => {
			try {
				// Load fonts and other resources
				await loadFonts();
			} catch (e) {
				console.warn(e);
			} finally {
				// Hide the splash screen once fonts are loaded
				setFontsLoaded(true);
				await SplashScreen.hideAsync();
			}
		};

		prepareApp();
	}, []);

	if (!fontsLoaded) {
		// You can return null while waiting for the fonts to load
		return null;
	}

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Splash">
				<Stack.Screen name="Splash" component={SplashScreenComponent} options={{ headerShown: false }} />
				<Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
				<Stack.Screen name="PetsScreen" component={PetsScreen} options={{ headerShown: false }} />
				<Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
				<Stack.Screen name="TestScreen" component={TestScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
