/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { AzureQuotaExtensionAPI } from "@azure/arm-quota";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get API to check the status of a GroupQuota request by requestId.
 *
 * @summary Get API to check the status of a GroupQuota request by requestId.
 * x-ms-original-file: specification/quota/resource-manager/Microsoft.Quota/preview/2024-12-18-preview/examples/GroupQuotaLimitsRequests/GroupQuotaLimitsRequests_List.json
 */
async function groupQuotaLimitsRequestList(): Promise<void> {
  const managementGroupId = "E7EC67B3-7657-4966-BFFC-41EFD36BAA09";
  const groupQuotaName = "groupquota1";
  const resourceProviderName = "Microsoft.Compute";
  const filter = "location eq westus";
  const credential = new DefaultAzureCredential();
  const client = new AzureQuotaExtensionAPI(credential);
  const resArray = new Array();
  for await (const item of client.groupQuotaLimitsRequest.list(
    managementGroupId,
    groupQuotaName,
    resourceProviderName,
    filter,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main(): Promise<void> {
  await groupQuotaLimitsRequestList();
}

main().catch(console.error);
