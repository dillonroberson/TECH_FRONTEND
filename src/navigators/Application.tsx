import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import {
	Login,
	Startup,
	Start,
	FillinPassword,
	Home,
	Transfer,
	FillinBankName,
	FillinBankAccount,
} from '@/screens';
import { useTheme } from '@/theme';

import type { ApplicationStackParamList } from '@/types/navigation';

const Stack = createStackNavigator<ApplicationStackParamList>();

function ApplicationNavigator() {
	const { variant, navigationTheme } = useTheme();

	return (
		<NavigationContainer theme={navigationTheme}>
			<Stack.Navigator key={variant} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Startup" component={Startup} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Start" component={Start} />
				<Stack.Screen name="FillinPassword" component={FillinPassword} />
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Transfer" component={Transfer} />
				<Stack.Screen name="FillinBankName" component={FillinBankName} />
				<Stack.Screen name="FillinBankAccount" component={FillinBankAccount} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default ApplicationNavigator;
