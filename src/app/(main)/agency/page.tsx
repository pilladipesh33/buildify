import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const Page = async () => {
  // Get the current authenticated user
  const authUser = await currentUser();

  // Check if there is no authenticated user
  // If not, redirect them to the sign-in page
  if (!authUser) return redirect("/sign-in");

  return <div>Agency Dashboard</div>;
};

export default Page;
