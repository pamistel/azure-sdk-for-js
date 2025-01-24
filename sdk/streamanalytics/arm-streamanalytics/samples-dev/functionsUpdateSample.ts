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
  FunctionModel} from "@azure/arm-streamanalytics";
import {
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
 *
 * @summary Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Function_Update_JavaScript.json
 */
async function updateAJavaScriptFunction() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg1637";
  const jobName = "sj8653";
  const functionName = "function8197";
  const functionParam: FunctionModel = {
    properties: {
      type: "Scalar",
      binding: {
        type: "Microsoft.StreamAnalytics/JavascriptUdf",
        script: "function (a, b) { return a * b; }",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.functions.update(
    resourceGroupName,
    jobName,
    functionName,
    functionParam,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
 *
 * @summary Updates an existing function under an existing streaming job. This can be used to partially update (ie. update one or two properties) a function without affecting the rest the job or function definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Function_Update_AzureML.json
 */
async function updateAnAzureMlFunction() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7";
  const jobName = "sj9093";
  const functionName = "function588";
  const functionParam: FunctionModel = {
    properties: {
      type: "Scalar",
      binding: {
        type: "Microsoft.MachineLearning/WebService",
        batchSize: 5000,
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.functions.update(
    resourceGroupName,
    jobName,
    functionName,
    functionParam,
  );
  console.log(result);
}

async function main() {
  await updateAJavaScriptFunction();
  await updateAnAzureMlFunction();
}

main().catch(console.error);
