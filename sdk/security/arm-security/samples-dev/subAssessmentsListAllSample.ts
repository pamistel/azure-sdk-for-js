/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get security sub-assessments on all your scanned resources inside a subscription scope
 *
 * @summary Get security sub-assessments on all your scanned resources inside a subscription scope
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2019-01-01-preview/examples/SubAssessments/ListSubscriptionSubAssessments_example.json
 */
async function listSecuritySubAssessments() {
  const scope = "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const resArray = new Array();
  for await (const item of client.subAssessments.listAll(scope)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listSecuritySubAssessments();
}

main().catch(console.error);
