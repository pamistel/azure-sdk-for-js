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
  UpdateSAPCentralInstanceRequest,
  SAPCentralInstancesUpdateOptionalParams} from "@azure/arm-workloads";
import {
  WorkloadsClient
} from "@azure/arm-workloads";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the SAP Central Services Instance resource. <br><br>This can be used to update tags on the resource.
 *
 * @summary Updates the SAP Central Services Instance resource. <br><br>This can be used to update tags on the resource.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/stable/2023-04-01/examples/sapvirtualinstances/SAPCentralInstances_Update.json
 */
async function sapCentralInstancesUpdate(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "test-rg";
  const sapVirtualInstanceName = "X00";
  const centralInstanceName = "centralServer";
  const body: UpdateSAPCentralInstanceRequest = { tags: { tag1: "value1" } };
  const options: SAPCentralInstancesUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPCentralInstances.beginUpdateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    centralInstanceName,
    options
  );
  console.log(result);
}

async function main(): Promise<void> {
  await sapCentralInstancesUpdate();
}

main().catch(console.error);
