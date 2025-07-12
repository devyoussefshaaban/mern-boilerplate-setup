import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface FlexBoxProps {
  children: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  [key: string]: any; // to allow spreading MUI Box props
}

const FlexBox = ({
  children,
  justifyContent = "space-between",
  alignItems = "center",
  ...rest
}: FlexBoxProps) => {
  return (
    <Box
      display="flex"
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
