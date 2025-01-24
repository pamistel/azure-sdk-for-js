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
  CreateNetworkMappingInput} from "@azure/arm-recoveryservices-siterecovery";
import {
  SiteRecoveryManagementClient,
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create an ASR network mapping.
 *
 * @summary The operation to create an ASR network mapping.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationNetworkMappings_Create.json
 */
async function createsNetworkMapping() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "9112a37f-0f3e-46ec-9c00-060c6edca071";
  const resourceName = "srce2avaultbvtaC27";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] ||
    "srcBvte2a14C27";
  const fabricName =
    "b0cef6e9a4437b81803d0b55ada4f700ab66caae59c35d62723a1589c0cd13ac";
  const networkName = "e2267b5c-2650-49bd-ab3f-d66aae694c06";
  const networkMappingName = "corpe2amap";
  const input: CreateNetworkMappingInput = {
    properties: {
      fabricSpecificDetails: { instanceType: "VmmToAzure" },
      recoveryFabricName: "Microsoft Azure",
      recoveryNetworkId:
        "/subscriptions/c183865e-6077-46f2-a3b1-deb0f4f4650a/resourceGroups/siterecoveryProd1/providers/Microsoft.Network/virtualNetworks/vnetavrai",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationNetworkMappings.beginCreateAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    networkName,
    networkMappingName,
    input,
  );
  console.log(result);
}

async function main() {
  await createsNetworkMapping();
}

main().catch(console.error);
