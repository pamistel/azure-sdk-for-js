/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ImageBuilderClient } from "@azure/arm-imagebuilder";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all run outputs for the specified Image Template resource
 *
 * @summary List all run outputs for the specified Image Template resource
 * x-ms-original-file: specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/stable/2024-02-01/examples/ListRunOutputs.json
 */
async function retrieveAListOfAllOutputsCreatedByTheLastRunOfAnImageTemplate() {
  const subscriptionId =
    process.env["IMAGEBUILDER_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["IMAGEBUILDER_RESOURCE_GROUP"] || "myResourceGroup";
  const imageTemplateName = "myImageTemplate";
  const credential = new DefaultAzureCredential();
  const client = new ImageBuilderClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.virtualMachineImageTemplates.listRunOutputs(
    resourceGroupName,
    imageTemplateName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await retrieveAListOfAllOutputsCreatedByTheLastRunOfAnImageTemplate();
}

main().catch(console.error);
