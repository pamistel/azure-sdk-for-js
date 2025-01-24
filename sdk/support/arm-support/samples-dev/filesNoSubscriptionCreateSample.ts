/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { FileDetails} from "@azure/arm-support";
import { MicrosoftSupport } from "@azure/arm-support";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a new file under a workspace.
 *
 * @summary Creates a new file under a workspace.
 * x-ms-original-file: specification/support/resource-manager/Microsoft.Support/stable/2024-04-01/examples/CreateFile.json
 */
async function createAFileWorkspace() {
  const fileWorkspaceName = "testworkspace";
  const fileName = "test.txt";
  const createFileParameters: FileDetails = {
    chunkSize: 41423,
    fileSize: 41423,
    numberOfChunks: 1,
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftSupport(credential);
  const result = await client.filesNoSubscription.create(
    fileWorkspaceName,
    fileName,
    createFileParameters,
  );
  console.log(result);
}

async function main() {
  await createAFileWorkspace();
}

main().catch(console.error);
