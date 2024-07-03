import {
  Box,
  Skeleton,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

const BDLTableSkeleton = (props: Props) => {
  const columns = 11;
  const rows = 5;
  return (
    <Box overflowX="auto">
      <Skeleton height="40px" w={"200px"} />
      <Table variant="simple">
        <Thead>
          <Tr>
            {Array.from({ length: columns }).map((_, index) => (
              <Th key={index}>
                <Skeleton height="20px" />
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <Tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <Td key={colIndex}>
                  <Skeleton height="20px" />
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default BDLTableSkeleton;
