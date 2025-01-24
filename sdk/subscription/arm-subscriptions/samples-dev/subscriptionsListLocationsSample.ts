/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SubscriptionClient } from "@azure/arm-subscriptions";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
 *
 * @summary This operation provides all the locations that are available for resource providers; however, each resource provider may support a subset of this list.
 * x-ms-original-file: specification/subscription/resource-manager/Microsoft.Subscription/stable/2016-06-01/examples/listLocations.json
 */
async function listLocations() {
  const subscriptionId = "83aa47df-e3e9-49ff-877b-94304bf3d3ad";
  const credential = new DefaultAzureCredential();
  const client = new SubscriptionClient(credential);
  const resArray = new Array();
  for await (const item of client.subscriptions.listLocations(subscriptionId)) {
    resArray.push(item);
  }
  console.log(resArray);
}

listLocations().catch(console.error);
