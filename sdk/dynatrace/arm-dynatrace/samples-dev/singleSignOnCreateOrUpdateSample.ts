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
  DynatraceSingleSignOnResource} from "@azure/arm-dynatrace";
import {
  DynatraceObservability
} from "@azure/arm-dynatrace";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a DynatraceSingleSignOnResource
 *
 * @summary Create a DynatraceSingleSignOnResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2023-04-27/examples/SingleSignOn_CreateOrUpdate_MaximumSet_Gen.json
 */
async function singleSignOnCreateOrUpdateMaximumSetGen() {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const configurationName = "default";
  const resource: DynatraceSingleSignOnResource = {
    aadDomains: ["mpliftrdt20210811outlook.onmicrosoft.com"],
    enterpriseAppId: "00000000-0000-0000-0000-000000000000",
    provisioningState: "Accepted",
    singleSignOnState: "Enable",
    singleSignOnUrl: "https://www.dynatrace.io"
  };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.singleSignOn.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    configurationName,
    resource
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create a DynatraceSingleSignOnResource
 *
 * @summary Create a DynatraceSingleSignOnResource
 * x-ms-original-file: specification/dynatrace/resource-manager/Dynatrace.Observability/stable/2023-04-27/examples/SingleSignOn_CreateOrUpdate_MinimumSet_Gen.json
 */
async function singleSignOnCreateOrUpdateMinimumSetGen() {
  const subscriptionId =
    process.env["DYNATRACE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DYNATRACE_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const configurationName = "default";
  const resource: DynatraceSingleSignOnResource = {
    aadDomains: ["mpliftrdt20210811outlook.onmicrosoft.com"],
    singleSignOnUrl: "https://www.dynatrace.io"
  };
  const credential = new DefaultAzureCredential();
  const client = new DynatraceObservability(credential, subscriptionId);
  const result = await client.singleSignOn.beginCreateOrUpdateAndWait(
    resourceGroupName,
    monitorName,
    configurationName,
    resource
  );
  console.log(result);
}

async function main() {
  await singleSignOnCreateOrUpdateMaximumSetGen();
  await singleSignOnCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
