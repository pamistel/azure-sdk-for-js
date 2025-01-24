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
  LabsListOptionalParams} from "@azure/arm-education";
import {
  EducationManagementClient
} from "@azure/arm-education";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 *
 * @summary Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/LabListWithInvoiceSectionName.json
 */
async function labListWithInvoiceSectionName() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const includeBudget = true;
  const options: LabsListOptionalParams = { includeBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.labs.list(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 *
 * @summary Get the details for a specific lab associated with the provided billing account name, billing profile name, and invoice section name.
 * x-ms-original-file: specification/education/resource-manager/Microsoft.Education/preview/2021-12-01-preview/examples/LabListWithInvoiceSectionNameIncludeBudget.json
 */
async function labListWithInvoiceSectionNameIncludeBudget() {
  const billingAccountName = "{billingAccountName}";
  const billingProfileName = "{billingProfileName}";
  const invoiceSectionName = "{invoiceSectionName}";
  const includeBudget = true;
  const options: LabsListOptionalParams = { includeBudget };
  const credential = new DefaultAzureCredential();
  const client = new EducationManagementClient(credential);
  const resArray = new Array();
  for await (const item of client.labs.list(
    billingAccountName,
    billingProfileName,
    invoiceSectionName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await labListWithInvoiceSectionName();
  await labListWithInvoiceSectionNameIncludeBudget();
}

main().catch(console.error);
