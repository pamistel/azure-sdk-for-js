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
  BillingSubscriptionMergeRequest} from "@azure/arm-billing";
import {
  BillingManagementClient,
} from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Merges the billing subscription provided in the request with a target billing subscription.
 *
 * @summary Merges the billing subscription provided in the request with a target billing subscription.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingSubscriptionsMerge.json
 */
async function billingSubscriptionsMerge(): Promise<void> {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const billingSubscriptionName = "11111111-1111-1111-1111-111111111111";
  const parameters: BillingSubscriptionMergeRequest = {
    quantity: 1,
    targetBillingSubscriptionName: "22222222-2222-2222-2222-222222222222",
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.billingSubscriptions.beginMergeAndWait(
    billingAccountName,
    billingSubscriptionName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await billingSubscriptionsMerge();
}

main().catch(console.error);
