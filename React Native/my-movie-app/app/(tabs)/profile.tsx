import {Image, Text, TouchableOpacity, View} from "react-native";
import React from 'react';
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {router} from "expo-router";


const Profile = () => {
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0"/>
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>
            <View className="flex-row mb-10">
                <Image source={icons.person} className="w-16 h-16"/>
                <Text className="text-3xl text-light-100 font-bold ml-2 mt-5 mb-5">My profile</Text>
            </View>
            <Text className="text-2xl text-light-100 mt-10"> Account </Text>
            <Text className="text-light-200 text-xl ml-5 mt-2">username</Text>
            <Text className="text-light-200 text-xl ml-5 mt-2">email@mail.com</Text>

            <Text className="text-2xl text-light-100 mt-10"> My movies </Text>
            <TouchableOpacity onPress={() => router.push("/saved")}>
                <Text className="text-light-200 text-xl ml-5 mt-2 ">Saved</Text>
            </TouchableOpacity>

            <Text className="text-2xl text-light-100 mt-10"> Privacy & Settings </Text>
            <Text className="text-light-200 text-xl ml-5 mt-2">Privacy</Text>
            <Text className="text-light-200 text-xl ml-5 mt-2">Settings</Text>
            <Text className="text-light-200 text-xl ml-5 mt-2 mb-10">Security</Text>

            <TouchableOpacity className="mt-20 left-0 right-0 mx-5 bg-accent rounded-lg py-3.5 flex flex-row items-center justify-center z-50">
                <Text className="text-white font-semibold text-base">Logout</Text>
            </TouchableOpacity>
        </View>

    );
}

export default Profile