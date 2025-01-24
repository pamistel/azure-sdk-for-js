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
  PreRestoreRequest} from "@azure/arm-storagesync";
import {
  MicrosoftStorageSync
} from "@azure/arm-storagesync";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Pre Restore a given CloudEndpoint.
 *
 * @summary Pre Restore a given CloudEndpoint.
 * x-ms-original-file: specification/storagesync/resource-manager/Microsoft.StorageSync/stable/2020-09-01/examples/CloudEndpoints_PreRestore.json
 */
async function cloudEndpointsPreRestore() {
  const subscriptionId = "52b8da2f-61e0-4a1f-8dde-336911f367fb";
  const resourceGroupName = "SampleResourceGroup_1";
  const storageSyncServiceName = "SampleStorageSyncService_1";
  const syncGroupName = "SampleSyncGroup_1";
  const cloudEndpointName = "SampleCloudEndpoint_1";
  const parameters: PreRestoreRequest = {
    azureFileShareUri:
      "https://hfsazbackupdevintncus2.file.core.test-cint.azure-test.net/sampleFileShare",
    restoreFileSpec: [
      { path: "text1.txt", isdir: false },
      { path: "MyDir", isdir: true },
      { path: "MyDir/SubDir", isdir: false },
      { path: "MyDir/SubDir/File1.pdf", isdir: false }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftStorageSync(credential, subscriptionId);
  const result = await client.cloudEndpoints.beginPreRestoreAndWait(
    resourceGroupName,
    storageSyncServiceName,
    syncGroupName,
    cloudEndpointName,
    parameters
  );
  console.log(result);
}

cloudEndpointsPreRestore().catch(console.error);
