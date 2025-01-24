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
  RestoreRequestProperties} from "@azure/arm-hardwaresecuritymodules";
import {
  AzureHSMResourceProvider,
} from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Restores all key materials of a specified Cloud HSM Cluster
 *
 * @summary Restores all key materials of a specified Cloud HSM Cluster
 * x-ms-original-file: specification/hardwaresecuritymodules/resource-manager/Microsoft.HardwareSecurityModules/preview/2024-06-30-preview/examples/CloudHsmCluster_RequestOrValidate_Restore_MaximumSet_Gen.json
 */
async function cloudHsmClusterRestoreMaximumSetGen() {
  const subscriptionId =
    process.env["HARDWARESECURITYMODULES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["HARDWARESECURITYMODULES_RESOURCE_GROUP"] || "rgcloudhsm";
  const cloudHsmClusterName = "chsm1";
  const restoreRequestProperties: RestoreRequestProperties = {
    azureStorageBlobContainerUri:
      "https://myaccount.blob.core.windows.net/sascontainer/sasContainer",
    backupId: "backupId",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureHSMResourceProvider(credential, subscriptionId);
  const result = await client.cloudHsmClusters.beginRestoreAndWait(
    resourceGroupName,
    cloudHsmClusterName,
    restoreRequestProperties,
  );
  console.log(result);
}

async function main() {
  await cloudHsmClusterRestoreMaximumSetGen();
}

main().catch(console.error);
