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
  ServiceResourceUpdate} from "@azure/arm-servicefabric";
import {
  ServiceFabricManagementClient
} from "@azure/arm-servicefabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a Service Fabric service resource with the specified name.
 *
 * @summary Update a Service Fabric service resource with the specified name.
 * x-ms-original-file: specification/servicefabric/resource-manager/Microsoft.ServiceFabric/stable/2021-06-01/examples/ServicePatchOperation_example.json
 */
async function patchAService() {
  const subscriptionId =
    process.env["SERVICEFABRIC_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRIC_RESOURCE_GROUP"] || "resRg";
  const clusterName = "myCluster";
  const applicationName = "myApp";
  const serviceName = "myService";
  const parameters: ServiceResourceUpdate = {
    serviceKind: "Stateless",
    serviceLoadMetrics: [{ name: "metric1", weight: "Low" }],
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagementClient(credential, subscriptionId);
  const result = await client.services.beginUpdateAndWait(
    resourceGroupName,
    clusterName,
    applicationName,
    serviceName,
    parameters
  );
  console.log(result);
}

async function main() {
  await patchAService();
}

main().catch(console.error);
