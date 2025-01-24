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
 * This sample demonstrates how to Lists all the security automations in the specified subscription. Use the 'nextLink' property in the response to get the next page of security automations for the specified subscription.
 *
 * @summary Lists all the security automations in the specified subscription. Use the 'nextLink' property in the response to get the next page of security automations for the specified subscription.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2023-12-01-preview/examples/Automations/GetAutomationsSubscription_example.json
 */
async function listAllSecurityAutomationsOfASpecifiedSubscription() {
  const subscriptionId =
    process.env["SECURITY_SUBSCRIPTION_ID"] ||
    "a5caac9c-5c04-49af-b3d0-e204f40345d5";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.automations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listAllSecurityAutomationsOfASpecifiedSubscription();
}

main().catch(console.error);
