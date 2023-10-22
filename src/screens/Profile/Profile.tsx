import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export const ProfileScreen: React.FC = (): JSX.Element => {
    return (
        <View>

            <Text>
                PROFILE
            </Text>
            <ScrollView>
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="1" />
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="2" />
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="3" />
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="4" />
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="5" />
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="6" />
                <TextInput style={{ height: 100, width: '100%', backgroundColor: 'white', marginTop: 10 }} value="7" />
            </ScrollView>
        </View>
    )
}