import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native";

const SearchInput = (value, placeholder, handleChangeText, title) => {
  return (
    <View
      className=" border-2 border-black-200 w-full h-16 px-4
     bg-black-100 rounded-2xl focus:border-secondary
      items-center flex-row space-x-4"
    >
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity></TouchableOpacity>
    </View>
  );
};

export default SearchInput;
