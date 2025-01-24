/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Description for Gets the category of ResourceHealthMetadata to use for the given site as a collection
 *
 * @summary Description for Gets the category of ResourceHealthMetadata to use for the given site as a collection
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-12-01/examples/ListResourceHealthMetadataBySite.json
 */
async function listResourceHealthMetadataForASite(): Promise<void> {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] ||
    "4adb32ad-8327-4cbb-b775-b84b4465bb38";
  const resourceGroupName =
    process.env["APPSERVICE_RESOURCE_GROUP"] || "Default-Web-NorthCentralUS";
  const name = "newsiteinnewASE-NCUS";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.resourceHealthMetadataOperations.listBySite(
    resourceGroupName,
    name,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await listResourceHealthMetadataForASite();
}

main().catch(console.error);
