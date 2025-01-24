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
  TestLineUpdate} from "@azure/arm-voiceservices";
import {
  MicrosoftVoiceServices
} from "@azure/arm-voiceservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a TestLine
 *
 * @summary Update a TestLine
 * x-ms-original-file: specification/voiceservices/resource-manager/Microsoft.VoiceServices/stable/2023-01-31/examples/TestLines_Update.json
 */
async function updateTestLineResource(): Promise<void> {
  const subscriptionId =
    process.env["VOICESERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["VOICESERVICES_RESOURCE_GROUP"] || "testrg";
  const communicationsGatewayName = "myname";
  const testLineName = "myline";
  const properties: TestLineUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftVoiceServices(credential, subscriptionId);
  const result = await client.testLines.update(
    resourceGroupName,
    communicationsGatewayName,
    testLineName,
    properties
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateTestLineResource();
}

main().catch(console.error);
