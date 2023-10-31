
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';

import { HomeStackParamList } from '../../navigation/navigation';
import { LayoutAnimatedView, Screen, Typography } from '../../components/defaultUI';
import { useActions, useAppTheme, useTypedSelector } from '../../hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Animated, { SlideInLeft } from 'react-native-reanimated';

type ArtDetailScreenNavigationProps = StackNavigationProp<HomeStackParamList, 'ArtDetailScreen'>;

interface ArtDetailScreenProps extends NativeStackScreenProps<HomeStackParamList, 'ArtDetailScreen'> {
    // other props ...
}


export const ArtDetailScreen: React.FC<ArtDetailScreenProps> = ({ route }): JSX.Element => {
    const navigation = useNavigation<ArtDetailScreenNavigationProps>()
    const { theme } = useAppTheme()

    const {
        id,
        image_url,
        title,
        description,
    } = route.params

    const {
        appThemeUsedSystemTheme,
        layoutAnimationEnabled
    } = useTypedSelector(state => state.app)
    const {
        changeAppTheme,
        changeAppIsUsedSystemTheme,
        changeLayoutAnimationEnabled
    } = useActions()


    return (
        <Screen >
            <ScrollView>


                <Animated.View
                    style={{ marginTop: 20, marginHorizontal: 10 }}
                    sharedTransitionTag={`image-${id}`}
                >
                    <Image

                        style={{ height: 300, borderRadius: 15 }}
                        source={{ uri: image_url }}
                    />
                    <Typography style={{ marginTop: 5 }}>
                        {title}
                    </Typography>
                    <LayoutAnimatedView
                        entering={SlideInLeft}
                    >
                        <Typography style={{ marginTop: 10 }}>
                            {
                                `С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения форм развития. С другой стороны консультация с широким активом обеспечивает широкому кругу (специалистов) участие в формировании форм развития. Таким образом рамки и место обучения кадров требуют от нас анализа новых предложений.

                    Не следует, однако забывать, что сложившаяся структура организации позволяет оценить значение модели развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки соответствующий условий активизации. Товарищи! сложившаяся структура организации влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий. Идейные соображения высшего порядка, а также постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в отношении поставленных задач. Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности в значительной степени обуславливает создание позиций, занимаемых участниками в отношении поставленных задач. Повседневная практика показывает, что сложившаяся структура организации обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.

                    Товарищи! дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке существенных финансовых и административных условий. Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании дальнейших направлений развития.

                    Равным образом дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации новых предложений. Задача организации, в особенности же рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий. Задача организации, в особенности же сложившаяся структура организации позволяет выполнять важные задания по разработке новых предложений. Товарищи! постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки направлений прогрессивного развития.`
                            }
                        </Typography>
                    </LayoutAnimatedView>
                </Animated.View>

            </ScrollView>
        </Screen>
    );
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


