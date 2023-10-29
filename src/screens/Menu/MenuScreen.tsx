
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    StyleSheet, View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { MenuStackList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { useAppTheme } from '../../hooks';
import { LayoutAnimatedView } from '../../components/defaultUI/LayoutAnimatedView';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography } from '../../components/defaultUI/Typography';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

type menuScreenProp = StackNavigationProp<MenuStackList, 'MenuScreen'>;

export const MenuScreen: React.FC = (): JSX.Element => {

    const navigation = useNavigation<menuScreenProp>()

    const { colors } = useAppTheme()

    const [isVisible, setIsVisible] = useState(false)


    return (
        <Screen>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop:50 }}>
                <TouchableOpacity style={{ height: 50, width: 50, backgroundColor: 'magenta' }} onPress={() => { setIsVisible(!isVisible) }}>
                    <Typography>Press me</Typography>
                </TouchableOpacity>
            </View>
            {
                isVisible &&
                <LayoutAnimatedView
                    style={{
                        backgroundColor: colors.accent,
                        height: 100,
                        width: 100,
                        borderRadius: 100,
                        margin: 50,
                    }}
                />
            }
        </Screen>
    );
}

const styles = StyleSheet.create({

});


