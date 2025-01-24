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
  OutboundRuleBasicResource} from "@azure/arm-machinelearning";
import {
  AzureMachineLearningServicesManagementClient,
} from "@azure/arm-machinelearning";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an outbound rule in the managed network of a machine learning workspace.
 *
 * @summary Creates or updates an outbound rule in the managed network of a machine learning workspace.
 * x-ms-original-file: specification/machinelearningservices/resource-manager/Microsoft.MachineLearningServices/stable/2024-04-01/examples/ManagedNetwork/createOrUpdateRule.json
 */
async function createOrUpdateManagedNetworkSettingsRule() {
  const subscriptionId =
    process.env["MACHINELEARNING_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["MACHINELEARNING_RESOURCE_GROUP"] || "test-rg";
  const workspaceName = "aml-workspace-name";
  const ruleName = "rule_name_1";
  const body: OutboundRuleBasicResource = {
    properties: {
      type: "FQDN",
      category: "UserDefined",
      destination: "destination_endpoint",
      status: "Active",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMachineLearningServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result =
    await client.managedNetworkSettingsRule.beginCreateOrUpdateAndWait(
      resourceGroupName,
      workspaceName,
      ruleName,
      body,
    );
  console.log(result);
}

async function main() {
  await createOrUpdateManagedNetworkSettingsRule();
}

main().catch(console.error);
