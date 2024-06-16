import React from "react";
import Header from "./header";
import BackButton from "./back-button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

const ErrorCard = () => {
  return <Card className="w-[400px] shadow-md">
    <CardHeader>
        <Header label="Oops! Something went wrong!"/>
    </CardHeader>
    <CardFooter>
        <BackButton href="/auth/login" label="Back to login"/>
    </CardFooter>
  </Card>;
};

export default ErrorCard;
