/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { AgentPoolUpdateParameters } from "@azure/arm-containerregistry";
import { ContainerRegistryManagementClient } from "@azure/arm-containerregistry";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an agent pool with the specified parameters.
 *
 * @summary Updates an agent pool with the specified parameters.
 * x-ms-original-file: specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/preview/2019-06-01-preview/examples/AgentPoolsUpdate.json
 */
async function agentPoolsUpdate(): Promise<void> {
  const subscriptionId =
    process.env["CONTAINERREGISTRY_SUBSCRIPTION_ID"] || "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = process.env["CONTAINERREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const registryName = "myRegistry";
  const agentPoolName = "myAgentPool";
  const updateParameters: AgentPoolUpdateParameters = { count: 1 };
  const credential = new DefaultAzureCredential();
  const client = new ContainerRegistryManagementClient(credential, subscriptionId);
  const result = await client.agentPools.beginUpdateAndWait(
    resourceGroupName,
    registryName,
    agentPoolName,
    updateParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await agentPoolsUpdate();
}

main().catch(console.error);
