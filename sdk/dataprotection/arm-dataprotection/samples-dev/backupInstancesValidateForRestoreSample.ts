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
  ValidateRestoreRequestObject} from "@azure/arm-dataprotection";
import {
  DataProtectionClient,
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Validates if Restore can be triggered for a DataSource
 *
 * @summary Validates if Restore can be triggered for a DataSource
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2024-04-01/examples/BackupInstanceOperations/ValidateRestore.json
 */
async function validateRestore(): Promise<void> {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "000pikumar";
  const vaultName = "PratikPrivatePreviewVault1";
  const backupInstanceName = "testInstance1";
  const parameters: ValidateRestoreRequestObject = {
    restoreRequestObject: {
      objectType: "AzureBackupRecoveryPointBasedRestoreRequest",
      recoveryPointId: "hardcodedRP",
      restoreTargetInfo: {
        datasourceAuthCredentials: {
          objectType: "SecretStoreBasedAuthCredentials",
          secretStoreResource: {
            secretStoreType: "AzureKeyVault",
            uri: "https://samplevault.vault.azure.net/secrets/credentials",
          },
        },
        datasourceInfo: {
          datasourceType: "Microsoft.DBforPostgreSQL/servers/databases",
          objectType: "Datasource",
          resourceID:
            "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/targetdb",
          resourceLocation: "",
          resourceName: "targetdb",
          resourceType: "Microsoft.DBforPostgreSQL/servers/databases",
          resourceUri: "",
        },
        datasourceSetInfo: {
          datasourceType: "Microsoft.DBforPostgreSQL/servers/databases",
          objectType: "DatasourceSet",
          resourceID:
            "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest",
          resourceLocation: "",
          resourceName: "viveksipgtest",
          resourceType: "Microsoft.DBforPostgreSQL/servers",
          resourceUri: "",
        },
        objectType: "RestoreTargetInfo",
        recoveryOption: "FailIfExists",
        restoreLocation: "southeastasia",
      },
      sourceDataStoreType: "VaultStore",
      sourceResourceId:
        "/subscriptions/f75d8d8b-6735-4697-82e1-1a7a3ff0d5d4/resourceGroups/viveksipgtest/providers/Microsoft.DBforPostgreSQL/servers/viveksipgtest/databases/testdb",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupInstances.beginValidateForRestoreAndWait(
    resourceGroupName,
    vaultName,
    backupInstanceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await validateRestore();
}

main().catch(console.error);
