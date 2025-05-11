import {FlatList, Image, Text, View} from "react-native";
import React, {useEffect, useState} from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {icons} from "@/constants/icons";

const Saved = () => {
    const [savedMovies, setSavedMovies] = useState<any[]>([]);

    useEffect(() => {
        const loadSavedMovies = async () => {
            const saved = await AsyncStorage.getItem('savedMovies');
            const savedArray = saved ? JSON.parse(saved) : [];
            setSavedMovies(savedArray);
        };

        loadSavedMovies();
    }, []);

    const renderMovie = ({item}: { item: any }) => (
        <View className="w-[30%] mb-4">
            <Image
                source={{
                    uri: item.poster_path
                        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                }}
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-sm font-bold text-white mt-2" numberOfLines={1}>{item.title}</Text>
            <View className="flex-row items-center justify-start gap-x-1">
                <Image source={icons.star} className="size-4"/>
                <Text className="text-xs text-white font-bold uppercase">{Math.round(item.vote_average / 2)}</Text>
            </View>
        </View>
    );

    return (
        <View className="flex-1 bg-black p-4">
            <Text className="text-white text-xl font-bold mb-4">Saved Movies</Text>
            {savedMovies.length === 0 ? (
                <Text className="text-white text-center">No saved movies</Text>
            ) : (
                <FlatList
                    data={savedMovies}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderMovie}
                    numColumns={3}
                    columnWrapperStyle={{
                        justifyContent: "flex-start",
                        gap: 16,
                        paddingRight: 5,
                        marginBottom: 10,
                    }}
                    contentContainerStyle={{
                        gap: 16,
                    }}
                />
            )}
        </View>
    );
}

export default Saved;
