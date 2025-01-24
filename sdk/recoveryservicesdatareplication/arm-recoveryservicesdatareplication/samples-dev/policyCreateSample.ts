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
  PolicyModel,
  PolicyCreateOptionalParams} from "@azure/arm-recoveryservicesdatareplication";
import {
  AzureSiteRecoveryManagementServiceAPI
} from "@azure/arm-recoveryservicesdatareplication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates the policy.
 *
 * @summary Creates the policy.
 * x-ms-original-file: specification/recoveryservicesdatareplication/resource-manager/Microsoft.DataReplication/preview/2021-02-16-preview/examples/Policy_Create.json
 */
async function policyCreate() {
  const subscriptionId =
    process.env["RECOVERYSERVICESDATAREPLICATION_SUBSCRIPTION_ID"] ||
    "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const resourceGroupName =
    process.env["RECOVERYSERVICESDATAREPLICATION_RESOURCE_GROUP"] ||
    "rgrecoveryservicesdatareplication";
  const vaultName = "4";
  const policyName = "fafqwc";
  const body: PolicyModel = {
    properties: {
      customProperties: { instanceType: "VMwareToAzStackHCI" }
    }
  };
  const options: PolicyCreateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new AzureSiteRecoveryManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.policy.beginCreateAndWait(
    resourceGroupName,
    vaultName,
    policyName,
    options
  );
  console.log(result);
}

async function main() {
  await policyCreate();
}

main().catch(console.error);
