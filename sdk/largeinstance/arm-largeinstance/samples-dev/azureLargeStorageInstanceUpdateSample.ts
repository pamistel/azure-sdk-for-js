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
  AzureLargeStorageInstanceTagsUpdate} from "@azure/arm-largeinstance";
import {
  LargeInstanceManagementClient,
} from "@azure/arm-largeinstance";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Patches the Tags field of a Azure Large Storage Instance for the specified
subscription, resource group, and instance name.
 *
 * @summary Patches the Tags field of a Azure Large Storage Instance for the specified
subscription, resource group, and instance name.
 * x-ms-original-file: specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/preview/2023-07-20-preview/examples/AzureLargeStorageInstance_PatchTags_Delete.json
 */
async function azureLargeStorageInstanceDeleteTag() {
  const subscriptionId =
    process.env["LARGEINSTANCE_SUBSCRIPTION_ID"] ||
    "f0f4887f-d13c-4943-a8ba-d7da28d2a3fd";
  const resourceGroupName =
    process.env["LARGEINSTANCE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureLargeStorageInstanceName = "myALSInstance";
  const tagsParameter: AzureLargeStorageInstanceTagsUpdate = { tags: {} };
  const credential = new DefaultAzureCredential();
  const client = new LargeInstanceManagementClient(credential, subscriptionId);
  const result = await client.azureLargeStorageInstanceOperations.update(
    resourceGroupName,
    azureLargeStorageInstanceName,
    tagsParameter,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Patches the Tags field of a Azure Large Storage Instance for the specified
subscription, resource group, and instance name.
 *
 * @summary Patches the Tags field of a Azure Large Storage Instance for the specified
subscription, resource group, and instance name.
 * x-ms-original-file: specification/azurelargeinstance/resource-manager/Microsoft.AzureLargeInstance/preview/2023-07-20-preview/examples/AzureLargeStorageInstance_PatchTags.json
 */
async function azureLargeStorageInstanceUpdateTag() {
  const subscriptionId =
    process.env["LARGEINSTANCE_SUBSCRIPTION_ID"] ||
    "f0f4887f-d13c-4943-a8ba-d7da28d2a3fd";
  const resourceGroupName =
    process.env["LARGEINSTANCE_RESOURCE_GROUP"] || "myResourceGroup";
  const azureLargeStorageInstanceName = "myALSInstance";
  const tagsParameter: AzureLargeStorageInstanceTagsUpdate = {
    tags: { testkey: "testvalue" },
  };
  const credential = new DefaultAzureCredential();
  const client = new LargeInstanceManagementClient(credential, subscriptionId);
  const result = await client.azureLargeStorageInstanceOperations.update(
    resourceGroupName,
    azureLargeStorageInstanceName,
    tagsParameter,
  );
  console.log(result);
}

async function main() {
  await azureLargeStorageInstanceDeleteTag();
  await azureLargeStorageInstanceUpdateTag();
}

main().catch(console.error);
