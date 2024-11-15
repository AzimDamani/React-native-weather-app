// src/components/organisms/SearchSection.tsx
import React from 'react';
import { View } from 'react-native';
import SearchBar from '../../molecules/SearchBar';
import CommonButton from '../../atoms/CommonBtn';


type Props = {
    city: string;
    setCity: (city: string) => void;
    onSearch: () => void;
};

const SearchSection = ({ city, setCity, onSearch }: Props) => (
    <View>
        <SearchBar headerText="Enter your City name" value={city} onChangeText={setCity} placeholder="Hyderabad..." />
        <CommonButton title="Search 🔍" onPress={onSearch} />
    </View>
);

export default SearchSection;
