
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    Appearance,
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import { HomeStackParamList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { useActions, useAppTheme } from '../../hooks';
import { AppThemeEnum } from '../../types/app/app';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC = (): JSX.Element => {
    const navigation = useNavigation<HomeScreenProp>()
    const { colors } = useAppTheme()
    const { changeAppTheme, changeAppIsUsedSystemTheme } = useActions()
    console.log('colors', colors);

    return (
        <Screen >
            <>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: colors.notification,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => navigation.navigate('Test2')}
                >
                    <Text>
                        ПЕРЕЙТИ на TEST 2
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: colors.notification,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                    onPress={() => changeAppTheme(AppThemeEnum.light)}
                >
                    <Text>
                        Change theme to LIGHT
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: colors.notification,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                    onPress={() => changeAppTheme(AppThemeEnum.dark)}
                >
                    <Text>
                        Change theme to DARK
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: colors.notification,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                    onPress={() => changeAppIsUsedSystemTheme(true)}
                >
                    <Text>
                        🟢 USE  SYSTEM THEME
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: colors.notification,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10,
                    }}
                    onPress={() => changeAppIsUsedSystemTheme(false)}
                >
                    <Text>
                        🔴 NOT USE  SYSTEM THEME
                    </Text>
                </TouchableOpacity>

            </>
        </Screen>
    );
}

const styles = StyleSheet.create({
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


