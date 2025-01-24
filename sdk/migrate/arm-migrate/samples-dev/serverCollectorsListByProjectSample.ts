/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureMigrateV2 } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a list of Server collector.
 *
 * @summary Get a list of Server collector.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/ServerCollectors_ListByProject.json
 */
async function serverCollectorsListByProject() {
  const subscriptionId =
    process.env["MIGRATE_SUBSCRIPTION_ID"] ||
    "4bd2aa0f-2bd2-4d67-91a8-5a4533d58600";
  const resourceGroupName =
    process.env["MIGRATE_RESOURCE_GROUP"] || "pajindtest";
  const projectName = "app11141project";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.serverCollectors.listByProject(
    resourceGroupName,
    projectName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await serverCollectorsListByProject();
}

main().catch(console.error);
