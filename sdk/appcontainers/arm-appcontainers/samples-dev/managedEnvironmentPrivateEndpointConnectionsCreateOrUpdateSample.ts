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
  PrivateEndpointConnection} from "@azure/arm-appcontainers";
import {
  ContainerAppsAPIClient,
} from "@azure/arm-appcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update the state of a private endpoint connection for a given managed environment.
 *
 * @summary Update the state of a private endpoint connection for a given managed environment.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/preview/2024-08-02-preview/examples/ManagedEnvironmentPrivateEndpointConnections_CreateOrUpdate.json
 */
async function updateAPrivateEndpointConnectionByManagedEnvironment(): Promise<void> {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] ||
    "8efdecc5-919e-44eb-b179-915dca89ebf9";
  const resourceGroupName =
    process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "managedEnv";
  const privateEndpointConnectionName = "jlaw-demo1";
  const privateEndpointConnectionEnvelope: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      actionsRequired: "None",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result =
    await client.managedEnvironmentPrivateEndpointConnections.beginCreateOrUpdateAndWait(
      resourceGroupName,
      environmentName,
      privateEndpointConnectionName,
      privateEndpointConnectionEnvelope,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAPrivateEndpointConnectionByManagedEnvironment();
}

main().catch(console.error);
