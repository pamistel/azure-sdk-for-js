/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a list of firewall rules
 *
 * @summary Returns a list of firewall rules
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/ListIpFirewallRules.json
 */
async function listIPFirewallRulesInAWorkspace() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.ipFirewallRules.listByWorkspace(
    resourceGroupName,
    workspaceName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listIPFirewallRulesInAWorkspace();
}

main().catch(console.error);
