import { Box } from "@chakra-ui/react";
import React from "react";
import BDLHeader from "../Header";
import { ProductProvider } from "@/utils/context/ProductContext";

type Props = {
  children: React.ReactNode;
};

const BDLMainLayout = ({ children }: Props) => {
  return (
    <Box>
      <ProductProvider>
        <BDLHeader />
        <Box as="main" padding="10">
          {children}
        </Box>
      </ProductProvider>
    </Box>
  );
};

export default BDLMainLayout;
