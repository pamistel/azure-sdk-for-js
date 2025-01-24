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
 * This sample demonstrates how to Get metadata information on all assessment types
 *
 * @summary Get metadata information on all assessment types
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-06-01/examples/AssessmentsMetadata/ListAssessmentsMetadata_example.json
 */
async function listSecurityAssessmentMetadata() {
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const resArray = new Array();
  for await (const item of client.assessmentsMetadata.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await listSecurityAssessmentMetadata();
}

main().catch(console.error);
