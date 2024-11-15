
import React from 'react';
import { View } from 'react-native';
import Header from '../../atoms/Headers';
import InputBar from '../../atoms/InputBar';

type Props = {
    headerText: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
};

const SearchBar = ({ headerText, value, onChangeText, placeholder }: Props) => (
    <View>
        <Header children={headerText} />
        <InputBar value={value} onChangeText={onChangeText} placeholder={placeholder} />
    </View>
);

export default SearchBar;
