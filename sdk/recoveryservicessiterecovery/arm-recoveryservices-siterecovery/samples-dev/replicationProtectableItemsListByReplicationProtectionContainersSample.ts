/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SiteRecoveryManagementClient } from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists the protectable items in a protection container.
 *
 * @summary Lists the protectable items in a protection container.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationProtectableItems_ListByReplicationProtectionContainers.json
 */
async function getsTheListOfProtectableItems() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "c183865e-6077-46f2-a3b1-deb0f4f4650a";
  const resourceName = "vault1";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] ||
    "resourceGroupPS1";
  const fabricName = "cloud1";
  const protectionContainerName = "cloud_6d224fc6-f326-5d35-96de-fbf51efb3179";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.replicationProtectableItems.listByReplicationProtectionContainers(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getsTheListOfProtectableItems();
}

main().catch(console.error);
