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
  VariableCreateOrUpdateParameters} from "@azure/arm-automation";
import {
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a variable.
 *
 * @summary Create a variable.
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/preview/2020-01-13-preview/examples/createOrUpdateVariable.json
 */
async function createOrUpdateAVariable(): Promise<void> {
  const subscriptionId = process.env["AUTOMATION_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["AUTOMATION_RESOURCE_GROUP"] || "rg";
  const automationAccountName = "sampleAccount9";
  const variableName = "sampleVariable";
  const parameters: VariableCreateOrUpdateParameters = {
    name: "sampleVariable",
    description: "my description",
    isEncrypted: false,
    value: '"ComputerName.domain.com"'
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.variableOperations.createOrUpdate(
    resourceGroupName,
    automationAccountName,
    variableName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateAVariable();
}

main().catch(console.error);
