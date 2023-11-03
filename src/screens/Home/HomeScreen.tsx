
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
    FlatList,
    Image,
    TouchableOpacity,
} from 'react-native';

import { HomeStackParamList } from '../../navigation/navigation';
import { LayoutAnimatedView, Screen, Typography } from '../../components/defaultUI';
import { useTypedSelector, } from '../../hooks';
import { ArtNavigationParamsType } from '../../types/artApiTypes';
import { useThunk } from '../../hooks';



type HomeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'HomeScreen'>;

export const HomeScreen: React.FC = (): JSX.Element => {
    const navigation = useNavigation<HomeScreenNavigationProp>()

    const {
        getArtProducts
    } = useThunk()

    const { arts } = useTypedSelector(state => state.arts)

    useEffect(() => {
        getArtProducts({ limit: 10 })
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

    return (
        <Screen >



            <FlatList
                data={arts}
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
                                style={{ marginTop: 20, }}
                            // sharedTransitionTag={`image-${item.id}`}
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


