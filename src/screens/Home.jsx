import { Button, ScrollView, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
	const handlePress = () => {
		navigation.navigate('Profile', { name: 'John' }); // Passing params to profile screen
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={{ margin: 10, fontSize: 25 }}>This is Home Screen </Text>
			<Button title='Go to profile' onPress={handlePress} />
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default Home;
