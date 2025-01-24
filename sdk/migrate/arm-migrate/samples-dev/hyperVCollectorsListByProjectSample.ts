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
 * This sample demonstrates how to Get a list of Hyper-V collector.
 *
 * @summary Get a list of Hyper-V collector.
 * x-ms-original-file: specification/migrate/resource-manager/Microsoft.Migrate/stable/2019-10-01/examples/HyperVCollectors_ListByProject.json
 */
async function hyperVCollectorsListByProject() {
  const subscriptionId =
    process.env["MIGRATE_SUBSCRIPTION_ID"] ||
    "8c3c936a-c09b-4de3-830b-3f5f244d72e9";
  const resourceGroupName =
    process.env["MIGRATE_RESOURCE_GROUP"] || "contosoithyperv";
  const projectName = "migrateprojectce73project";
  const credential = new DefaultAzureCredential();
  const client = new AzureMigrateV2(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.hyperVCollectors.listByProject(
    resourceGroupName,
    projectName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await hyperVCollectorsListByProject();
}

main().catch(console.error);
