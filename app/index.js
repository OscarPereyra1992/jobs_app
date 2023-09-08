import { useState } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { Stack, useRouter } from "expo-router";

import{ COLORS, SIZES} from '../constants';
import {Nearbyjobs, Popularjobs, Welcome} from '../components';

const Home = () =>{
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <SafeAreaView style={{ flex:1, backgroundColor: COLORS.lightWhite}}>
            <Stack.Screen 
            options={{
                headerShadowVisible: false,
                headerStyle:{backgroundColor: COLORS.lightWhite},
                headerTitle: ""
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{
                flex:1,
                padding: SIZES.medium
            }}>
                <Welcome 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    handleClick ={()=>{
                        if(searchTerm){
                            router.push(`/search/${searchTerm}`)
                        }
                    }}
                />
                <Popularjobs />
                <Nearbyjobs />
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;