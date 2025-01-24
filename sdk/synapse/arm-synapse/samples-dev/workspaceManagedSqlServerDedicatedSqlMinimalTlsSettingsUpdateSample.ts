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
  DedicatedSQLminimalTlsSettings} from "@azure/arm-synapse";
import {
  SynapseManagementClient
} from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update workspace managed sql server's minimal tls settings.
 *
 * @summary Update workspace managed sql server's minimal tls settings.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/UpdateWorkspaceManagedSqlServerDedicatedSQLminimalTlsSettings.json
 */
async function updateTlsVersionOfTheWorkspaceManagedSqlServer() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "workspace-6852";
  const workspaceName = "workspace-2080";
  const dedicatedSQLminimalTlsSettingsName = "default";
  const parameters: DedicatedSQLminimalTlsSettings = {
    minimalTlsVersion: "1.1"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.workspaceManagedSqlServerDedicatedSQLMinimalTlsSettings.beginUpdateAndWait(
    resourceGroupName,
    workspaceName,
    dedicatedSQLminimalTlsSettingsName,
    parameters
  );
  console.log(result);
}

async function main() {
  await updateTlsVersionOfTheWorkspaceManagedSqlServer();
}

main().catch(console.error);
