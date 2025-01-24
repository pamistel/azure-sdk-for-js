/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ArchiveUpdateParameters,
  ContainerRegistryManagementClient
} from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a archive for a container registry with the specified parameters.
 *
 * @summary Updates a archive for a container registry with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2023-11-01-preview/examples/ArchiveUpdate.json
 */
async function archiveUpdate(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const packageType = "myPackageType";
  const archiveName = "myArchiveName";
  const archiveUpdateParameters: ArchiveUpdateParameters = {
    publishedVersion: "string"
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.archives.update(
    resourceGroupName,
    registryName,
    packageType,
    archiveName,
    archiveUpdateParameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  archiveUpdate();
}

main().catch(console.error);
