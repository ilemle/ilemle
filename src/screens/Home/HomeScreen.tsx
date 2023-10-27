
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

import { HomeStackParamList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { useActions, useAppTheme, useTypedSelector } from '../../hooks';
import { AppThemeEnum } from '../../types/app/app';
import { CustomSwitch } from '../../components/defaultUI/CustomSwitch';
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withDelay, withSpring } from 'react-native-reanimated';

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

    const translateX = useSharedValue(100)
    const handlePress = () => {
        // translateX.value = withSpring(translateX.value + 50, { duration: 5000, velocity: 1000 });
        translateX.value += 50;
    };

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [{ translateX: withSpring(translateX.value ) }],
    }));

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
                isEnabled={theme === AppThemeEnum.light}
                onValueChange={setLightTheme}
                containerStyle={styles.themeSwitcher}
            />
            <CustomSwitch
                description={'Темная тема'}
                disabled={appThemeUsedSystemTheme}
                isEnabled={theme === AppThemeEnum.dark}
                onValueChange={setDarkTheme}
                containerStyle={styles.themeSwitcher}
            />

            <TouchableOpacity onPress={handlePress} style={{ justifyContent: 'center', alignItems: 'center' }}>

                <Animated.View
                    style={[
                        {
                            width: 100,
                            height: 100,
                            backgroundColor: 'violet',
                        },
                        animatedStyles
                    ]}>

                </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'red', }} onPress={() => { translateX.value = 50 }} />


            {/* <ScrollView > */}
            <View style={{ backgroundColor: 'lime', height: 1000, marginHorizontal: 50 }} />
            {/* </ScrollView> */}


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


