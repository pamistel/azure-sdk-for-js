/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DataBoxManagementClient } from "@azure/arm-databox";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This method gets the unencrypted secrets related to the job.
 *
 * @summary This method gets the unencrypted secrets related to the job.
 * x-ms-original-file: specification/databox/resource-manager/Microsoft.DataBox/stable/2022-12-01/examples/JobsListCredentials.json
 */
async function jobsListCredentials(): Promise<void> {
  const subscriptionId =
    process.env["DATABOX_SUBSCRIPTION_ID"] || "YourSubscriptionId";
  const resourceGroupName =
    process.env["DATABOX_RESOURCE_GROUP"] || "YourResourceGroupName";
  const jobName = "TestJobName1";
  const credential = new DefaultAzureCredential();
  const client = new DataBoxManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.jobs.listCredentials(
    resourceGroupName,
    jobName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await jobsListCredentials();
}

main().catch(console.error);
