import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
} from 'react-native';

import BackgroundImage from '@/theme/assets/icons/Background.png';
import LoginIcon from '@/theme/assets/images/logoicon.png';
import { isImageSourcePropType } from '@/types/guards/image';
import { ImageVariant } from '@/components/atoms';
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
	logoText: {
		color: '#fff',
		fontWeight: '900',
		fontSize: 30,
		lineHeight: 36.31,
	},
	logoContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 100,
	},
	imageBackground: {
		width: '100%',
		height: '100%',
		flex: 1,
	},
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
	},
	appButtonContainer: {
		backgroundColor: '#fff',
		width: 323,
		height: 55,
		alignSelf: 'center',
		justifyContent: 'center', // căn giữa theo chiều dọc
		alignItems: 'center', // căn giữa theo chiều ngang
		borderRadius: 30,
		marginTop: 330,
	},
	appButtonText: {
		alignContent: 'center',
		fontSize: 20,
		lineHeight: 24.2,
		color: '#000',
		fontWeight: '400',
		textTransform: 'none',
	},
	content: {
		display: 'flex',
		height: '100%',
	},
});

function Start() {
	const navigation = useNavigation();
	const handleOnNavigate = () => navigation.navigate('Login');
	if (
		!isImageSourcePropType(BackgroundImage) ||
		!isImageSourcePropType(LoginIcon)
	) {
		throw new Error('Image source is not valid');
	}
	return (
		// <SafeScreen>
		<View style={style.container}>
			<ImageBackground
				source={BackgroundImage}
				resizeMode="cover"
				style={style.imageBackground}
			>
				{/* <ImageVariant source={BackgroundImage} style={style.imageBackground} /> */}
				<View style={style.content}>
					<View style={style.logoContainer}>
						<ImageVariant source={LoginIcon} />
						<Text style={style.logoText}>TECHCOMBANK</Text>
					</View>
					<TouchableOpacity
						style={style.appButtonContainer}
						onPress={handleOnNavigate}
					>
						<Text style={style.appButtonText}>Đăng nhập 123</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
		// </SafeScreen>
	);
}

export default Start;
