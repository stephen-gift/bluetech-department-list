"use client";

import fetchProducts from "@/api/product/product";
import { BDLMainLayout, BDLTable } from "@/components";
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
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const BDLHomePageContainer = () => {
  const { products, loading, error } = useProductContext();

  if (loading) {
    return <p>Loading...</p>; // Placeholder for loading state
  }

  if (error) {
    return <p>{error}</p>; // Placeholder for error state
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
