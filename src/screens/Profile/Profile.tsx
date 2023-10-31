import React, { useCallback } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { CustomSwitch, Screen } from "../../components/defaultUI";
import { useActions, useAppTheme, useTypedSelector } from "../../hooks";
import { AppThemeEnum } from "../../types/app";
import { FadeInUp } from "react-native-reanimated";

export const ProfileScreen: React.FC = (): JSX.Element => {

    const { theme } = useAppTheme()

    const {
        appThemeUsedSystemTheme,
        layoutAnimationEnabled
    } = useTypedSelector(state => state.app)
    const {
        changeAppTheme,
        changeAppIsUsedSystemTheme,
        changeLayoutAnimationEnabled
    } = useActions()

    const setIsSystemTheme = useCallback(() => {
        changeAppIsUsedSystemTheme(!appThemeUsedSystemTheme)
    }, [appThemeUsedSystemTheme])

    const setLightTheme = useCallback(() => {
        changeAppTheme(AppThemeEnum.light)
    }, [theme])

    const setDarkTheme = useCallback(() => {
        changeAppTheme(AppThemeEnum.dark)
    }, [theme])

    const setLayoutAnimationEnabled = useCallback(() => {
        changeLayoutAnimationEnabled()
    }, [layoutAnimationEnabled])
    return (
        <Screen>
            <>

                <ScrollView>
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
                    <CustomSwitch
                        description={'Системные анимации включены'}
                        isEnabled={layoutAnimationEnabled}
                        onValueChange={setLayoutAnimationEnabled}
                        containerStyle={styles.themeSwitcher}
                        animationEntering={FadeInUp.delay(400).duration(1000).springify()}
                    />
                </ScrollView>
            </>
        </Screen>
    )
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

