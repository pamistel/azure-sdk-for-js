/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of API collections within a resource group that have been onboarded to Microsoft Defender for APIs.
 *
 * @summary Gets a list of API collections within a resource group that have been onboarded to Microsoft Defender for APIs.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2023-11-15/examples/ApiCollections/APICollections_ListByResourceGroup_example.json
 */
async function getsAListOfApiCollectionsWithinAResourceGroupThatHaveBeenOnboardedToMicrosoftDefenderForApIs() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "3fa85f64-5717-4562-b3fc-2c963f66afa6";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "rg1";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.aPICollections.listByResourceGroup(
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await getsAListOfApiCollectionsWithinAResourceGroupThatHaveBeenOnboardedToMicrosoftDefenderForApIs();
}

main().catch(console.error);
