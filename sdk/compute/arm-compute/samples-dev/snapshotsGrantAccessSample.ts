/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { GrantAccessData } from "@azure/arm-compute";
import { ComputeManagementClient } from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Grants access to a snapshot.
 *
 * @summary Grants access to a snapshot.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/DiskRP/stable/2024-03-02/examples/snapshotExamples/Snapshot_BeginGetAccess.json
 */
async function getASasOnASnapshot(): Promise<void> {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const snapshotName = "mySnapshot";
  const grantAccessData: GrantAccessData = {
    access: "Read",
    durationInSeconds: 300,
    fileFormat: "VHDX",
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.snapshots.beginGrantAccessAndWait(
    resourceGroupName,
    snapshotName,
    grantAccessData,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getASasOnASnapshot();
}

main().catch(console.error);
