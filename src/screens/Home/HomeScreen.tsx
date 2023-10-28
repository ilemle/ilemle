
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    Appearance,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ViewProps,
} from 'react-native';
import Animated, {
    FadeInUp,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withDecay,
    withDelay,
    withSpring,
    withTiming
} from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg'

import { HomeStackParamList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { useActions, useAppTheme, useTypedSelector } from '../../hooks';
import { AppThemeEnum } from '../../types/app/app';
import { CustomSwitch } from '../../components/defaultUI/CustomSwitch';
import { Typography } from '../../components/defaultUI/Typography';


type SectionProps = PropsWithChildren<{
    title: string;
}>;

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC = (): JSX.Element => {
    const navigation = useNavigation<HomeScreenProp>()
    const { theme } = useAppTheme()

    const { appThemeUsedSystemTheme } = useTypedSelector(state => state.app)
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
                animationEntering={FadeInUp.delay(100).duration(1000).springify()}
            />
            <CustomSwitch
                description={' Светлая тема'}
                disabled={appThemeUsedSystemTheme}
                isEnabled={theme === AppThemeEnum.light}
                onValueChange={setLightTheme}
                containerStyle={styles.themeSwitcher}
                animationEntering={FadeInUp.delay(200).duration(1000).springify()}
            />
            <CustomSwitch
                description={'Темная тема'}
                disabled={appThemeUsedSystemTheme}
                isEnabled={theme === AppThemeEnum.dark}
                onValueChange={setDarkTheme}
                containerStyle={styles.themeSwitcher}
                animationEntering={FadeInUp.delay(300).duration(1000).springify()}
            />

          
        </Screen>
    );
}

const styles = StyleSheet.create({

    themeSwitcher: {
        paddingHorizontal: 20,
        paddingVertical: 10,
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


