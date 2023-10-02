import { View, Text, Button } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants/Theme'

const SaveListScreen = ({
    navigation
}) => {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                gap: 20,
                justifyContent: 'center'
            }}
        >
            <Text style={{
                marginBottom: 50,
            }}
            >Save List Screen</Text>
            <Button
                onPress={() => navigation.navigate('ListItem1')}
                title="List Item 1"
                color={COLORS.secondary}
                accessibilityLabel="Go to the List Item 1"
            />
            <Button
                onPress={() => navigation.navigate('ListItem2')}
                title="List Item 2"
                color={COLORS.secondary}
                accessibilityLabel="Go to the List Item 2"
            />
            <Button
                onPress={() => navigation.navigate('ListItem3')}
                title="List Item 3"
                color={COLORS.secondary}
                accessibilityLabel="Go to the List Item 3"
            />
        </View>
    )
}

export default SaveListScreen