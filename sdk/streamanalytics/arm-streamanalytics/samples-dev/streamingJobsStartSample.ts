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
  StartStreamingJobParameters,
  StreamingJobsStartOptionalParams} from "@azure/arm-streamanalytics";
import {
  StreamAnalyticsManagementClient,
} from "@azure/arm-streamanalytics";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Starts a streaming job. Once a job is started it will start processing input events and produce output.
 *
 * @summary Starts a streaming job. Once a job is started it will start processing input events and produce output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Start_CustomTime.json
 */
async function startAStreamingJobWithCustomTimeOutputStartMode() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6936";
  const jobName = "sj59";
  const startJobParameters: StartStreamingJobParameters = {
    outputStartMode: "CustomTime",
    outputStartTime: new Date("2012-12-12T12:12:12Z"),
  };
  const options: StreamingJobsStartOptionalParams = { startJobParameters };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.streamingJobs.beginStartAndWait(
    resourceGroupName,
    jobName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Starts a streaming job. Once a job is started it will start processing input events and produce output.
 *
 * @summary Starts a streaming job. Once a job is started it will start processing input events and produce output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Start_JobStartTime.json
 */
async function startAStreamingJobWithJobStartTimeOutputStartMode() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6936";
  const jobName = "sj59";
  const startJobParameters: StartStreamingJobParameters = {
    outputStartMode: "JobStartTime",
  };
  const options: StreamingJobsStartOptionalParams = { startJobParameters };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.streamingJobs.beginStartAndWait(
    resourceGroupName,
    jobName,
    options,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Starts a streaming job. Once a job is started it will start processing input events and produce output.
 *
 * @summary Starts a streaming job. Once a job is started it will start processing input events and produce output.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/StreamingJob_Start_LastOutputEventTime.json
 */
async function startAStreamingJobWithLastOutputEventTimeOutputStartMode() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] ||
    "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName =
    process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg6936";
  const jobName = "sj59";
  const startJobParameters: StartStreamingJobParameters = {
    outputStartMode: "LastOutputEventTime",
  };
  const options: StreamingJobsStartOptionalParams = { startJobParameters };
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.streamingJobs.beginStartAndWait(
    resourceGroupName,
    jobName,
    options,
  );
  console.log(result);
}

async function main() {
  await startAStreamingJobWithCustomTimeOutputStartMode();
  await startAStreamingJobWithJobStartTimeOutputStartMode();
  await startAStreamingJobWithLastOutputEventTimeOutputStartMode();
}

main().catch(console.error);
