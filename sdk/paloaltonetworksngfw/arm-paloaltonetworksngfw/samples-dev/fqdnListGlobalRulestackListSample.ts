/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PaloAltoNetworksCloudngfw } from "@azure/arm-paloaltonetworksngfw";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List FqdnListGlobalRulestackResource resources by Tenant
 *
 * @summary List FqdnListGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/FqdnListGlobalRulestack_List_MaximumSet_Gen.json
 */
async function fqdnListGlobalRulestackListMaximumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const resArray = new Array();
  for await (const item of client.fqdnListGlobalRulestack.list(
    globalRulestackName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List FqdnListGlobalRulestackResource resources by Tenant
 *
 * @summary List FqdnListGlobalRulestackResource resources by Tenant
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2023-09-01/examples/FqdnListGlobalRulestack_List_MinimumSet_Gen.json
 */
async function fqdnListGlobalRulestackListMinimumSetGen() {
  const globalRulestackName = "praval";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const resArray = new Array();
  for await (const item of client.fqdnListGlobalRulestack.list(
    globalRulestackName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await fqdnListGlobalRulestackListMaximumSetGen();
  await fqdnListGlobalRulestackListMinimumSetGen();
}

main().catch(console.error);
