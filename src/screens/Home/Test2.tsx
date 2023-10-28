
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CameraStackList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { useAppTheme } from '../../hooks';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

type homeScreenProp = StackNavigationProp<CameraStackList, 'Test2'>;

export const Test2 = (): JSX.Element => {
    const navigation = useNavigation<homeScreenProp>()

    const { colors } = useAppTheme()
    return (
        <Screen>
            <View style={{
                backgroundColor: colors.accent,
                height: 100,
                width: 100,
                borderRadius: 100,
                margin:50,
            }} />
        </Screen>
    );
}

const styles = StyleSheet.create({

});


