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
  RegenerateTestKeyRequestPayload} from "@azure/arm-appplatform";
import {
  AppPlatformManagementClient
} from "@azure/arm-appplatform";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Regenerate a test key for a Service.
 *
 * @summary Regenerate a test key for a Service.
 * x-ms-original-file: specification/appplatform/resource-manager/Microsoft.AppPlatform/stable/2023-12-01/examples/Services_RegenerateTestKey.json
 */
async function servicesRegenerateTestKey(): Promise<void> {
  const subscriptionId =
    process.env["APPPLATFORM_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["APPPLATFORM_RESOURCE_GROUP"] || "myResourceGroup";
  const serviceName = "myservice";
  const regenerateTestKeyRequest: RegenerateTestKeyRequestPayload = {
    keyType: "Primary"
  };
  const credential = new DefaultAzureCredential();
  const client = new AppPlatformManagementClient(credential, subscriptionId);
  const result = await client.services.regenerateTestKey(
    resourceGroupName,
    serviceName,
    regenerateTestKeyRequest
  );
  console.log(result);
}

async function main(): Promise<void> {
  await servicesRegenerateTestKey();
}

main().catch(console.error);
