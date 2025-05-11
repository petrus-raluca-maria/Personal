import {ActivityIndicator, FlatList, Image, Text, View} from "react-native";
import React, {useEffect, useState} from 'react';
// import {images} from "@/constants/images";
// import {images} from "../../constants/images" // relative path
import {images} from "@/constants/images";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/Services/useFetch";
import {fetchMovies} from "@/Services/api";
import {icons} from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import {updateSearchCount} from "@/Services/appwrite";

const Search = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const {
        data: movies,
        loading: moviesLoading,
        error: moviesError,
        refetch: loadMovies,
        reset,
    } = useFetch(() => fetchMovies({
        query: searchQuery
        // }), false)
    }))

    useEffect(() => {
        // updateSearchCount(searchQuery, movies[0]);
        const timeoutId = setTimeout(async () => {
            if (searchQuery.trim()) {
                await loadMovies();

            } else {
                reset()
            }
        }, 500)

        return () => clearTimeout(timeoutId)
    }, [searchQuery]);

    useEffect(() => {
        // chaining operator
        // debounce
        if (movies?.length > 0 && movies?.[0]) {
            updateSearchCount(searchQuery, movies[0]);
        }
    }, [movies])

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="flex-1 absolute w-full z-0" resizeMode="cover"/>

            <FlatList
                data={movies}
                renderItem={({item}) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                className="px-5"
                numColumns={3}
                columnWrapperStyle={{
                    justifyContent: 'center',
                    gap: 20,
                    marginVertical: 16
                }}

                contentContainerStyle={{paddingBottom: 100}}

                ListHeaderComponent={
                    <View>
                        <View className="w-full flex-row justify-center items-center mt-20">
                            <Image source={icons.logo} className="w-12 h-10"/>
                        </View>

                        <View className="my-5">
                            <SearchBar
                                placeholder="Search movies ..."
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>
                        {/*conditional rending*/}
                        {moviesLoading && (
                            <ActivityIndicator size="large" color="#0000ff" className="my-3"/>
                        )}
                        {moviesError && (
                            <Text className="text-red-500 px-5 my-3">
                                Error: {moviesError.message || 'Error: Something bad happened'}
                            </Text>
                        )}

                        {!moviesLoading && !moviesError && searchQuery.trim() && (
                            <Text className="text-xl text-white text-bold">
                                Search results for {''}
                                <Text className="text-accent">
                                    {searchQuery}
                                </Text>
                            </Text>
                        )}
                    </View>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError ? (
                        <View className="mt-10 px-5">
                            <Text className="text-center text-gray-500">
                                {searchQuery.trim() ? 'No movies found' : 'Search for a movie'}
                            </Text>
                        </View>
                    ) : null
                }
            />
        </View>
    );
}
export default Search