import {Text, Image, TouchableOpacity, View} from "react-native";
import React, {useEffect, useState} from 'react';
import {Link} from "expo-router";
import {icons} from "@/constants/icons";
import AsyncStorage from '@react-native-async-storage/async-storage';


const MovieCard = ({id, poster_path, vote_average, title, release_date}: Movie) => {

    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        const checkIfSaved = async () => {
            const saved = await AsyncStorage.getItem('savedMovies');
            const savedArray = saved ? JSON.parse(saved) : [];
            const found = savedArray.some((m: { id: number; }) => m.id === id);
            setIsSaved(found);
        };

        checkIfSaved();
    }, []);

    const statusSaved = async () => {
        try {
            const saved = await AsyncStorage.getItem('savedMovies');
            let savedArray = saved ? JSON.parse(saved) : [];

            if (isSaved) {
                savedArray = savedArray.filter((m: { id: number; }) => m.id !== id);
                setIsSaved(false);
            } else {
                const movieToSave = { id, poster_path, vote_average, title, release_date };
                savedArray.push(movieToSave);
                setIsSaved(true);
            }
            await AsyncStorage.setItem('savedMovies', JSON.stringify(savedArray));
        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <Link href={`/Movies/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />

                <Text className="text-sm font-bold text-white mt-2 " numberOfLines={1}>{title}</Text>

                <View className="flex-row items-center justify-start gap-x-1">
                    <Image source={icons.star} className="size-4"/>
                    <Text className="text-xs text-white font-bold uppercase"> {Math.round(vote_average / 2)}</Text>
                    <TouchableOpacity onPress={statusSaved}>
                        <Image source={isSaved ? icons.saved : icons.save} className="w-5 h-5 ml-2" />
                    </TouchableOpacity>

                </View>

                <View className="flex-row justify-between items-center">
                    <Text className="text-sx text-light-300 font-medium mt-1">

                        {release_date?.split('-')[0]}
                    </Text>
                    {/*<Text className="text-xs font-medium text-light-300 uppercase">Movie</Text>*/}
                </View>
            </TouchableOpacity>
        </Link>
    );
};

export default MovieCard;
