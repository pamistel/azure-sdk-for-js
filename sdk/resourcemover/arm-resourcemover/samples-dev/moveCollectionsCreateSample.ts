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
  MoveCollection,
  MoveCollectionsCreateOptionalParams} from "@azure/arm-resourcemover";
import {
  ResourceMoverServiceAPI
} from "@azure/arm-resourcemover";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a move collection.
 *
 * @summary Creates or updates a move collection.
 * x-ms-original-file: specification/resourcemover/resource-manager/Microsoft.Migrate/stable/2023-08-01/examples/MoveCollections_Create.json
 */
async function moveCollectionsCreate() {
  const subscriptionId =
    process.env["RESOURCEMOVER_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["RESOURCEMOVER_RESOURCE_GROUP"] || "rg1";
  const moveCollectionName = "movecollection1";
  const body: MoveCollection = {
    identity: { type: "SystemAssigned" },
    location: "eastus2",
    properties: {
      moveType: "RegionToRegion",
      sourceRegion: "eastus",
      targetRegion: "westus"
    }
  };
  const options: MoveCollectionsCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new ResourceMoverServiceAPI(credential, subscriptionId);
  const result = await client.moveCollections.create(
    resourceGroupName,
    moveCollectionName,
    options
  );
  console.log(result);
}

async function main() {
  await moveCollectionsCreate();
}

main().catch(console.error);
