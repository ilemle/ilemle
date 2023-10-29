
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    FlatList,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    FadeInLeft,
    FadeInRight,
    FadeOutLeft,
    FadeOutRight
} from 'react-native-reanimated';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { useAppTheme } from '../../hooks';
import { MenuStackList } from '../../navigation/navigation';
import { Screen } from '../../components/defaultUI';
import { LayoutAnimatedView } from '../../components/defaultUI';
import { Typography } from '../../components/defaultUI';

type SectionProps = PropsWithChildren<{
    title: string;
}>;

type menuScreenProp = StackNavigationProp<MenuStackList, 'MenuScreen'>;

export const MenuScreen: React.FC = (): JSX.Element => {

    const navigation = useNavigation<menuScreenProp>()

    const { colors } = useAppTheme()

    const [isVisibleList, setIsVisibleList] = useState(true)

    const testData = [
        { name: 'Sasha' },
        { name: 'Leha' },
        { name: 'Liniza' },
        { name: 'Boba' },
        { name: 'Nikita' },
        { name: 'Pavel' },
        { name: 'Yasha' },
        { name: 'Yana' },
        { name: 'Marina' },
        { name: 'Alena' },
        { name: 'Artur' },
        { name: 'Michel' },
        { name: 'Sasha' },
        { name: 'Leha' },
        { name: 'Liniza' },
        { name: 'Boba' },
        { name: 'Nikita' },
        { name: 'Pavel' },
        { name: 'Yasha' },
        { name: 'Yana' },
        { name: 'Marina' },
        { name: 'Alena' },
        { name: 'Artur' },
        { name: 'Michel' },
        { name: 'Sasha' },
        { name: 'Leha' },
        { name: 'Liniza' },
        { name: 'Boba' },
        { name: 'Nikita' },
        { name: 'Pavel' },
        { name: 'Yasha' },
        { name: 'Yana' },
        { name: 'Marina' },
        { name: 'Alena' },
        { name: 'Artur' },
        { name: 'Michel' },
    ]
    
    return (
        <Screen>


            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <TouchableOpacity
                            style={{
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: colors.accent,
                                borderRadius: 10,
                                padding: 10,
                            }}
                            onPress={() => { setIsVisibleList(!isVisibleList) }}
                        >
                            <Typography style={{ color: 'black' }}>Press me</Typography>
                        </TouchableOpacity>
                    )
                }}
                data={isVisibleList ? testData : []}
                renderItem={({ item, index }) => {

                    const isEven = index % 2 === 0

                    const DELAY = 50 * index

                    const _entering = isEven ? FadeInLeft.delay(DELAY).duration(30000).springify() :
                        FadeInRight.delay(DELAY).duration(1000).springify()

                    const _exiting = isEven ? FadeOutLeft.delay(100).duration(1000).springify() :
                        FadeOutRight.delay(100).duration(1000).springify()

                    return (
                        <LayoutAnimatedView
                            entering={_entering}
                            exiting={_exiting}
                            style={{
                                height: 50,
                                backgroundColor: colors.Button.active,
                                marginTop: 10,
                                marginHorizontal: 15,
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20,
                            }}
                        >
                            <Typography style={{ color: 'black' }}>
                                {`${index}:   `}  {item.name}
                            </Typography>
                        </LayoutAnimatedView>
                    )
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

});


