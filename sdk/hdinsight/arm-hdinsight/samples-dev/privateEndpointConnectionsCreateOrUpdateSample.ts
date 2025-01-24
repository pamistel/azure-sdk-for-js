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
  PrivateEndpointConnection} from "@azure/arm-hdinsight";
import {
  HDInsightManagementClient,
} from "@azure/arm-hdinsight";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Approve or reject a private endpoint connection manually.
 *
 * @summary Approve or reject a private endpoint connection manually.
 * x-ms-original-file: specification/hdinsight/resource-manager/Microsoft.HDInsight/preview/2024-08-01-preview/examples/ApprovePrivateEndpointConnection.json
 */
async function approveAPrivateEndpointConnectionManually() {
  const subscriptionId = process.env["HDINSIGHT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HDINSIGHT_RESOURCE_GROUP"] || "rg1";
  const clusterName = "cluster1";
  const privateEndpointConnectionName =
    "testprivateep.b3bf5fed-9b12-4560-b7d0-2abe1bba07e2";
  const parameters: PrivateEndpointConnection = {
    privateLinkServiceConnectionState: {
      description: "update it from pending to approved.",
      actionsRequired: "None",
      status: "Approved",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HDInsightManagementClient(credential, subscriptionId);
  const result =
    await client.privateEndpointConnections.beginCreateOrUpdateAndWait(
      resourceGroupName,
      clusterName,
      privateEndpointConnectionName,
      parameters,
    );
  console.log(result);
}

async function main() {
  await approveAPrivateEndpointConnectionManually();
}

main().catch(console.error);
