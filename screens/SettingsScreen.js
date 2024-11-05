import React from 'react';
import { View, Text, Image } from 'react-native';

const SettingsScreen = () => {
	return (
		<View className="flex-1 justify-center items-center bg-white">
			<Text className="text-3xl text-white">This is Settings Screen</Text>
			<Image
				source={{
					uri: '../assets/icon.png',
				}}
				style={{ width: 400, height: 400 }}
			/>
		</View>
	);
};

export default SettingsScreen;
