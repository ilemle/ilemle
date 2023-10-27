
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

import { CameraStackList } from '../../navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../components/defaultUI';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

type homeScreenProp = StackNavigationProp<CameraStackList, 'Test2'>;

export const Test2 = (): JSX.Element => {
    const navigation = useNavigation<homeScreenProp>()

    return (
        <Screen>
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
        </Screen>
    );
}

const styles = StyleSheet.create({

});


