
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useCallback, useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Animated, {
    FadeInUp,
} from 'react-native-reanimated';
import axios from 'axios';

import { HomeStackParamList } from '../../navigation/navigation';
import { LayoutAnimatedView, Screen, Typography } from '../../components/defaultUI';
import { useActions, useAppTheme, useTypedSelector } from '../../hooks';
import { AppThemeEnum } from '../../types/app/app';
import { CustomSwitch } from '../../components/defaultUI';
import { ArtNavigationParamsType, IProduct } from '../../types/artApiTypes';



type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC = (): JSX.Element => {
    const navigation = useNavigation<HomeScreenNavigationProp>()
    const { theme } = useAppTheme()


    const [artWorks, setArtWorks] = useState<IProduct[]>([])
    useEffect(() => {
        const getArtworks = async () => {
            try {
                const result = await axios.get('https://api.artic.edu/api/v1/products?limit=10')
                setArtWorks(result.data.data)
            } catch (e) {
                return e
            }
        }
        getArtworks()
    }, [])

    const onPressImageArt = (props: ArtNavigationParamsType) => {
        const {
            id,
            image_url,
            title,
            description,
        } = props

        navigation.navigate('ArtDetailScreen', {
            id,
            image_url,
            title,
            description,
        });
    }
    console.log('artWorks 🍋', artWorks);

    return (
        <Screen >



            <FlatList
                data={artWorks}
                style={{ marginHorizontal: 10 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity
                            onPress={() => onPressImageArt({
                                id: item.id,
                                image_url: item.image_url,
                                title: item.title,
                                description: item.description
                            })}
                        >
                            <LayoutAnimatedView
                                sharedTransitionTag={`image-${item.id}`}
                                style={{ marginTop: 20, }}
                            >
                                <Image

                                    style={{ height: 300, borderRadius: 15 }}
                                    source={{ uri: item.image_url }}
                                />
                                <Typography style={{ marginTop: 5 }}>
                                    {item.title}
                                </Typography>
                            </LayoutAnimatedView>
                        </TouchableOpacity>
                    )
                }}
            />

        </Screen>
    );
}


