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
  TagCreateUpdateParameters
} from "@azure/arm-apimanagement";
import {
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates the details of the tag specified by its identifier.
 *
 * @summary Updates the details of the tag specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdateTag.json
 */
async function apiManagementUpdateTag(): Promise<void> {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const tagId = "temptag";
  const ifMatch = "*";
  const parameters: TagCreateUpdateParameters = { displayName: "temp tag" };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.tag.update(
    resourceGroupName,
    serviceName,
    tagId,
    ifMatch,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await apiManagementUpdateTag();
}

main().catch(console.error);
