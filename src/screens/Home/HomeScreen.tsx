
import { useNavigation } from '@react-navigation/native';
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
import { Screen } from '../../components/defaultUI';

type SectionProps = PropsWithChildren<{
    title: string;
}>;


type homeScreenProp = StackNavigationProp<HomeStackParamList, 'Test'>;

export const HomeScreen: React.FC = (): JSX.Element => {
    const isDarkMode = useColorScheme() === 'dark';
    const navigation = useNavigation<homeScreenProp>()

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <Screen >
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 50,
                            backgroundColor: 'magenta',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => navigation.navigate('Test2')}
                    >
                        <Text>
                            ПЕРЕЙТИ на TEST 2
                        </Text>
                    </TouchableOpacity>
                </View>
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


