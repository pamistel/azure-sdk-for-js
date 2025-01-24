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
  ClusterUpdateParameters} from "@azure/arm-machinelearning";
import {
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates properties of a compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation.
 *
 * @summary Updates properties of a compute. This call will overwrite a compute if it exists. This is a nonrecoverable operation.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Compute/patch.json
 */
async function updateAAmlCompute() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "testrg123";
  const workspaceName = "workspaces123";
  const computeName = "compute123";
  const parameters: ClusterUpdateParameters = {
    properties: {
      scaleSettings: {
        maxNodeCount: 4,
        minNodeCount: 4,
        nodeIdleTimeBeforeScaleDown: "PT5M",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.computeOperations.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    computeName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await updateAAmlCompute();
}

main().catch(console.error);
