/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { DataMaskingPolicy} from "@azure/arm-synapse";
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a Sql pool data masking policy
 *
 * @summary Creates or updates a Sql pool data masking policy
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingPolicyCreateOrUpdateMax.json
 */
async function createOrUpdateDataMaskingPolicyMax() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const parameters: DataMaskingPolicy = {
    dataMaskingState: "Enabled",
    exemptPrincipals: "testuser;"
  };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingPolicies.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates a Sql pool data masking policy
 *
 * @summary Creates or updates a Sql pool data masking policy
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/DataMaskingPolicyCreateOrUpdateMin.json
 */
async function createOrUpdateDataMaskingPolicyMin() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SYNAPSE_RESOURCE_GROUP"] || "sqlcrudtest-6852";
  const workspaceName = "sqlcrudtest-2080";
  const sqlPoolName = "sqlcrudtest-331";
  const parameters: DataMaskingPolicy = { dataMaskingState: "Enabled" };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.dataMaskingPolicies.createOrUpdate(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    parameters
  );
  console.log(result);
}

async function main() {
  await createOrUpdateDataMaskingPolicyMax();
  await createOrUpdateDataMaskingPolicyMin();
}

main().catch(console.error);
