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
  FabricCreationInput} from "@azure/arm-recoveryservices-siterecovery";
import {
  SiteRecoveryManagementClient,
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
 *
 * @summary The operation to create an Azure Site Recovery fabric (for e.g. Hyper-V site).
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationFabrics_Create.json
 */
async function createsAnAzureSiteRecoveryFabric() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] ||
    "resourceGroupPS1";
  const fabricName = "cloud1";
  const input: FabricCreationInput = {
    properties: {
      customDetails: { instanceType: "VMwareV2" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationFabrics.beginCreateAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    input,
  );
  console.log(result);
}

async function main() {
  await createsAnAzureSiteRecoveryFabric();
}

main().catch(console.error);
