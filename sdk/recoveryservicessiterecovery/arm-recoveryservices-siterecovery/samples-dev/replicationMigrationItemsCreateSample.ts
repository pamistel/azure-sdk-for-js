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
  EnableMigrationInput} from "@azure/arm-recoveryservices-siterecovery";
import {
  SiteRecoveryManagementClient,
} from "@azure/arm-recoveryservices-siterecovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to The operation to create an ASR migration item (enable migration).
 *
 * @summary The operation to create an ASR migration item (enable migration).
 * x-ms-original-file: specification/recoveryservicessiterecovery/resource-manager/Microsoft.RecoveryServices/stable/2023-08-01/examples/ReplicationMigrationItems_Create.json
 */
async function enablesMigration() {
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
  const input: EnableMigrationInput = {
    properties: {
      policyId:
        "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1/providers/Microsoft.RecoveryServices/vaults/migrationvault/replicationPolicies/vmwarepolicy1",
      providerSpecificDetails: {
        dataMoverRunAsAccountId:
          "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1/providers/Microsoft.OffAzure/VMwareSites/vmwaresite1/runasaccounts/dataMoverRunAsAccount1",
        disksToInclude: [
          {
            diskId: "disk1",
            isOSDisk: "true",
            logStorageAccountId:
              "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1/providers/Microsoft.Storage/storageAccounts/logStorageAccount1",
            logStorageAccountSasSecretName: "logStorageSas",
          },
        ],
        instanceType: "VMwareCbt",
        snapshotRunAsAccountId:
          "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1/providers/Microsoft.OffAzure/VMwareSites/vmwaresite1/runasaccounts/snapshotRunAsAccount1",
        targetNetworkId:
          "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1/providers/Microsoft.Network/virtualNetworks/virtualNetwork1",
        targetResourceGroupId:
          "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1",
        vmwareMachineId:
          "/Subscriptions/cb53d0c3-bd59-4721-89bc-06916a9147ef/resourceGroups/resourcegroup1/providers/Microsoft.OffAzure/VMwareSites/vmwaresite1/machines/virtualmachine1",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new SiteRecoveryManagementClient(credential, subscriptionId);
  const result = await client.replicationMigrationItems.beginCreateAndWait(
    resourceName,
    resourceGroupName,
    fabricName,
    protectionContainerName,
    migrationItemName,
    input,
  );
  console.log(result);
}

async function main() {
  await enablesMigration();
}

main().catch(console.error);
