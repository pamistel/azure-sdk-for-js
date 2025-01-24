/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List DevOps Configurations.
 *
 * @summary List DevOps Configurations.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2023-09-01-preview/examples/SecurityConnectorsDevOps/ListDevOpsConfigurations_example.json
 */
async function listDevOpsConfigurations() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "0806e1cd-cfda-4ff8-b99c-2b0af42cffd3";
  const resourceGroupName = process.env["SECURITY_RESOURCE_GROUP"] || "myRg";
  const securityConnectorName = "mySecurityConnectorName";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.devOpsConfigurations.list(
    resourceGroupName,
    securityConnectorName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listDevOpsConfigurations();
}

main().catch(console.error);
