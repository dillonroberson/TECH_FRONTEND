import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from 'react-native';

import BackgroundImage from '@/theme/assets/icons/Background.png';
import LoginIconRed from '@/theme/assets/images/logoiconred.png';
import BackIcon from '@/theme/assets/images/backIcon.png';
import { isImageSourcePropType } from '@/types/guards/image';
import { ImageVariant } from '@/components/atoms';
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
	forgotUsername: {
		fontWeight: '700',
		lineHeight: 21.78,
		fontSize: 18,
		color: '#467EEB',
		marginLeft: 10,
		marginRight: 10,
		alignSelf: 'flex-end',
	},
	logoText: {
		marginLeft: 10,
		color: '#000',
		fontWeight: '600',
		width: 277,
		fontSize: 28,
		lineHeight: 34,
	},
	logoContainer: {
		display: 'flex',
		marginTop: 100,
		gap: 20,
	},
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		padding: 10,
	},
	appButtonContainer: {
		backgroundColor: '#000',
		width: 323,
		height: 55,
		alignSelf: 'center',
		justifyContent: 'center', // căn giữa theo chiều dọc
		alignItems: 'center', // căn giữa theo chiều ngang
		borderRadius: 30,
		marginTop: 160,
	},
	appButtonText: {
		alignContent: 'center',
		fontSize: 20,
		lineHeight: 24.2,
		color: '#fff',
		fontWeight: '400',
		textTransform: 'none',
	},
	content: {
		display: 'flex',
		height: '100%',
	},
	bottomBorder: {
		fontSize: 20,
		marginLeft: 10,
		marginRight: 10,
		borderBottomColor: '#808080', // if we want only bottom line
		borderBottomWidth: 1, // Add this to specify bottom border thickness &
		// textDecorationLine: 'underline',
		// borderColor:"skyblue",//if we want to show our TextInput field inside the box
		// borderWidth:2 //use this to show width of border boxes
	},
	inputContainer: {
		marginTop: 100,
		display: 'flex',
		gap: 10,
	},
});

function Login() {
	const navigation = useNavigation();
	const handleOnNavigate = () => navigation.navigate('FillinPassword');
	if (
		!isImageSourcePropType(BackgroundImage) ||
		!isImageSourcePropType(LoginIconRed) ||
		!isImageSourcePropType(BackIcon)
	) {
		throw new Error('Image source is not valid');
	}
	return (
		// <SafeScreen>
		<View style={style.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<ImageVariant source={BackIcon} />
			</TouchableOpacity>
			<View style={style.content}>
				<View style={style.logoContainer}>
					<ImageVariant source={LoginIconRed} />
					<Text style={style.logoText}>Vui lòng nhập tên đăng nhập</Text>
				</View>
				<View style={style.inputContainer}>
					<TextInput
						style={style.bottomBorder}
						onChangeText={text => {
							console.warn(text);
						}}
					/>
					<Text style={style.forgotUsername}>Quên tên đăng nhập</Text>
				</View>
				<TouchableOpacity
					style={style.appButtonContainer}
					onPress={handleOnNavigate}
				>
					<Text style={style.appButtonText}>Tiếp tục</Text>
				</TouchableOpacity>
			</View>
		</View>
		// </SafeScreen>
	);
}

export default Login;
