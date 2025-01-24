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
  Output} from "@azure/arm-streamanalytics";
import {
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_DeltaLake.json
 */
async function updateADeltaLakeOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "output1221";
  const output: Output = {
    datasource: { type: "Microsoft.Storage/Blob", container: "deltaoutput2" },
    serialization: {
      type: "Delta",
      deltaTablePath: "/folder1/table2",
      partitionColumns: ["column2"],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_DocumentDB.json
 */
async function updateADocumentDbOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/DocumentDB",
      partitionKey: "differentPartitionKey",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_PowerBI.json
 */
async function updateAPowerBiOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg7983";
  const jobName = "sj2331";
  const outputName = "output3022";
  const output: Output = {
    datasource: { type: "PowerBI", dataset: "differentDataset" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_ServiceBusQueue.json
 */
async function updateAServiceBusQueueOutputWithAvroSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg3410";
  const jobName = "sj5095";
  const outputName = "output3456";
  const output: Output = {
    datasource: {
      type: "Microsoft.ServiceBus/Queue",
      queueName: "differentQueueName",
    },
    serialization: { type: "Json", format: "LineSeparated", encoding: "UTF8" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_ServiceBusTopic.json
 */
async function updateAServiceBusTopicOutputWithCsvSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6450";
  const jobName = "sj7094";
  const outputName = "output7886";
  const output: Output = {
    datasource: {
      type: "Microsoft.ServiceBus/Topic",
      topicName: "differentTopicName",
    },
    serialization: { type: "Csv", encoding: "UTF8", fieldDelimiter: "|" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_Blob.json
 */
async function updateABlobOutputWithCsvSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg5023";
  const jobName = "sj900";
  const outputName = "output1623";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/Blob",
      container: "differentContainer",
    },
    serialization: { type: "Csv", encoding: "UTF8", fieldDelimiter: "|" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_AzureDataLakeStore.json
 */
async function updateAnAzureDataLakeStoreOutputWithJsonSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6912";
  const jobName = "sj3310";
  const outputName = "output5195";
  const output: Output = {
    datasource: {
      type: "Microsoft.DataLake/Accounts",
      accountName: "differentaccount",
    },
    serialization: { type: "Json", format: "LineSeparated", encoding: "UTF8" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_DataWarehouse.json
 */
async function updateAnAzureDataWarehouseOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "dwOutput";
  const output: Output = {
    datasource: {
      type: "Microsoft.Sql/Server/Database",
      table: "differentTable",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_AzureFunction.json
 */
async function updateAnAzureFunctionOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg";
  const jobName = "sjName";
  const outputName = "azureFunction1";
  const output: Output = {
    datasource: {
      type: "Microsoft.AzureFunction",
      functionName: "differentFunctionName",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_AzureSQL.json
 */
async function updateAnAzureSqlDatabaseOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg2157";
  const jobName = "sj6458";
  const outputName = "output1755";
  const output: Output = {
    datasource: {
      type: "Microsoft.Sql/Server/Database",
      table: "differentTable",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_AzureTable.json
 */
async function updateAnAzureTableOutput() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg5176";
  const jobName = "sj2790";
  const outputName = "output958";
  const output: Output = {
    datasource: {
      type: "Microsoft.Storage/Table",
      partitionKey: "differentPartitionKey",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 *
 * @summary Updates an existing output under an existing streaming job. This can be used to partially update (ie. update one or two properties) an output without affecting the rest the job or output definition.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Output_Update_EventHub.json
 */
async function updateAnEventHubOutputWithJsonSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6912";
  const jobName = "sj3310";
  const outputName = "output5195";
  const output: Output = {
    datasource: {
      type: "Microsoft.ServiceBus/EventHub",
      partitionKey: "differentPartitionKey",
    },
    serialization: { type: "Json", format: "LineSeparated", encoding: "UTF8" },
  };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.outputs.update(
    resourceGroupName,
    jobName,
    outputName,
    output,
  );
  console.log(result);
}

async function main() {
  await updateADeltaLakeOutput();
  await updateADocumentDbOutput();
  await updateAPowerBiOutput();
  await updateAServiceBusQueueOutputWithAvroSerialization();
  await updateAServiceBusTopicOutputWithCsvSerialization();
  await updateABlobOutputWithCsvSerialization();
  await updateAnAzureDataLakeStoreOutputWithJsonSerialization();
  await updateAnAzureDataWarehouseOutput();
  await updateAnAzureFunctionOutput();
  await updateAnAzureSqlDatabaseOutput();
  await updateAnAzureTableOutput();
  await updateAnEventHubOutputWithJsonSerialization();
}

main().catch(console.error);
