import React from "react";
import { View, } from "react-native";
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types'

import { useAppTheme } from "../hooks";
import { CustomTabBarItem } from "./CustomTabBarItem";
import { IconsType } from "../assets/icons";
import Animated, { FadeInDown } from "react-native-reanimated";

const getBottomTab = (stateIndex: number) => {
    if (stateIndex === 0) {
        return 'menu'
    }
    if (stateIndex === 1) {
        return 'home'
    }
    if (stateIndex === 2) {
        return 'user'
    }
    return 'home'
}

export const CustomTabBar: React.FC<BottomTabBarProps> = (props): JSX.Element => {

    const {
        state,
        descriptors,
        navigation,
        insets
    } = props

    const { colors } = useAppTheme()

    return (
        <Animated.View
            entering={FadeInDown.delay(100).duration(1000).springify()}
            style={[
                {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 60,
                    borderRadius: 25,
                    marginHorizontal: 10,
                    paddingHorizontal: 20,
                    // marginBottom: insets.bottom, 
                    backgroundColor: colors.tabBar.background,

                    // если захочется плавающий tabbar, над контентом
                    position: 'absolute',
                    bottom: insets.bottom,
                    right: insets.right,
                    left: insets.left,
                    //
                },
            ]
            }
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];

                const label: string = route.name

                const isFocused = state.index === index;

                const iconName: IconsType = getBottomTab(index)


                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <CustomTabBarItem
                        key={index + label}
                        isFocused={isFocused}
                        options={options}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        label={label}
                        iconName={iconName}
                    />
                );
            })}
        </Animated.View>
    );
}


