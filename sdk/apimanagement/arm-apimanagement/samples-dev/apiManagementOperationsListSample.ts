/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Lists all of the available REST API operations of the Microsoft.ApiManagement provider.
 *
 * @summary Lists all of the available REST API operations of the Microsoft.ApiManagement provider.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementListOperations.json
 */
async function apiManagementListOperations(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.apiManagementOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await apiManagementListOperations();
}

main().catch(console.error);
