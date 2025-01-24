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
  CheckNameAvailabilityParameters} from "@azure/arm-recoveryservices";
import {
  RecoveryServicesClient,
} from "@azure/arm-recoveryservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to API to check for resource name availability.
A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
 *
 * @summary API to check for resource name availability.
A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/CheckNameAvailability_Available.json
 */
async function availabilityStatusOfResourceNameWhenNoResourceWithSameNameTypeAndSubscriptionExistsNorHasBeenDeletedWithinLast24Hours() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "resGroupFoo";
  const location = "westus";
  const input: CheckNameAvailabilityParameters = {
    name: "swaggerExample",
    type: "Microsoft.RecoveryServices/Vaults",
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.recoveryServices.checkNameAvailability(
    resourceGroupName,
    location,
    input,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to API to check for resource name availability.
A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
 *
 * @summary API to check for resource name availability.
A name is available if no other resource exists that has the same SubscriptionId, Resource Name and Type
or if one or more such resources exist, each of these must be GC'd and their time of deletion be more than 24 Hours Ago
 * x-ms-original-file: specification/recoveryservices/resource-manager/Microsoft.RecoveryServices/stable/2024-04-01/examples/CheckNameAvailability_NotAvailable.json
 */
async function availabilityStatusOfResourceNameWhenResourceWithSameNameTypeAndSubscriptionExists() {
  const subscriptionId =
    process.env["RECOVERYSERVICES_SUBSCRIPTION_ID"] ||
    "77777777-b0c6-47a2-b37c-d8e65a629c18";
  const resourceGroupName =
    process.env["RECOVERYSERVICES_RESOURCE_GROUP"] || "resGroupBar";
  const location = "westus";
  const input: CheckNameAvailabilityParameters = {
    name: "swaggerExample2",
    type: "Microsoft.RecoveryServices/Vaults",
  };
  const credential = new DefaultAzureCredential();
  const client = new RecoveryServicesClient(credential, subscriptionId);
  const result = await client.recoveryServices.checkNameAvailability(
    resourceGroupName,
    location,
    input,
  );
  console.log(result);
}

async function main() {
  await availabilityStatusOfResourceNameWhenNoResourceWithSameNameTypeAndSubscriptionExistsNorHasBeenDeletedWithinLast24Hours();
  await availabilityStatusOfResourceNameWhenResourceWithSameNameTypeAndSubscriptionExists();
}

main().catch(console.error);
