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
  GrantsListOptionalParams} from "@azure/arm-education";
import {
  EducationManagementClient
} from "@azure/arm-education";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get details for a specific grant linked to the provided billing account and billing profile.
 *
 * @summary Get details for a specific grant linked to the provided billing account and billing profile.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GrantDefaultList.json
 */
async function grantList() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const includeAllocatedBudget = false;
  const options: GrantsListOptionalParams = { includeAllocatedBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.grants.list(
    billingAccountName,
    billingProfileName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Get details for a specific grant linked to the provided billing account and billing profile.
 *
 * @summary Get details for a specific grant linked to the provided billing account and billing profile.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/GrantDefaultListIncludeAllocatedBudget.json
 */
async function grantListIncludeAllocatedBudget() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const includeAllocatedBudget = false;
  const options: GrantsListOptionalParams = { includeAllocatedBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.grants.list(
    billingAccountName,
    billingProfileName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await grantList();
  await grantListIncludeAllocatedBudget();
}

main().catch(console.error);
