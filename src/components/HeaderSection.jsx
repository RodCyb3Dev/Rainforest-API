// style
import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

// Alert Component
const HeaderSection = () => {
  return (
    <Box>
      <Heading mb={4}>
        Hello Rainforest API - The Amazon Product Data API.
      </Heading>
      <Text fontSize="xl">
        Rainforest is the real-time AMZ Product Data API you've been looking
        for. Extract structured JSON from AMZ using our API. Get started for
        free! 100% success rate. JSON or others.
      </Text>
      <Link
        href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj0j6vk6MHzAhVK2LIKHU4-AfgYABAEGgJscg&ae=2&ohost=www.google.com&cid=CAESQOD2ICKpEry0U0hDB780ykBZ5O0yL3g_nTrLo_tgmFEUn_-WVzo3Nw0D_3fSovvqMIkRNTR1CkWoqezhHvb9c50&sig=AOD64_2V3GHAoXGrqJnXS4UPueA3_Nrl4w&q=&ved=2ahUKEwiEmqHk6MHzAhWNk4sKHaUSCfgQqyQoAnoECAMQEw&adurl="
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        <Button
          rightIcon={<ExternalLinkIcon mx="2px" />}
          colorScheme="teal"
          variant="solid"
          my="24px"
        >
          See it for yourself
        </Button>
      </Link>
      <br />
      <Alert status="info">
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>React Hooks to fetch & render data:</AlertTitle>
          <AlertDescription display="block">
            Axios, useContext, useReducer, & useEffect.
          </AlertDescription>
        </Box>
      </Alert>
    </Box>
  );
};
export default HeaderSection;
