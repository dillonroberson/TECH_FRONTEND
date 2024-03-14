import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageBackground,
	ScrollView,
} from 'react-native';

import BackgroundImage from '@/theme/assets/icons/Background.png';
import LoginIconRed from '@/theme/assets/images/logoiconred.png';
import ToolbarIcon from '@/theme/assets/images/Toolbar.png';
import FirstIcon from '@/theme/assets/images/Artboard1.png';
import SecondIcon from '@/theme/assets/images/Artboard2.png';
import ThirdIcon from '@/theme/assets/images/Artboard3.png';
import FourthIcon from '@/theme/assets/images/Artboard4.png';
import FifthIcon from '@/theme/assets/images/Artboard5.png';
import StarIcon from '@/theme/assets/images/Star.png';
import RefreshIcon from '@/theme/assets/images/refresh.png';
import CancelIcon from '@/theme/assets/images/cancelIcon.png';
import { isImageSourcePropType } from '@/types/guards/image';
import { ImageVariant } from '@/components/atoms';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { BottomSheet } from 'react-native-btr';

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
		backgroundColor: '#000',
		width: '100%',
		padding: 6,
		alignSelf: 'center',
		justifyContent: 'center', // căn giữa theo chiều dọc
		alignItems: 'center', // căn giữa theo chiều ngang
		borderRadius: 30,
	},
	appButtonText: {
		alignContent: 'center',
		fontSize: 14,
		lineHeight: 17,
		color: '#fff',
		fontWeight: '700',
	},
	content: {
		width: 'auto',
		backgroundColor: '#fff',
		borderRadius: 20,
		display: 'flex',
		flexDirection: 'column',
		gap: 10,
		justifyContent: 'center',
		margin: 10,
		marginTop: 50,
	},
	toolbarIcon: {
		width: 30,
		height: 30,
		margin: 10,
	},
	headerInfo: {
		backgroundColor: '#fff',
		alignSelf: 'flex-end',
		width: 230,
		height: 50,
		borderTopLeftRadius: 10,
		borderBottomLeftRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		gap: 20,
		justifyContent: 'center',
	},
	iconHeaderInfo: {
		width: 23,
		height: 18,
		alignSelf: 'center',
	},
	headerContent: {
		display: 'flex',
		justifyContent: 'center',
	},
	amount: {
		fontSize: 10,
		width: 60,
		textAlign: 'center',
		color: '#000',
	},
	amountHeader: {
		fontSize: 12,
		fontWeight: '400',
		color: '#000',
	},
	contentAbove: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingTop: 10,
	},
	contentAboveIcon: {
		width: 'auto',
		display: 'flex',
		alignContent: 'center',
		alignItems: 'center',
		gap: 7,
	},
	contentAboveIconStyle: {
		width: 23,
		height: 18,
	},
	refeshIcon: {
		width: 20,
		height: 14,
	},
	contentBelove: {
		display: 'flex',
		gap: 5,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#E8E8E8',
		borderEndEndRadius: 20,
		borderBottomEndRadius: 20,
		borderStartEndRadius: 20,
		borderBottomLeftRadius: 20,
		alignContent: 'center',
		alignItems: 'center',
		padding: 10,
	},
	myFeature: {
		fontWeight: '400',
		fontSize: 10,
		lineHeight: 12.1,
		color: '#000',
	},
	new: {
		color: '#000',
		backgroundColor: 'red',
		width: 40,
		borderRadius: 10,
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		paddingLeft: 3,
		paddingRight: 3,
		fontSize: 10,
	},
	flatListStyle: {},
	scrollView: {
		flexDirection: 'row',
		margin: 10,
	},
	scrollViewItem: {
		position: 'relative',
		width: 300,
		backgroundColor: '#fff',
		borderRadius: 20,
		padding: 10,
		gap: 10,
		marginRight: 20,
	},
	scrollViewItemEnd: {
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		gap: 5,
	},
	scrollViewItemEndRight: {
		position: 'absolute',
		right: 0,
		bottom: 0,
	},
	scrollViewItemEndRightText: {
		fontSize: 30,
		color: '#FFFF00',
		right: 10,
		textShadowColor: '#000',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 9,
	},
	blockChart: {
		alignItems: 'center',
		margin: 10,
		backgroundColor: '#fff',
		borderRadius: 20,
		padding: 10,
		paddingTop: 60,
		gap: 10,
	},
	historyCharge: {
		margin: 10,
		backgroundColor: '#fff',
		borderRadius: 20,
		padding: 10,
		gap: 10,
	},
	discoverText: {
		color: '#000',
		fontWeight: '600',
		fontSize: 20,
		lineHeight: 24,
	},
	historyChargeHeaderText: {
		color: '#000',
		fontWeight: '600',
		fontSize: 20,
		lineHeight: 24,
	},
	ready: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	blackText: {
		color: '#000',
		fontWeight: '700',
	},
	historyChargeHeader: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	blueColor: {
		color: '#003DDA',
		fontWeight: '500',
		lineHeight: 17,
		fontSize: 14,
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
		padding: 10,
		gap: 20,
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
});

