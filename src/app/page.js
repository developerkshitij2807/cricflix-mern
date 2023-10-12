"use client";

import { ApolloProvider } from "@apollo/client";



import client from "@/lib/apollo-client";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <ApolloProvider client={client}>
      
      <Header />
    </ApolloProvider>
  );
}
