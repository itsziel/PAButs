import { Heading, FlatList, Box, Text, Image } from "@gluestack-ui/themed";
import { Header } from "../../components";
import datas from "../../datas";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Home = () => {
  const renderitem = ({ item }) => {
    return (
      <Link
        href={{
          pathname: "/news-detail",
          params: item,
        }}
        asChild
      >
        <TouchableOpacity activeOpacity={0.5}>
          <Box
            p={"$4"}
            borderBottomColor={"$coolGray300"}
            borderBottomWidth={1}
            flexDirection="row"
            flex={1}
          >
            <Box flex={1} mr={"$4"}>
              <Image
                source={{ uri: item.image }}
                w="$full"
                h="$full"
                alt="Image Data"
                role="img"
              />
            </Box>
            <Box flex={1.8}>
              <Text fontSize={"$sm"}>{item.date}</Text>
              <Heading lineHeight={"$md"} fontSize={"$md"}>
                {item.title}
              </Heading>
            </Box>
          </Box>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <>
      <Header title={"Dashboard"} />
      <Box py={"$8"} 
      bg="$red900"
      borderBottomLeftRadius={40} // Atur radius di ujung kiri bawah
      borderBottomRightRadius={40} // Atur radius di ujung kanan bawah
      flexDirection="row" // Mengatur tata letak menjadi horizontal
      justifyContent="space-between" // Mengatur jarak antara item
      >
                {[
            { label: "Event", route: "/event" },
            { label: "Certificate", route: "/sertifikat" },
            { label: "Beasiswa", route: "/beasiswa" },
          ].map((item, index) => {
            return (
              <Link
                href={{
                  pathname: item.route,
                  params: item,
                }}
                key={index}
                asChild
              >
                <TouchableOpacity activeOpacity={0.5}>
                  <Box w={"35"} mr={"$8"} mb={-30} ml={index === 0 ? "$5" : "0"}>
                    <Box
                      w="$full"
                      h="50px" // Sesuaikan tinggi sesuai kebutuhan Anda
                      bg="$trueGray900" // Ganti warna latar belakang sesuai keinginan Anda
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="$sm"
                      mx="$2"
                    >
                      <Text fontSize={"$sm"} color="$textLight50">
                        {item.label}
                      </Text>
                    </Box>
                  </Box>
                </TouchableOpacity>
              </Link>
            );
          })}
      </Box>
      {/* Teks "Event Tranding" dengan ikon api */}
      <Box flexDirection="row" alignItems="center" mt={20} ml={15} mb={10}>
        <Text fontSize={"$lg"} color="$black" ml={2}>
          Event Trending
        </Text>
        <Ionicons name="flame" size={24} color="$textLight50" />
      </Box>

      <FlatList
        data={datas.slice(0, 8)}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -2 }}
      />

      <Box flexDirection="row" alignItems="center" mt={20} ml={15} mb={10}>
        <Text fontSize={"$lg"} color="$black" ml={2}>
          Beasiswa Populer
        </Text>
        <Ionicons name="flame" size={24} color="$textLight50" />
      </Box>

      <FlatList
        data={datas.slice(9, 17)}
        renderItem={renderitem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: -2 }}
      />
      
    </>
  );
};

export default Home;