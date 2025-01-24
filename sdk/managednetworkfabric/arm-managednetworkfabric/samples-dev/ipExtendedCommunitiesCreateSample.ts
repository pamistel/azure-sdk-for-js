/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type {
  IpExtendedCommunity} from "@azure/arm-managednetworkfabric";
import {
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Implements IP Extended Community PUT method.
 *
 * @summary Implements IP Extended Community PUT method.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/IpExtendedCommunities_Create_MaximumSet_Gen.json
 */
async function ipExtendedCommunitiesCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const ipExtendedCommunityName = "example-ipExtendedCommunity";
  const body: IpExtendedCommunity = {
    annotation: "annotation",
    ipExtendedCommunityRules: [
      {
        action: "Permit",
        routeTargets: ["1234:2345"],
        sequenceNumber: 4155123341
      }
    ],
    location: "eastus",
    tags: { keyID: "KeyValue" }
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.ipExtendedCommunities.beginCreateAndWait(
    resourceGroupName,
    ipExtendedCommunityName,
    body
  );
  console.log(result);
}

async function main() {
  await ipExtendedCommunitiesCreateMaximumSetGen();
}

main().catch(console.error);
