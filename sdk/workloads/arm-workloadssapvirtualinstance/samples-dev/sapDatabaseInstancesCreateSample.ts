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
  SAPDatabaseInstance,
  SAPDatabaseInstancesCreateOptionalParams} from "@azure/arm-workloadssapvirtualinstance";
import {
  WorkloadsClient,
} from "@azure/arm-workloadssapvirtualinstance";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 *
 * @summary Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/preview/2023-10-01-preview/examples/sapdatabaseinstances/SAPDatabaseInstances_Create_HA_AvSet.json
 */
async function createSapDatabaseInstancesForHaSystemWithAvailabilitySet(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "test-rg";
  const sapVirtualInstanceName = "X00";
  const databaseInstanceName = "databaseServer";
  const body: SAPDatabaseInstance = {
    location: "eastus",
    properties: {},
    tags: {},
  };
  const options: SAPDatabaseInstancesCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDatabaseInstances.beginCreateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 *
 * @summary Creates the Database resource corresponding to the Virtual Instance for SAP solutions resource. <br><br>This will be used by service only. PUT by end user will return a Bad Request error.
 * x-ms-original-file: specification/workloads/resource-manager/Microsoft.Workloads/SAPVirtualInstance/preview/2023-10-01-preview/examples/sapdatabaseinstances/SAPDatabaseInstances_Create.json
 */
async function sapDatabaseInstancesCreate(): Promise<void> {
  const subscriptionId =
    process.env["WORKLOADS_SUBSCRIPTION_ID"] ||
    "6d875e77-e412-4d7d-9af4-8895278b4443";
  const resourceGroupName =
    process.env["WORKLOADS_RESOURCE_GROUP"] || "test-rg";
  const sapVirtualInstanceName = "X00";
  const databaseInstanceName = "databaseServer";
  const body: SAPDatabaseInstance = {
    location: "eastus",
    properties: {},
    tags: {},
  };
  const options: SAPDatabaseInstancesCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.sAPDatabaseInstances.beginCreateAndWait(
    resourceGroupName,
    sapVirtualInstanceName,
    databaseInstanceName,
    options,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createSapDatabaseInstancesForHaSystemWithAvailabilitySet();
  await sapDatabaseInstancesCreate();
}

main().catch(console.error);
