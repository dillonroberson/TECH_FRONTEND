import { ImageVariant } from '@/components/atoms';
import { isImageSourcePropType } from '@/types/guards/image';
import { useNavigation } from '@react-navigation/native';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import BackgroundImage from '@/theme/assets/icons/Background.png';
import LoginIconRed from '@/theme/assets/images/logoiconred.png';
import AddIcon from '@/theme/assets/images/plusIcon.png';
import SearchIcon from '@/theme/assets/images/lookup.png';
import BackIcon from '@/theme/assets/images/backIcon.png';
import FirstIcon from '@/theme/assets/images/Artboard1.png';
import { BottomSheet } from 'react-native-btr';

import { useState } from 'react';
import { Image } from 'react-native-reanimated/lib/typescript/Animated';
import { ScrollView } from 'react-native-gesture-handler';

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
		color: '#000',
		fontWeight: '600',
		fontSize: 20,
		lineHeight: 24.2,
	},
	logoContainer: {
		display: 'flex',
		gap: 20,
	},
	container: {
		width: '100%',
		height: '100%',
		flex: 1,
		padding: 10,
		gap: 70,
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
		gap: 10,
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
	bottomSheetContainer: {
		height: '100%',
		position: 'relative',
	},
	cancelButton: {
		position: 'absolute',
		left: 10,
		top: 0,
	},
	bottomSheetContent: {
		backgroundColor: '#fff',
		width: '100%',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		paddingTop: 10,
		paddingBottom: 20,
		gap: 20,
	},
	hrTag: {
		borderBottomColor: 'black',
		borderBottomWidth: StyleSheet.hairlineWidth,
	},
	chargeTypeBlock: {
		marginLeft: 30,
	},
	bottomSheetContentContainer: {
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	whiteText: {
		color: '#fff',
		fontWeight: '800',
		fontSize: 20,
		lineHeight: 24.2,
	},
	titleBottomSheet: {
		width: '70%',
		marginLeft: 10,
		marginBottom: 10,
		gap: 5,
	},
	blackText: {
		color: '#000',
		fontWeight: '700',
	},
	mediumBlackText: {
		textAlign: 'center',
		color: '#000',
		fontWeight: '700',
		fontSize: 20,
	},
	mediumBlackTextName: {
		color: '#000',
		fontWeight: '700',
		fontSize: 16,
	},
	newReceiver: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	addButton: {
		backgroundColor: '#D9D9D9',
		padding: 10,
		borderRadius: 100,
	},
	bankTransferIcon: {
		backgroundColor: '#D9D9D9',
		padding: 11,
		paddingTop: 13,
		paddingBottom: 13,
		borderRadius: 100,
	},
	searchBlock: {
		width: '100%',
		padding: 5,
		paddingLeft: 10,
		gap: 6,
		borderRadius: 110,
		borderColor: '#C7C7C7',
		borderWidth: 1,
		alignItems: 'center',
		flexDirection: 'row',
	},
	transferItem: {
		width: '80%',
		height: 'auto',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	transferContent: {
		gap: 10,
	},
	iconBankTransfer: {
		width: 20,
		height: 15,
	},
	iconTransfer: {
		width: 13,
		height: 13,
	},
	smallIcon: {
		width: 15,
	},
});
function Transfer() {
	const navigation = useNavigation();
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const handleOnNavigate = () => navigation.navigate('FillinBankName');
	if (
		!isImageSourcePropType(BackgroundImage) ||
		!isImageSourcePropType(LoginIconRed) ||
		!isImageSourcePropType(BackIcon) ||
		!isImageSourcePropType(AddIcon) ||
		!isImageSourcePropType(SearchIcon) ||
		!isImageSourcePropType(FirstIcon)
	) {
		throw new Error('Image source is not valid');
	}
	return (
		<ScrollView>
			<View style={style.container}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<ImageVariant source={BackIcon} />
				</TouchableOpacity>
				<View style={style.logoContainer}>
					<Text style={style.logoText}>Bạn muốn chuyển khoản tới...</Text>
				</View>
				<View style={style.content}>
					<TouchableOpacity onPress={() => setIsVisible(true)}>
						<View style={style.newReceiver}>
							<View style={style.addButton}>
								<ImageVariant source={AddIcon} />
							</View>
							<Text style={style.blackText}>Người nhận mới</Text>
						</View>
					</TouchableOpacity>
					<View style={style.searchBlock}>
						<ImageVariant source={SearchIcon} />
						<Text>Tìm người nhận đã lưu</Text>
					</View>
					<View style={style.transferContent}>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
						<View style={style.transferItem}>
							<View style={style.bankTransferIcon}>
								<ImageVariant
									source={LoginIconRed}
									style={style.iconBankTransfer}
								/>
							</View>
							<View>
								<Text style={style.mediumBlackTextName}>LE NGOC PHAN</Text>
								<Text>
									<ImageVariant source={FirstIcon} style={style.iconTransfer} />
									1000 0000 0000 00, Ngân hàng TMCP Kỹ thương Việt Nam
								</Text>
							</View>
						</View>
					</View>
				</View>
				<BottomSheet
					visible={isVisible}
					onBackdropPress={() => setIsVisible(false)}
				>
					<View style={style.bottomSheetContainer}>
						<View style={style.bottomSheetContentContainer}>
							<View style={style.bottomSheetContent}>
								<Text style={style.mediumBlackText}>Chuyển qua</Text>
								<View style={style.hrTag} />
								<TouchableOpacity onPress={handleOnNavigate}>
									<View style={style.chargeTypeBlock}>
										<Text style={style.blackText}>Số tài khoản</Text>
										<Text>
											Bao gồm chuyển trong TCB, liên ngân hàng và chuyển tiền
											chứng khoán
										</Text>
									</View>
								</TouchableOpacity>
								<View style={style.hrTag} />
								<TouchableOpacity onPress={handleOnNavigate}>
									<View style={style.chargeTypeBlock}>
										<Text style={style.blackText}>Số điện thoại</Text>
										<Text>
											Chuyển tiền trong TCB hoặc tới ngân hàng khác hỗ trợ
											chuyển tiền qua số điện thoại
										</Text>
									</View>
								</TouchableOpacity>
								<View style={style.hrTag} />
								<TouchableOpacity onPress={handleOnNavigate}>
									<View style={style.chargeTypeBlock}>
										<Text style={style.blackText}>Số thẻ</Text>
										<Text>
											Chỉ áp dụng cho số thẻ ngân hàng khác ( ngoài TCB)
										</Text>
									</View>
								</TouchableOpacity>
								<View style={style.hrTag} />
								<TouchableOpacity onPress={handleOnNavigate}>
									<View style={style.chargeTypeBlock}>
										<Text style={style.blackText}>Mã QR</Text>
										<Text>Quét mã QR để chuyển tiền</Text>
									</View>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</BottomSheet>
			</View>
		</ScrollView>
	);
}
export default Transfer;
