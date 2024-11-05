import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
	const [showButtons, setShowButtons] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowButtons(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<View className="flex-1 justify-center items-center bg-background">
			<View className="mt-20 items-center">
				<Image
					className="w-36 h-36 rounded-full"
					source={require('../assets/logo.png')}
				/>
				<Text className="text-3xl font-bold mt-4" text-text>VetApp</Text>
			</View>

			{showButtons && (
				<View className="mt-10 items-center">
					<TouchableOpacity
						onPress={() => navigation.navigate('LoginScreen')}
						className="bg-primary p-4 rounded-lg mb-4 w-48"
					>
						<Text className="text-text text-lg font-semibold text-center">Login</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate('SignUpScreen')}
						className="bg-primary p-4 rounded-lg w-48"
					>
						<Text className="text-text text-lg font-semibold text-center">Sign Up</Text>
					</TouchableOpacity>
				</View>
			)}
		</View>
	);
};

export default SplashScreen;
