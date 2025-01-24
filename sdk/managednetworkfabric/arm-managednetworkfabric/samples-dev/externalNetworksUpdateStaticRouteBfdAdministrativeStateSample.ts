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
  UpdateAdministrativeState} from "@azure/arm-managednetworkfabric";
import {
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update Static Route BFD for external Network.
 *
 * @summary Update Static Route BFD for external Network.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/stable/2023-06-15/examples/ExternalNetworks_UpdateStaticRouteBfdAdministrativeState_MaximumSet_Gen.json
 */
async function externalNetworksUpdateStaticRouteBfdAdministrativeStateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] ||
    "1234ABCD-0A1B-1234-5678-123456ABCDEF";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "example-rg";
  const l3IsolationDomainName = "example-l3domain";
  const externalNetworkName = "example-externalnetwork";
  const body: UpdateAdministrativeState = {
    resourceIds: [""],
    state: "Enable"
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.externalNetworks.beginUpdateStaticRouteBfdAdministrativeStateAndWait(
    resourceGroupName,
    l3IsolationDomainName,
    externalNetworkName,
    body
  );
  console.log(result);
}

async function main() {
  await externalNetworksUpdateStaticRouteBfdAdministrativeStateMaximumSetGen();
}

main().catch(console.error);
