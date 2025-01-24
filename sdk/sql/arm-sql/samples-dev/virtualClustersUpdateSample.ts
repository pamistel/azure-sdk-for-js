/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { VirtualClusterUpdate} from "@azure/arm-sql";
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing virtual cluster.
 *
 * @summary Updates an existing virtual cluster.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2022-05-01-preview/examples/VirtualClusterUpdate.json
 */
async function updateVirtualClusterWithTags() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "20d7082a-0fc7-4468-82bd-542694d5042b";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "testrg";
  const virtualClusterName = "vc-subnet1-f769ed71-b3ad-491a-a9d5-26eeceaa6be2";
  const parameters: VirtualClusterUpdate = { tags: { tkey: "tvalue1" } };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.virtualClusters.beginUpdateAndWait(
    resourceGroupName,
    virtualClusterName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await updateVirtualClusterWithTags();
}

main().catch(console.error);
