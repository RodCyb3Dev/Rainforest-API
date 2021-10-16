import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
//import TextTruncate from 'react-text-truncate';
import ProductContext from "../../contexts/productContext";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Button,
  Badge,
  Tag,
  Stack,
  useColorModeValue
} from "@chakra-ui/react";

import {
  ArrowBackIcon,
  EditIcon,
  DeleteIcon,
  ExternalLinkIcon
} from "@chakra-ui/icons";

export default function ProductCard({ product }) {
  const productContext = useContext(ProductContext);
  const { getProducts, productPosts } = productContext;

  useEffect(() => {
    getProducts();
  }, []);

  //let product = productPosts.variants;
  let otherData = productPosts;

  const { asin, title, link, image, rating, price } = product;
  const { raw } = price;
  const { description, categories } = otherData.product;

  //console.log("DATA Product Card:", otherData);

  function truncate(str) {
    return str.length > 10 ? str.substring(0, 245) + "..." : str;
  }

  const BlogTags = (props) => {
    return (
      <HStack spacing={2} marginTop={props.marginTop}>
        {categories.map((tag) => {
          return (
            <Tag
              size={"md"}
              variant="solid"
              colorScheme="orange"
              key={tag.categoryId}
            >
              {tag.name}
            </Tag>
          );
        })}
      </HStack>
    );
  };

  const history = useHistory();

  return (
    <Box
      key={asin}
      marginTop={{ base: "5", sm: "5" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box
        display="flex"
        flex="1"
        marginRight="3"
        position="relative"
        alignItems="center"
      >
        <Box
          width={{ base: "100%", sm: "85%" }}
          zIndex="2"
          marginLeft={{ base: "0", sm: "5%" }}
          marginTop="5%"
        >
          <Link
            href={`/post/`}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            <>
              {image === null ? (
                <Image
                  borderRadius="lg"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt={title}
                  objectFit="contain"
                />
              ) : (
                <Image
                  borderRadius="lg"
                  src={image}
                  alt={title}
                  objectFit="contain"
                />
              )}
            </>
          </Link>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(orange.600 1px, transparent 1px)",
              "radial(orange.300 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
        marginBottom="10"
      >
        <BlogTags tags={["Engineering", "Product"]} />

        <Heading size="md" my="2" as="h4">
          <Link
            href={`/post/`}
            textAlign={"left"}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            {title}
          </Link>
        </Heading>
        <Text
          marginTop="2"
          marginBottom="5"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
          textAlign={"left"}
        >
          {truncate(description)}

          <Text fontSize="md" fontWeight="normal" marginTop="2">
            Product Rating:
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              {rating}
            </Badge>
          </Text>

          <Box color="teal.400" fontWeight="bold" marginTop="2">
            Price: {raw}
          </Box>
        </Text>

        <Stack direction="row" spacing={4} marginTop="5" alignItems="center">
          <Button
            leftIcon={<ArrowBackIcon />}
            variant="contained"
            color="primary"
            onClick={() => history.push("/new")}
          >
            Back
          </Button>
          <Button
            rightIcon={<ExternalLinkIcon mx="2px" />}
            colorScheme="teal"
            variant="solid"
            href={link}
          >
            View
          </Button>
          <Link to={`/edit/$`}>
            <Button
              leftIcon={<EditIcon />}
              colorScheme="yellow"
              variant="solid"
            >
              Edit
            </Button>
          </Link>

          <Button leftIcon={<DeleteIcon />} colorScheme="red" variant="solid">
            Delete
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}

export function truncateText(str) {
  return str.length > 150 ? str.substring(0, 230) + "..." : str;
}
