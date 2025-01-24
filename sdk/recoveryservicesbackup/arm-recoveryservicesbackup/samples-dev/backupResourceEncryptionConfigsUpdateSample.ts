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
  BackupResourceEncryptionConfigResource} from "@azure/arm-recoveryservicesbackup";
import {
  RecoveryServicesBackupClient,
} from "@azure/arm-recoveryservicesbackup";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates Vault encryption config.
 *
 * @summary Updates Vault encryption config.
 * x-ms-original-file: specification/recoveryservicesbackup/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/BackupResourceEncryptionConfig_Put.json
 */
async function updateVaultEncryptionConfiguration() {
  const subscriptionId =
    process.env["RECOVERYSERVICESBACKUP_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const vaultName = "source-rsv";
  const resourceGroupName =
    process.env["RECOVERYSERVICESBACKUP_RESOURCE_GROUP"] || "test-rg";
  const parameters: BackupResourceEncryptionConfigResource = {
    properties: {
      encryptionAtRestType: "CustomerManaged",
      infrastructureEncryptionState: "true",
      keyUri:
        "https://gktestkv1.vault.azure.net/keys/Test1/ed2e8cdc7f86477ebf0c6462b504a9ed",
      subscriptionId: "1a2311d9-66f5-47d3-a9fb-7a37da63934b",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesBackupClient(credential, subscriptionId);
  const result = await client.backupResourceEncryptionConfigs.update(
    vaultName,
    resourceGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await updateVaultEncryptionConfiguration();
}

main().catch(console.error);
