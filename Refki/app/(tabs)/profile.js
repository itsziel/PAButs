import React, { useState } from "react";
import { Divider, Box, View, Image, Text, Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Profile = () => {
  const [eventsCount, setEventsCount] = useState(7);
  const [certificatesCount, setCertificatesCount] = useState(6);
  const [aboutMe, setAboutMe] = useState("I'm a passionate individual interested in various fields. I'm a passionate individual interested in various fields. I'm a passionate individual interested in various fields");
  const [interests, setInterests] = useState("Technology, Art, Sports");

  return (
    <>
      <Header title={"Profile"} />
      <Center flex={1} p={4} mt={-1} bg="$red900"> 
        {/* Profile Photo */}
        <Image
          source={{ uri: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" }}
          size={100}
          borderRadius={50}
        />
        {/* User Name */}
        <Heading level={2} mt={10} mb={10} fontWeight="bold" color="$white">
          REFKI JOETA KANADA
        </Heading>
        {/* Events and Certificates */}
        <Box mt={1}  ml={20} flexDirection="row" justifyContent="center">
          <Box alignItems="center" mr={10}>
            <Text color="$white" fontWeight="bold">{eventsCount}</Text>
            <Text color="$white">Events</Text>
          </Box>
          <Divider orientation="vertical" bg="$white" h={40} mr={5} ml={5} />
          <Box alignItems="center" ml={10}>
            <Text color="$white" fontWeight="bold">{certificatesCount}</Text>
            <Text color="$white" >Certificates</Text>
          </Box>
        </Box>
        {/* Icons (Bookmark, Edit Profile, Calendar) */}
        <Box flexDirection="row" mt={30} justifyContent="center">
          <TouchableOpacity onPress={() => router.replace('/Bookmark')} mr={4}>
            <Box alignItems="center">
              <Ionicons name="bookmark" size={30} color="#FFD700" />
              <Text color="$white">Bookmark</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.replace('/editprofile')} mr={4}>
            <Box alignItems="center">
              <Ionicons name="create" size={30} color="#32CD32" />
              <Text ml={50} mr={10} color="$white">Edit Profile</Text>
            </Box>
          </TouchableOpacity>
        </Box>

        {/* About Me */}
        <Box mt={30} textAlign="center">
          <Text fontWeight="bold" color="$white">About Me</Text>
          <Text color="$white">{aboutMe}</Text>
        </Box>
        {/* Interests */}
        <Box mt={30} textAlign="center">
          <Text fontWeight="bold" color="$white">Interests</Text>
          <Text color="$white">{interests}</Text>
        </Box>
      </Center>
    </>
  );
};

export default Profile;