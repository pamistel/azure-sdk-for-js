/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CustomLocationsManagementClient } from "@azure/arm-extendedlocation";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a list of Resource Sync Rules in the specified subscription. The operation returns properties of each Resource Sync Rule
 *
 * @summary Gets a list of Resource Sync Rules in the specified subscription. The operation returns properties of each Resource Sync Rule
 * x-ms-original-file: specification/extendedlocation/resource-manager/Microsoft.ExtendedLocation/preview/2021-08-31-preview/examples/ResourceSyncRulesListByCustomLocationID.json
 */
async function listResourceSyncRulesBySubscription() {
  const subscriptionId =
    process.env["EXTENDEDLOCATION_SUBSCRIPTION_ID"] ||
    "11111111-2222-3333-4444-555555555555";
  const resourceGroupName =
    process.env["EXTENDEDLOCATION_RESOURCE_GROUP"] || "testresourcegroup";
  const resourceName = "customLocation01";
  const credential = new DefaultAzureCredential();
  const client = new CustomLocationsManagementClient(
    credential,
    subscriptionId
  );
  const resArray = new Array();
  for await (const item of client.resourceSyncRules.listByCustomLocationID(
    resourceGroupName,
    resourceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listResourceSyncRulesBySubscription();
}

main().catch(console.error);
