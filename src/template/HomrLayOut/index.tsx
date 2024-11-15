import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../atoms/Headers';

type HomeLayoutProps = {
    children: React.ReactNode; // for dynamic content
};

const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <View style={styles.container}>
           
            <View style={styles.content}>
                {children}
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default HomeLayout;
