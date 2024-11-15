import React from 'react';
import { View, StyleSheet } from 'react-native';

type DetailsLayoutProps = {
    children: React.ReactNode;
};

const DetailsLayout = ({ children }: DetailsLayoutProps) => {
    return (
        <View style={styles.container}>
    
            <View style={styles.content}>{children}</View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        justifyContent:"center"
    },
});

export default DetailsLayout;
