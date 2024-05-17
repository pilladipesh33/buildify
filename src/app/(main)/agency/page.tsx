import { getAuthUserDetails, verifyAndAcceptInvitation } from "@/lib/queries";
import { Plan } from "@prisma/client";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: { plan: Plan; state: string; code: string };
}) => {
  const agencyId = await verifyAndAcceptInvitation();
  console.log(agencyId);

  //get user details
  const user = await getAuthUserDetails();

  return <div>Agency Dashboard</div>;
};

export default Page;
