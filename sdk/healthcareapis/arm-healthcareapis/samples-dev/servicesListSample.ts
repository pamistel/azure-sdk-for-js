/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HealthcareApisManagementClient } from "@azure/arm-healthcareapis";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get all the service instances in a subscription.
 *
 * @summary Get all the service instances in a subscription.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2024-03-31/examples/legacy/ServiceList.json
 */
async function listAllServicesInSubscription() {
  const subscriptionId =
    process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.services.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listAllServicesInSubscription();
}

main().catch(console.error);
