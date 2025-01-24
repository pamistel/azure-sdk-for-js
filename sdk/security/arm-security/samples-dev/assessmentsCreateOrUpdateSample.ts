/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { SecurityAssessment} from "@azure/arm-security";
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create a security assessment on your resource. An assessment metadata that describes this assessment must be predefined with the same name before inserting the assessment result
 *
 * @summary Create a security assessment on your resource. An assessment metadata that describes this assessment must be predefined with the same name before inserting the assessment result
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2021-06-01/examples/Assessments/PutAssessment_example.json
 */
async function createSecurityRecommendationTaskOnAResource() {
  const resourceId =
    "subscriptions/20ff7fc3-e762-44dd-bd96-b71116dcdc23/resourceGroups/myRg/providers/Microsoft.Compute/virtualMachineScaleSets/vmss2";
  const assessmentName = "8bb8be0a-6010-4789-812f-e4d661c4ed0e";
  const assessment: SecurityAssessment = {
    resourceDetails: { source: "Azure" },
    status: { code: "Healthy" },
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential);
  const result = await client.assessments.createOrUpdate(
    resourceId,
    assessmentName,
    assessment,
  );
  console.log(result);
}

async function main() {
  await createSecurityRecommendationTaskOnAResource();
}

main().catch(console.error);
