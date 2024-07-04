"use client";

import fetchProducts from "@/api/product/product";
import { BDLMainLayout, BDLTable, BDLTableSkeleton } from "@/components";
import { Product } from "@/types/global";
import { useProductContext } from "@/utils/context/ProductContext";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const BDLHomePageContainer = () => {
  const { products, loading: contextLoading, error } = useProductContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate loading for 3 seconds

    return () => clearTimeout(timer); // Clear timeout if the component is unmounted
  }, []);

  if (loading || contextLoading) {
    return (
      <>
        <BDLTableSkeleton />
        {/* Placeholder for loading state */}
      </>
    );
  }

  if (error) {
    return <Text>{error}</Text>; // Placeholder for error state
  }

  return (
    <>
      <Flex flexDir={"column"} gap={10}>
        <Heading>Fragrance Catalog</Heading>
        <BDLTable data={products} />
      </Flex>
    </>
  );
};

export default BDLHomePageContainer;
