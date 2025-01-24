/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { RecorderStartOptions } from "@azure-tools/test-recorder";
import { env, Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { ContainerRegistryManagementClient } from "../src/containerRegistryManagementClient.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888",
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
  removeCentralSanitizers: [
    "AZSDK3493", // .name in the body is not a secret and is listed below in the beforeEach section
    "AZSDK3430", // .id in the body is not a secret and is listed below in the beforeEach section
  ],
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("ContainerRegistry test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: ContainerRegistryManagementClient;
  let location: string;
  let resourceGroup: string;
  let registryName: string;
  // let importPipelineName: string;
  // let exportPipelineName: string;
  let taskName: string;

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new ContainerRegistryManagementClient(
      credential,
      subscriptionId,
      recorder.configureClientOptions({}),
    );
    location = "eastus";
    resourceGroup = "myjstest";
    registryName = "myregistryxxxyy";
    // importPipelineName = "myimportpipelinexxx";
    // exportPipelineName = 'myexportpipelinexxx';
    taskName = "mytaskxxx";
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("registries create test", async () => {
    const res = await client.registries.beginCreateAndWait(
      resourceGroup,
      registryName,
      {
        location: location,
        tags: {
          key: "value",
        },
        sku: {
          name: "Premium",
        },
        adminUserEnabled: false,
      },
      testPollingOptions,
    );
    assert.equal(res.name, registryName);
  });

  it("tasks create test", async () => {
    const res = await client.tasks.beginCreateAndWait(
      resourceGroup,
      registryName,
      taskName,
      {
        location: location,
        tags: {
          testkey: "value",
        },
        status: "Enabled",
        platform: {
          os: "Linux",
          architecture: "amd64",
        },
        agentConfiguration: {
          cpu: 2,
        },
        step: {
          type: "Docker",
          contextPath: "https://github.com/SteveLasker/node-helloworld",
          imageNames: ["testtask:v1"],
          dockerFilePath: "DockerFile",
          isPushEnabled: true,
          noCache: false,
        },
        trigger: {
          baseImageTrigger: {
            name: "myBaseImageTrigger",
            baseImageTriggerType: "Runtime",
            updateTriggerPayloadType: "Default",
            status: "Enabled",
          },
        },
      },
      testPollingOptions,
    );
    assert.equal(res.name, taskName);
  });

  it("tasks get test", async () => {
    const res = await client.tasks.get(resourceGroup, registryName, taskName);
    assert.equal(res.name, taskName);
  });

  it("tasks list test", async () => {
    const resArray = new Array();
    for await (const item of client.tasks.list(resourceGroup, registryName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("tasks update test", async () => {
    const res = await client.tasks.beginUpdateAndWait(
      resourceGroup,
      registryName,
      taskName,
      {
        tags: {
          testkey: "value",
        },
        status: "Enabled",
        platform: {
          os: "Linux",
          architecture: "amd64",
        },
        agentConfiguration: {
          cpu: 2,
        },
        step: {
          type: "Docker",
          contextPath: "https://github.com/SteveLasker/node-helloworld",
          imageNames: ["testtask:v1"],
          dockerFilePath: "DockerFile",
          isPushEnabled: true,
          noCache: false,
        },
        trigger: {
          baseImageTrigger: {
            name: "myBaseImageTrigger",
            baseImageTriggerType: "Runtime",
            updateTriggerPayloadType: "Default",
            status: "Enabled",
          },
        },
      },
      testPollingOptions,
    );
    assert.equal(res.type, "Microsoft.ContainerRegistry/registries/tasks");
  });

  it("tasks delete test", async () => {
    await client.tasks.beginDeleteAndWait(
      resourceGroup,
      registryName,
      taskName,
      testPollingOptions,
    );
    const resArray = new Array();
    for await (const item of client.tasks.list(resourceGroup, registryName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("registries delete test", async () => {
    await client.registries.beginDeleteAndWait(resourceGroup, registryName, testPollingOptions);
  });
});
