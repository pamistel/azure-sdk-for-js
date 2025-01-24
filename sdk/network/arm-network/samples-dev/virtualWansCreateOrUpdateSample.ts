/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { VirtualWAN} from "@azure/arm-network";
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.
 *
 * @summary Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/VirtualWANPut.json
 */
async function virtualWanCreate() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualWANName = "wan1";
  const wANParameters: VirtualWAN = {
    typePropertiesType: "Basic",
    disableVpnEncryption: false,
    location: "West US",
    tags: { key1: "value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualWans.beginCreateOrUpdateAndWait(
    resourceGroupName,
    virtualWANName,
    wANParameters,
  );
  console.log(result);
}

async function main() {
  await virtualWanCreate();
}

main().catch(console.error);
