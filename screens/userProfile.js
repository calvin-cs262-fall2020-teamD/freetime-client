 /*
 This file includes the implementation for the user's profile, which displays their name,
 username, and allows them to select interests
 Last updated: 10/29/2020

 Current Issues:
 - Touchable Opacity messes up formatting
 - Name, username, initials are placeholders
 - If top list is too full, bottom list is pushed down
 - General UI polishing needed
 - Interests reset when you leave the page
  */

 import React, {useState} from "react";
 import { FlatList, StyleSheet, TouchableOpacity, Text, View } from "react-native";
 import { globalStyles } from "../styles/global";
 import Card from "../components/card";

 export default function Profile() {
     const name = "John Doe"
     const username = "JohnnyD123"
     const userInitials = "JD"
     const [userSelectedInterests, setUserInterests] = useState([]);
     const [interests, setInterests] = useState([
         { title: "Climbing", key: 1 },
         { title: "Art", key: 2 },
         { title: "Studying", key: 3 },
         { title: "Chapel", key: 4 },
         { title: "Running", key: 5 },
         { title: "Gaming", key: 6 },
         { title: "Sports", key: 7 },
         { title: "Shopping", key: 8 }
     ]);

     const pressHandlerAdd = (key, title) => {
         // remove interest from potential interest list
         setInterests((prevInterests) => {
             return prevInterests.filter(interest => interest.key != key);
         });
         // add interest to user interests list
         setUserInterests((prevUserInterests) => {
             return [
                 {title: title, key: key},
                 ...prevUserInterests
             ]
         })
     }

     const pressHandlerRemove = (key, title) => {
         // make updated user interests list, remove key that was passed in
         setUserInterests((prevUserInterests) => {
             return prevUserInterests.filter(interest => interest.key != key);
         });
         // add the interest back to potential list of interests
         setInterests((prevInterests) => {
             return [
                 {title: title, key: key},
                 ...prevInterests
             ]
         })
     }

     return (
         <View style={globalStyles.container}>
            <View style={styles.userInitialsCircle}>
                <Text style={styles.initials}>{userInitials}</Text>
            </View>
             <Text style={styles.nameTitle}>{name}</Text>
             <Text style={globalStyles.titleText}>My Interests:</Text>
             <View>
                 <FlatList
                     key={'_'}  // essential for multiple columns in a FlatList, not sure why
                     data={userSelectedInterests}
                     numColumns={2}
                     scrollEnabled={true}
                     renderItem={({ item }) => (
                         <TouchableOpacity onPress={() => pressHandlerRemove(item.key, item.title)}>
                             <Text style={styles.interestCard}>{ item.title }</Text>
                         </TouchableOpacity>
                     )}/>
             </View>
             <Text style={globalStyles.titleText}>Choose Interests:</Text>
             <FlatList
                 key={'__'}
                 data={interests}
                 numColumns={2}
                 scrollEnabled={true}
                 renderItem={({ item }) => (
                     <TouchableOpacity onPress={() => pressHandlerAdd(item.key, item.title)}>
                         <Text style={styles.interestCard}>{ item.title }</Text>
                     </TouchableOpacity>
                 )}/>
         </View>
     )};


const styles = StyleSheet.create({
    userInitialsCircle: {
        width: 125,
        height: 125,
        borderRadius: 125/2,
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: 'lightgray',
        top: 20
    },
    initials: {
        padding: 20,
        fontSize: 65,
        alignSelf: 'center'
    },
    nameTitle: {
        padding: 15,
        top: 12,
        alignSelf: 'center',
        fontSize: 30
    },
    interestCard: {
        alignSelf: 'center',
        width: '100%',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        marginVertical: 3,
        marginHorizontal: 5,
        textAlign: 'center',
        backgroundColor: 'springgreen'
    }
});


