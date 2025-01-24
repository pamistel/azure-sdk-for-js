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
  CheckCapacityNameAvailabilityParameters} from "@azure/arm-powerbidedicated";
import {
  PowerBIDedicated
} from "@azure/arm-powerbidedicated";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Check the name availability in the target location.
 *
 * @summary Check the name availability in the target location.
 * x-ms-original-file: specification/powerbidedicated/resource-manager/Microsoft.PowerBIdedicated/stable/2021-01-01/examples/checkNameAvailability.json
 */
async function checkNameAvailabilityOfACapacity() {
  const subscriptionId =
    process.env["POWERBIDEDICATED_SUBSCRIPTION_ID"] ||
    "613192d7-503f-477a-9cfe-4efc3ee2bd60";
  const location = "West US";
  const capacityParameters: CheckCapacityNameAvailabilityParameters = {
    name: "azsdktest",
    type: "Microsoft.PowerBIDedicated/capacities"
  };
  const credential = new DefaultAzureCredential();
  const client = new PowerBIDedicated(credential, subscriptionId);
  const result = await client.capacities.checkNameAvailability(
    location,
    capacityParameters
  );
  console.log(result);
}

async function main() {
  await checkNameAvailabilityOfACapacity();
}

main().catch(console.error);
