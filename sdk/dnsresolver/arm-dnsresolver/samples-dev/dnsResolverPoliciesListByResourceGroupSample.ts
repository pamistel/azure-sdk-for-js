/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { DnsResolverManagementClient } from "@azure/arm-dnsresolver";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists DNS resolver policies within a resource group.
 *
 * @summary Lists DNS resolver policies within a resource group.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2023-07-01-preview/examples/DnsResolverPolicy_ListByResourceGroup.json
 */
async function listDnsResolverPoliciesByResourceGroup() {
  const subscriptionId =
    process.env["DNSRESOLVER_SUBSCRIPTION_ID"] ||
    "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName =
    process.env["DNSRESOLVER_RESOURCE_GROUP"] || "sampleResourceGroup";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.dnsResolverPolicies.listByResourceGroup(
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listDnsResolverPoliciesByResourceGroup();
}

main().catch(console.error);
