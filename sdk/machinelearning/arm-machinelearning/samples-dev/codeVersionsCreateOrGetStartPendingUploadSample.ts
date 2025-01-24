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
  PendingUploadRequestDto} from "@azure/arm-machinelearning";
import {
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Generate a storage location and credential for the client to upload a code asset to.
 *
 * @summary Generate a storage location and credential for the client to upload a code asset to.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/Workspace/CodeVersion/createOrGetStartPendingUpload.json
 */
async function createOrGetStartPendingUploadWorkspaceCodeVersion() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "my-aml-workspace";
  const name = "string";
  const version = "string";
  const body: PendingUploadRequestDto = {
    pendingUploadId: "string",
    pendingUploadType: "None",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.codeVersions.createOrGetStartPendingUpload(
    resourceGroupName,
    workspaceName,
    name,
    version,
    body,
  );
  console.log(result);
}

async function main() {
  await createOrGetStartPendingUploadWorkspaceCodeVersion();
}

main().catch(console.error);
