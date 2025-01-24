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
  NameAvailabilityParameters} from "@azure/arm-hdinsightcontainers";
import {
  HDInsightContainersManagementClient,
} from "@azure/arm-hdinsightcontainers";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Check the availability of the resource name.
 *
 * @summary Check the availability of the resource name.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/HDInsightOnAks/preview/2024-05-01-preview/examples/LocationsNameAvailability.json
 */
async function locationsNameAvailability() {
  const subscriptionId =
    process.env["HDINSIGHT_SUBSCRIPTION_ID"] ||
    "10e32bab-26da-4cc4-a441-52b318f824e6";
  const location = "southeastasia";
  const nameAvailabilityParameters: NameAvailabilityParameters = {
    name: "contosemember1",
    type: "Microsoft.HDInsight/clusterPools/clusters",
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightContainersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.locations.checkNameAvailability(
    location,
    nameAvailabilityParameters,
  );
  console.log(result);
}

async function main() {
  await locationsNameAvailability();
}

main().catch(console.error);
