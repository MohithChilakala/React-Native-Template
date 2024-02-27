import { ScrollView, Text, StyleSheet } from 'react-native';

const Profile = ({ navigation, route }) => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={{ fontSize: 25 }}>This is {route.params.name}'s profile </Text>
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

export default Profile;
