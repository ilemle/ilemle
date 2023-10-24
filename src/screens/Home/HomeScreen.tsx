
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Appearance,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ViewProps,
} from 'react-native';

import { HomeStackParamList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { useActions, useAppTheme, useTypedSelector } from '../../hooks';
import { AppThemeEnum } from '../../types/app/app';
import { CustomSwitch } from '../../components/defaultUI/CustomSwitch';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC = (): JSX.Element => {
    const navigation = useNavigation<HomeScreenProp>()
    // const { colors, setTheme } = useAppTheme()
    const { colors } = useAppTheme()

    const { appThemeUsedSystemTheme, appTheme } = useTypedSelector(state => state.app)
    const { changeAppTheme, changeAppIsUsedSystemTheme } = useActions()

    const setIsSystemTheme = () => {
        changeAppIsUsedSystemTheme(!appThemeUsedSystemTheme)
    }

    const setLightTheme = () => {
        changeAppTheme(AppThemeEnum.light)
    }
    const setDarkTheme = () => {
        changeAppTheme(AppThemeEnum.dark)
    }

    return (
        <Screen >

            <CustomSwitch
                description={' Использовать системную тему'}
                isEnabled={appThemeUsedSystemTheme}
                onValueChange={setIsSystemTheme}
                containerStyle={styles.themeSwitcher}
            />
            <CustomSwitch
                description={' Светлая тема'}
                disabled={appThemeUsedSystemTheme}
                isEnabled={appTheme === AppThemeEnum.light}
                onValueChange={setLightTheme}
                containerStyle={styles.themeSwitcher}
            />
            <CustomSwitch
                description={'Темная тема'}
                disabled={appThemeUsedSystemTheme}
                isEnabled={appTheme === AppThemeEnum.dark}
                onValueChange={setDarkTheme}
                containerStyle={styles.themeSwitcher}
            />

        </Screen>
    );
}

const styles = StyleSheet.create({

    themeSwitcher: {
        paddingHorizontal: 20,
        paddingVertical:10,
    },

    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});


