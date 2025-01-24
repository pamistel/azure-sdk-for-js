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
  EnvironmentVersion} from "@azure/arm-machinelearning";
import {
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an EnvironmentVersion.
 *
 * @summary Creates or updates an EnvironmentVersion.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Workspace/EnvironmentVersion/createOrUpdate.json
 */
async function createOrUpdateWorkspaceEnvironmentVersion() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const version = "string";
  const body: EnvironmentVersion = {
    properties: {
      description: "string",
      build: {
        contextUri:
          "https://storage-account.blob.core.windows.net/azureml/DockerBuildContext/95ddede6b9b8c4e90472db3acd0a8d28/",
        dockerfilePath: "prod/Dockerfile",
      },
      condaFile: "string",
      image: "docker.io/tensorflow/serving:latest",
      inferenceConfig: {
        livenessRoute: { path: "string", port: 1 },
        readinessRoute: { path: "string", port: 1 },
        scoringRoute: { path: "string", port: 1 },
      },
      isAnonymous: false,
      properties: { string: "string" },
      tags: { string: "string" },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.environmentVersions.createOrUpdate(
    resourceGroupName,
    workspaceName,
    name,
    version,
    body,
  );
  console.log(result);
}

async function main() {
  await createOrUpdateWorkspaceEnvironmentVersion();
}

main().catch(console.error);
