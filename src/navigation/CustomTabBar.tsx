import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Typography } from "../components/defaultUI/Typography";
import { useAppTheme } from "../hooks";

export const CustomTabBar: React.FC = (props): JSX.Element => {

    const {
        state,
        descriptors,
        navigation
    } = props

    const { colors } = useAppTheme()

    return (
        <View style={{
            flexDirection: 'row',
            height: 60,
            // borderTopLeftRadius: 25,
            backgroundColor: colors.tabBar.background
        }}
        >
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

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
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            backgroundColor: colors.tabBar.background,
                            padding: 20,
                            borderRadius: 15,
                            marginHorizontal: 10,
                        }}
                    >


                        <Typography style={{ color: isFocused ? colors.tabBar.selectedText : colors.tabBar.disabledText }}>
                            {label}
                        </Typography>

                    </TouchableOpacity>
                );
            })}
        </View>
    );
}