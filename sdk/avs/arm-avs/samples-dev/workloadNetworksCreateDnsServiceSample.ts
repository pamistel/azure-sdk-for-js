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
  WorkloadNetworkDnsService} from "@azure/arm-avs";
import {
  AzureVMwareSolutionAPI,
} from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a WorkloadNetworkDnsService
 *
 * @summary Create a WorkloadNetworkDnsService
 * x-ms-original-file: specification/vmware/resource-manager/Microsoft.AVS/stable/2023-09-01/examples/WorkloadNetworks_CreateDnsService.json
 */
async function workloadNetworksCreateDnsService(): Promise<void> {
  const subscriptionId =
    process.env["AVS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["AVS_RESOURCE_GROUP"] || "group1";
  const privateCloudName = "cloud1";
  const dnsServiceId = "dnsService1";
  const workloadNetworkDnsService: WorkloadNetworkDnsService = {
    defaultDnsZone: "defaultDnsZone1",
    displayName: "dnsService1",
    dnsServiceIp: "5.5.5.5",
    fqdnZones: ["fqdnZone1"],
    logLevel: "INFO",
    revision: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureVMwareSolutionAPI(credential, subscriptionId);
  const result = await client.workloadNetworks.beginCreateDnsServiceAndWait(
    resourceGroupName,
    privateCloudName,
    dnsServiceId,
    workloadNetworkDnsService,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await workloadNetworksCreateDnsService();
}

main().catch(console.error);
