/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { GuestAgent} from "@azure/arm-scvmm";
import { ScVmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create Or Update GuestAgent.
 *
 * @summary Create Or Update GuestAgent.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/GuestAgents_Create_MaximumSet_Gen.json
 */
async function guestAgentsCreateMaximumSet() {
  const resourceUri = "gtgclehcbsyave";
  const resource: GuestAgent = {
    properties: {
      credentials: {
        password: "SecretPlaceholder",
        username: "jqxuwirrcpfv",
      },
      httpProxyConfig: { httpsProxy: "uoyzyticmohohomlkwct" },
      provisioningAction: "install",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result = await client.guestAgents.beginCreateAndWait(
    resourceUri,
    resource,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create Or Update GuestAgent.
 *
 * @summary Create Or Update GuestAgent.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/stable/2023-10-07/examples/GuestAgents_Create_MinimumSet_Gen.json
 */
async function guestAgentsCreateMinimumSet() {
  const resourceUri = "gtgclehcbsyave";
  const resource: GuestAgent = {};
  const credential = new DefaultAzureCredential();
  const client = new ScVmm(credential);
  const result = await client.guestAgents.beginCreateAndWait(
    resourceUri,
    resource,
  );
  console.log(result);
}

async function main() {
  await guestAgentsCreateMaximumSet();
  await guestAgentsCreateMinimumSet();
}

main().catch(console.error);
