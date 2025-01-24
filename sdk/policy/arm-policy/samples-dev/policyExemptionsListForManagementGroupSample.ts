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
  PolicyExemptionsListForManagementGroupOptionalParams} from "@azure/arm-policy";
import {
  PolicyClient
} from "@azure/arm-policy";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This operation retrieves the list of all policy exemptions applicable to the management group that match the given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter=atScope() is provided, the returned list includes all policy exemptions that are assigned to the management group or the management group's ancestors.
 *
 * @summary This operation retrieves the list of all policy exemptions applicable to the management group that match the given $filter. Valid values for $filter are: 'atScope()', 'atExactScope()', 'excludeExpired()' or 'policyAssignmentId eq '{value}''. If $filter=atScope() is provided, the returned list includes all policy exemptions that are assigned to the management group or the management group's ancestors.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/preview/2020-07-01-preview/examples/listPolicyExemptionsForManagementGroup.json
 */
async function listPolicyExemptionsThatApplyToAManagementGroup() {
  const subscriptionId =
    process.env["POLICY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const managementGroupId = "DevOrg";
  const filter = "atScope()";
  const options: PolicyExemptionsListForManagementGroupOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new PolicyClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.policyExemptions.listForManagementGroup(
    managementGroupId,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listPolicyExemptionsThatApplyToAManagementGroup();
}

main().catch(console.error);
