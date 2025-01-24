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
  UnlockDeleteRequest} from "@azure/arm-recoveryservicesbackup";
import {
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Secures delete ResourceGuardProxy operations.
 *
 * @summary Secures delete ResourceGuardProxy operations.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/ResourceGuardProxyCRUD/UnlockDeleteResourceGuardProxy.json
 */
async function unlockDeleteResourceGuardProxy() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "0b352192-dcac-4cc7-992e-a96190ccc68c";
  const vaultName = "sampleVault";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] ||
    "SampleResourceGroup";
  const resourceGuardProxyName = "swaggerExample";
  const parameters: UnlockDeleteRequest = {
    resourceGuardOperationRequests: [
      "/subscriptions/c999d45b-944f-418c-a0d8-c3fcfd1802c8/resourceGroups/vaultguardRGNew/providers/Microsoft.DataProtection/resourceGuards/VaultGuardTestNew/deleteProtectedItemRequests/default",
    ],
    resourceToBeDeleted:
      "/subscriptions/62b829ee-7936-40c9-a1c9-47a93f9f3965/resourceGroups/gaallarg/providers/Microsoft.RecoveryServices/vaults/MercuryCrrVault/backupFabrics/Azure/protectionContainers/VMAppContainer;compute;crrtestrg;crrtestvm/protectedItems/SQLDataBase;mssqlserver;testdb",
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.resourceGuardProxy.unlockDelete(
    vaultName,
    resourceGroupName,
    resourceGuardProxyName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await unlockDeleteResourceGuardProxy();
}

main().catch(console.error);
