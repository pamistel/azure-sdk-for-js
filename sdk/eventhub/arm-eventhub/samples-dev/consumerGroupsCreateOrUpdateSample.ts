/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { ConsumerGroup} from "@azure/arm-eventhub";
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.
 *
 * @summary Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/ConsumerGroup/EHConsumerGroupCreate.json
 */
async function consumerGroupCreate() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] ||
    "5f750a97-50d9-4e36-8081-c9ee4c0210d4";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "ArunMonocle";
  const namespaceName = "sdk-Namespace-2661";
  const eventHubName = "sdk-EventHub-6681";
  const consumerGroupName = "sdk-ConsumerGroup-5563";
  const parameters: ConsumerGroup = { userMetadata: "New consumergroup" };
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.consumerGroups.createOrUpdate(
    resourceGroupName,
    namespaceName,
    eventHubName,
    consumerGroupName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await consumerGroupCreate();
}

main().catch(console.error);
