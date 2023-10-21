/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { HomeStackParamList } from '../../navigation/navigation';
import { useNavigation } from '@react-navigation/native';

type SectionProps = PropsWithChildren<{
    title: string;
}>;
type homeScreenProp = StackNavigationProp<HomeStackParamList, 'Test2'>;

export const Test2 = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation<homeScreenProp>()

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <Text> IS 2 SCREEN</Text>

            <TouchableOpacity
                style={{
                    height: 50,
                    backgroundColor: 'magenta',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}
            >
                <Text>
                    BACK
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
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


