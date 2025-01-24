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
  DnsResolverDomainList} from "@azure/arm-dnsresolver";
import {
  DnsResolverManagementClient,
} from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a DNS resolver domain list.
 *
 * @summary Creates or updates a DNS resolver domain list.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/DnsResolverDomainList_Put.json
 */
async function upsertDnsResolverDomainList() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const dnsResolverDomainListName = "sampleDnsResolverDomainList";
  const parameters: DnsResolverDomainList = {
    domains: ["contoso.com"],
    location: "westus2",
    tags: { key1: "value1" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.dnsResolverDomainLists.beginCreateOrUpdateAndWait(
    resourceGroupName,
    dnsResolverDomainListName,
    parameters,
  );
  console.log(result);
}

async function main() {
  await upsertDnsResolverDomainList();
}

main().catch(console.error);
