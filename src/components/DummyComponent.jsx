import { Text, StyleSheet, View } from 'react-native';

const Profile = () => {
	return (
		<View contentContainerStyle={styles.container}>
			<Text> This is a Dummy Component </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
    // Dummy component container styles
	},
});

export default Profile;
