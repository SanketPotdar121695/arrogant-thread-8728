/** @format */

import { Box, useToast } from "@chakra-ui/react";

export function ToastExample({msg,status}) {
  const toast = useToast();
  return (
    toast({
      position: "top",
      title: msg,
      width:1000,
      // description: "We've created your account for you.",
      status: status,
      duration: 5000,
      isClosable: true,
    })
  );
}
