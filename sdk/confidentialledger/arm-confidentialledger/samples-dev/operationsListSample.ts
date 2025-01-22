/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ConfidentialLedgerClient } from "@azure/arm-confidentialledger";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Retrieves a list of available API operations
 *
 * @summary Retrieves a list of available API operations
 * x-ms-original-file: specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/preview/2023-06-28-preview/examples/Operations_Get.json
 */
async function operationsGet(): Promise<void> {
  const subscriptionId =
    process.env["CONFIDENTIALLEDGER_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ConfidentialLedgerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  operationsGet();
}

main().catch(console.error);
