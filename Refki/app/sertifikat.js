import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

const Sertifikat = () => {
  const [pressedEventCardId, setPressedEventCardId] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 15, backgroundColor: pressedEventCardId ? "#ccc" : "#fff", marginTop: 40 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => router.replace("/profile")}>
            <Ionicons name="arrow-back" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{ textTransform: "none", fontSize: 20, marginLeft: 10 }}>Kamar Sertifikat</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginLeft: 10 }}>
            <Ionicons name="menu" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        {/* Konten di tengah-tengah */}
        <View style={{ padding: 15, alignItems: 'center' }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5, marginTop: -10 }}>Ruang Sertifikat</Text>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 15 }}>Wah keren. Kamu sudah berhasil mengumpulkan 0 sertifikat. Tingkatkan terus ya!</Text>
        </View>

        {/* Tombol upload sertifikat */}
        <TouchableOpacity style={{ padding: 15, backgroundColor: "#872341", alignItems: "center", margin: 40 }}>
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 'bold' }}>UPLOAD SERTIFIKAT</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Sertifikat;
