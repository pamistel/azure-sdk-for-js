/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { GenerateCredentialsParameters } from "@azure/arm-containerregistry";
import { ContainerRegistryManagementClient } from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Generate keys for a token of a specified container registry.
 *
 * @summary Generate keys for a token of a specified container registry.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2023-11-01-preview/examples/RegistryGenerateCredentials.json
 */
async function registryGenerateCredentials(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const generateCredentialsParameters: GenerateCredentialsParameters = {
    expiry: new Date("2020-12-31T15:59:59.0707808Z"),
    tokenId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/tokens/myToken",
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.registries.beginGenerateCredentialsAndWait(
    resourceGroupName,
    registryName,
    generateCredentialsParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await registryGenerateCredentials();
}

main().catch(console.error);
