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
  RedistributeThroughputParameters} from "@azure/arm-cosmosdb";
import {
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Redistribute throughput for an Azure Cosmos DB SQL container
 *
 * @summary Redistribute throughput for an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBSqlContainerRedistributeThroughput.json
 */
async function cosmosDbSqlContainerRedistributeThroughput(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const redistributeThroughputParameters: RedistributeThroughputParameters = {
    resource: {
      sourcePhysicalPartitionThroughputInfo: [
        { id: "2", throughput: 5000 },
        { id: "3" },
      ],
      targetPhysicalPartitionThroughputInfo: [
        { id: "0", throughput: 5000 },
        { id: "1", throughput: 5000 },
      ],
      throughputPolicy: "custom",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result =
    await client.sqlResources.beginSqlContainerRedistributeThroughputAndWait(
      resourceGroupName,
      accountName,
      databaseName,
      containerName,
      redistributeThroughputParameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbSqlContainerRedistributeThroughput();
}

main().catch(console.error);
