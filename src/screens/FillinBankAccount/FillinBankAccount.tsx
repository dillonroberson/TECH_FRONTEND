import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CancelIconBlack from '@/theme/assets/images/cancelBlack.png';
import SearchIcon from '@/theme/assets/images/lookup.png';
import { isImageSourcePropType } from '@/types/guards/image';
import { ImageVariant } from '@/components/atoms';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';

const style = StyleSheet.create({
	logoContainer: {
		display: 'flex',
		marginTop: 100,
		width: '60%',
	},
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		padding: 10,
	},
	logoText: {
		color: '#000',
		fontWeight: '600',
		fontSize: 20,
		lineHeight: 24.2,
	},
	bankName: {
		color: '#249EE3',
	},
	whichAccount: {
		fontWeight: '600',
		paddingHorizontal: 0,
		fontSize: 20,
		paddingVertical: 0,
		color: '#249EE3',
	},
});

function FillinBankAccount() {
	const navigation = useNavigation();
	if (
		!isImageSourcePropType(CancelIconBlack) ||
		!isImageSourcePropType(SearchIcon)
	) {
		throw new Error('Image source is not valid');
	}
	return (
		// <SafeScreen>
		<View style={style.container}>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<ImageVariant source={CancelIconBlack} />
			</TouchableOpacity>
			<View style={style.logoContainer}>
				<Text style={style.logoText}>
					Bạn muốn chuyển khoản tới
					<Text style={style.bankName}> MB</Text>
				</Text>
				<Text style={style.logoText}>tài khoản</Text>
				<TextInput placeholder="số?" style={style.whichAccount} />
			</View>
		</View>
		// </SafeScreen>
	);
}

export default FillinBankAccount;
