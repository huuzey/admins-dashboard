import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "./FlexBetween";
import { useSelector } from "react-redux";

const StatBox = ({ title, value, increase, icon, description }) => {
  const theme = useTheme();
  const { currentColor } = useSelector((state) => state.global);
  return (
    <Box
      gridColumn="span 2"
      gridRow="span 1"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="2px 2px"
      flex="1 1 100%"
      backgroundColor={currentColor}
      borderRadius="2px"
    >
      <FlexBetween>
        <Typography variant="h6" sx={{ color: "#713141" }}>
          {title}
        </Typography>
        {icon}
      </FlexBetween>

      <Typography variant="h3" fontWeight="600" sx={{ color: "#713141" }}>
        {value}
      </Typography>
    </Box>
  );
};

export default StatBox;
