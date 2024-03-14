import type { StackScreenProps } from '@react-navigation/stack';

export type ApplicationStackParamList = {
	Startup: undefined;
	Login: undefined;
	Start: undefined;
	FillinPassword: undefined;
	Home: undefined;
	Transfer: undefined;
	FillinBankName: undefined;
	FillinBankAccount: undefined;
};

export type ApplicationScreenProps =
	StackScreenProps<ApplicationStackParamList>;
