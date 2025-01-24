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
  AzureDevOpsOrg,
  AzureDevOpsOrgUpdateOptionalParams} from "@azure/arm-securitydevops";
import {
  MicrosoftSecurityDevOps
} from "@azure/arm-securitydevops";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update monitored AzureDevOps Org details.
 *
 * @summary Update monitored AzureDevOps Org details.
 * x-ms-original-file: specification/securitydevops/resource-manager/Microsoft.SecurityDevOps/preview/2022-09-01-preview/examples/AzureDevOpsOrgUpdate.json
 */
async function azureDevOpsOrgUpdate() {
  const subscriptionId =
    process.env["SECURITYDEVOPS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SECURITYDEVOPS_RESOURCE_GROUP"] || "westusrg";
  const azureDevOpsConnectorName = "testconnector";
  const azureDevOpsOrgName = "myOrg";
  const azureDevOpsOrg: AzureDevOpsOrg = {
    properties: { autoDiscovery: "Disabled" }
  };
  const options: AzureDevOpsOrgUpdateOptionalParams = { azureDevOpsOrg };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSecurityDevOps(credential, subscriptionId);
  const result = await client.azureDevOpsOrgOperations.beginUpdateAndWait(
    resourceGroupName,
    azureDevOpsConnectorName,
    azureDevOpsOrgName,
    options
  );
  console.log(result);
}

async function main() {
  await azureDevOpsOrgUpdate();
}

main().catch(console.error);
