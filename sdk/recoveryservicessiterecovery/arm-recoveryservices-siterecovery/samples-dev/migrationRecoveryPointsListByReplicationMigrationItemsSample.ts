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
 * This sample demonstrates how to Gets the recovery points for a migration item.
 *
 * @summary Gets the recovery points for a migration item.
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/MigrationRecoveryPoints_ListByReplicationMigrationItems.json
 */
async function getsTheRecoveryPointsForAMigrationItem() {
  const subscriptionId =
    process.env["RECOVERYSERVICESSITERECOVERY_SUBSCRIPTION_ID"] ||
    "cb53d0c3-bd59-4721-89bc-06916a9147ef";
  const resourceName = "migrationvault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESSITERECOVERY_RESOURCE_GROUP"] ||
    "resourcegroup1";
  const fabricName = "vmwarefabric1";
  const protectionContainerName = "vmwareContainer1";
  const migrationItemName = "virtualmachine1";
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.migrationRecoveryPoints.listByReplicationMigrationItems(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    migrationItemName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getsTheRecoveryPointsForAMigrationItem();
}

main().catch(console.error);
