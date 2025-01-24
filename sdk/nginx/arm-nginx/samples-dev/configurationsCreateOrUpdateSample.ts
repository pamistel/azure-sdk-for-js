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
  NginxConfiguration,
  ConfigurationsCreateOrUpdateOptionalParams} from "@azure/arm-nginx";
import {
  NginxManagementClient,
} from "@azure/arm-nginx";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update the NGINX configuration for given NGINX deployment
 *
 * @summary Create or update the NGINX configuration for given NGINX deployment
 * x-ms-original-file: specification/nginx/resource-manager/NGINX.NGINXPLUS/preview/2024-01-01-preview/examples/Configurations_CreateOrUpdate.json
 */
async function configurationsCreateOrUpdate() {
  const subscriptionId =
    process.env["NGINX_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["NGINX_RESOURCE_GROUP"] || "myResourceGroup";
  const deploymentName = "myDeployment";
  const configurationName = "default";
  const body: NginxConfiguration = {
    properties: {
      files: [{ content: "ABCDEF==", virtualPath: "/etc/nginx/nginx.conf" }],
      package: { data: undefined },
      rootFile: "/etc/nginx/nginx.conf",
    },
  };
  const options: ConfigurationsCreateOrUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new NginxManagementClient(credential, subscriptionId);
  const result = await client.configurations.beginCreateOrUpdateAndWait(
    resourceGroupName,
    deploymentName,
    configurationName,
    options,
  );
  console.log(result);
}

async function main() {
  await configurationsCreateOrUpdate();
}

main().catch(console.error);
