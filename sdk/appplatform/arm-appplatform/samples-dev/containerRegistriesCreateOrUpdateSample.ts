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
  ContainerRegistryResource} from "@azure/arm-appplatform";
import {
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update container registry resource.
 *
 * @summary Create or update container registry resource.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/ContainerRegistries_CreateOrUpdate.json
 */
async function containerRegistriesCreateOrUpdate(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "my-service";
  const containerRegistryName = "my-container-registry";
  const containerRegistryResource: ContainerRegistryResource = {
    properties: {
      credentials: {
        type: "BasicAuth",
        password: "myPassword",
        server: "myServer",
        username: "myUsername"
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.containerRegistries.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    containerRegistryName,
    containerRegistryResource
  );
  console.log(result);
}

async function main(): Promise<void> {
  await containerRegistriesCreateOrUpdate();
}

main().catch(console.error);
