import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import CancelIconBlack from '@/theme/assets/images/cancelBlack.png';
import SearchIcon from '@/theme/assets/images/lookup.png';
import { isImageSourcePropType } from '@/types/guards/image';
import { ImageVariant } from '@/components/atoms';
import { useNavigation } from '@react-navigation/native';

const style = StyleSheet.create({
	logoContainer: {
		display: 'flex',
		marginTop: 100,
		width: '60%',
		gap: 20,
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
	whichBank: { color: '#D9D9D9' },
});

function FillinBankName() {
	const navigation = useNavigation();
	const handleNavigate = () => navigation.navigate('FillinBankAccount');
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
				<TouchableOpacity onPress={handleNavigate}>
					<Text style={style.logoText}>
						Bạn muốn chuyển khoản tới
						<Text style={style.whichBank}>
							{' '}
							ngân hàng nào?
							<ImageVariant source={SearchIcon} />
						</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</View>
		// </SafeScreen>
	);
}

export default FillinBankName;
