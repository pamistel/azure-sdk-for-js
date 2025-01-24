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
  DatabaseAccountRegenerateKeyParameters} from "@azure/arm-cosmosdb";
import {
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Regenerates an access key for the specified Azure Cosmos DB database account.
 *
 * @summary Regenerates an access key for the specified Azure Cosmos DB database account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-12-01-preview/examples/CosmosDBDatabaseAccountRegenerateKey.json
 */
async function cosmosDbDatabaseAccountRegenerateKey(): Promise<void> {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const keyToRegenerate: DatabaseAccountRegenerateKeyParameters = {
    keyKind: "primary",
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginRegenerateKeyAndWait(
    resourceGroupName,
    accountName,
    keyToRegenerate,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await cosmosDbDatabaseAccountRegenerateKey();
}

main().catch(console.error);
