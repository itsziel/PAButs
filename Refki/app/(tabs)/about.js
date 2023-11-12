import { Center, Heading } from "@gluestack-ui/themed";
import { Header } from "../../components";

const About = () => {
  return (
    <>
      <Header title={"About"} />
      <Center flex={1}>
        <Heading>About</Heading>
      </Center>
    </>
  );
};

export default About;