function Home() {
	const navigation = useNavigation();
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const handleOnNavigate = () => {
		setIsVisible(false);
		navigation.navigate('Transfer');
	};
	if (
		!isImageSourcePropType(BackgroundImage) ||
		!isImageSourcePropType(LoginIconRed) ||
		!isImageSourcePropType(ToolbarIcon) ||
		!isImageSourcePropType(FirstIcon) ||
		!isImageSourcePropType(SecondIcon) ||
		!isImageSourcePropType(ThirdIcon) ||
		!isImageSourcePropType(FourthIcon) ||
		!isImageSourcePropType(FifthIcon) ||
		!isImageSourcePropType(StarIcon) ||
		!isImageSourcePropType(RefreshIcon) ||
		!isImageSourcePropType(CancelIcon)
	) {
		throw new Error('Image source is not valid');
	}

	return (
		// <SafeScreen>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={style.container}>
				<ImageBackground
					source={BackgroundImage}
					resizeMode="cover"
					style={style.imageBackground}
				>
					<ImageVariant source={ToolbarIcon} style={style.toolbarIcon} />
					<View style={style.headerInfo}>
						<ImageVariant source={LoginIconRed} style={style.iconHeaderInfo} />
						<View style={style.headerContent}>
							<Text>Tài khoản thanh toán</Text>
							<Text style={style.amountHeader}>100,000,000</Text>
						</View>
					</View>
					<View style={style.content}>
						<View style={style.contentAbove}>
							<View style={style.contentAboveIcon}>
								<ImageVariant
									source={FirstIcon}
									style={style.contentAboveIconStyle}
								/>
								<View>
									<Text style={style.amount}>Tài khoản</Text>
									<Text style={style.amount}>& thẻ</Text>
								</View>
							</View>
							<TouchableOpacity onPress={() => setIsVisible(true)}>
								<View style={style.contentAboveIcon}>
									<ImageVariant
										source={SecondIcon}
										style={style.contentAboveIconStyle}
									/>
									<View>
										<Text style={style.amount}>Chuyển tiền</Text>
										<Text style={style.amount}>& thanh toán</Text>
									</View>
								</View>
							</TouchableOpacity>

							<View style={style.contentAboveIcon}>
								<ImageVariant
									source={ThirdIcon}
									style={style.contentAboveIconStyle}
								/>
								<View>
									<Text style={style.amount}>Quét mã</Text>
									<Text style={style.amount}>QR</Text>
								</View>
							</View>
							<View style={style.contentAboveIcon}>
								<ImageVariant
									source={FourthIcon}
									style={style.contentAboveIconStyle}
								/>
								<View>
									<Text style={style.amount}>Rút tiền</Text>
									<Text style={style.amount}>không thẻ</Text>
								</View>
							</View>
							<View style={style.contentAboveIcon}>
								<ImageVariant
									source={FifthIcon}
									style={style.contentAboveIconStyle}
								/>
								<View>
									<Text style={style.amount}>Khám phá</Text>
									<Text style={style.amount}>sản phẩm</Text>
								</View>
							</View>
						</View>
						<View style={style.contentBelove}>
							<ImageVariant
								source={StarIcon}
								style={style.contentAboveIconStyle}
							/>
							<Text style={style.myFeature}>Tính năng của tôi</Text>
							<Text style={style.new}>Mới</Text>
						</View>
					</View>
					<View style={style.scrollView}>
						<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View style={style.scrollViewItem}>
								<View>
									<Text style={style.blackText}>
										+0,5%/năm khi mở tiết kiệm lần
									</Text>
									<Text style={style.blackText}>
										đầu, lãi suât lên đến 5.0%/năm
									</Text>
								</View>
								<View style={style.scrollViewItemEnd}>
									<Text>Tiết kiệm ngay</Text>
									<ImageVariant
										source={StarIcon}
										style={style.contentAboveIconStyle}
									/>
								</View>
								<View style={style.scrollViewItemEndRight}>
									<Text style={style.scrollViewItemEndRightText}>+0.5%</Text>
								</View>
							</View>
							<View style={style.scrollViewItem}>
								<View>
									<Text style={style.blackText}>
										+0,5%/năm khi mở tiết kiệm lần
									</Text>
									<Text style={style.blackText}>
										đầu, lãi suât lên đến 5.0%/năm
									</Text>
								</View>
								<View style={style.scrollViewItemEnd}>
									<Text>Tiết kiệm ngay</Text>
									<ImageVariant
										source={StarIcon}
										style={style.contentAboveIconStyle}
									/>
								</View>
								<View style={style.scrollViewItemEndRight}>
									<Text style={style.scrollViewItemEndRightText}>+0.5%</Text>
								</View>
							</View>
						</ScrollView>
					</View>
					<View style={style.blockChart}>
						<View>
							<Text style={style.discoverText}>
								Khám phá bí kíp quản lý chi tiêu
							</Text>
						</View>
						<View style={style.ready}>
							<Text style={style.blackText}>
								Bạn đã sẵn sàng quản lí chi tiêu hiệu quả hơn với
							</Text>
							<Text style={style.blackText}>
								Biểu đồ thu chi của riêng mình?
							</Text>
						</View>

						<TouchableOpacity style={style.appButtonContainer}>
							<Text style={style.appButtonText}>Thiết lập biểu đồ</Text>
						</TouchableOpacity>
					</View>
					<View style={style.historyCharge}>
						<View style={style.historyChargeHeader}>
							<Text style={style.historyChargeHeaderText}>
								Hoạt động gần đây
							</Text>
							<ImageVariant source={RefreshIcon} />
						</View>
						<Text style={style.blueColor}>Xem biến động số dư</Text>
						<Text>Hôm nay</Text>
						<View style={style.ready}>
							<Text style={style.blackText}>
								Bạn đã sẵn sàng quản lí chi tiêu hiệu quả hơn với
							</Text>
							<Text style={style.blackText}>
								Biểu đồ thu chi của riêng mình?
							</Text>
						</View>

						<TouchableOpacity style={style.appButtonContainer}>
							<Text style={style.appButtonText}>Thiết lập biểu đồ</Text>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
			<BottomSheet visible={isVisible}>
				<View style={style.bottomSheetContainer}>
					<TouchableOpacity
						onPress={() => setIsVisible(false)}
						style={style.cancelButton}
					>
						<ImageVariant source={CancelIcon} />
					</TouchableOpacity>
					<View style={style.bottomSheetContentContainer}>
						<View style={style.titleBottomSheet}>
							<ImageVariant source={LoginIconRed} />
							<Text style={style.whiteText}>
								Miễn phí giao dịch, tự động chuyển nhanh 24/7
							</Text>
						</View>

						<View style={style.bottomSheetContent}>
							<Text>CHUYỂN TIỀN</Text>
							<TouchableOpacity onPress={handleOnNavigate}>
								<View style={style.chargeTypeBlock}>
									<Text style={style.blackText}>Tới người khác</Text>
									<Text>
										Chuyển hàng Napas 24/7, trong TCB, liên ngân hàng và chuyển
										tiền chứng khoán
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity onPress={handleOnNavigate}>
								<View style={style.chargeTypeBlock}>
									<Text style={style.blackText}>
										Giữa các tài khoản TCB của bạn
									</Text>
								</View>
							</TouchableOpacity>

							<Text>THANH TOÁN</Text>
							<TouchableOpacity>
								<View style={style.chargeTypeBlock}>
									<Text style={style.blackText}>Hóa đơn và nạp đơn</Text>
									<Text>
										Nạp tiền điện thoại, thanh toán hóa đơn điện, nước và nhiều
										dịch vụ khác
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</BottomSheet>
		</ScrollView>
		// </SafeScreen>
	);
}

export default Home;
