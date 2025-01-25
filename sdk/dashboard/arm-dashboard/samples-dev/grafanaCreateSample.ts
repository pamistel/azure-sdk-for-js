/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { ManagedGrafana } from "@azure/arm-dashboard";
import { DashboardManagementClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 *
 * @summary Create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 * x-ms-original-file: specification/dashboard/resource-manager/Microsoft.Dashboard/stable/2023-09-01/examples/Grafana_Create.json
 */
async function grafanaCreate(): Promise<void> {
  const subscriptionId =
    process.env["DASHBOARD_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["DASHBOARD_RESOURCE_GROUP"] || "myResourceGroup";
  const workspaceName = "myWorkspace";
  const requestBodyParameters: ManagedGrafana = {
    identity: { type: "SystemAssigned" },
    location: "West US",
    properties: {
      apiKey: "Enabled",
      deterministicOutboundIP: "Enabled",
      enterpriseConfigurations: {
        marketplaceAutoRenew: "Enabled",
        marketplacePlanId: "myPlanId",
      },
      grafanaConfigurations: {
        smtp: {
          enabled: true,
          fromAddress: "test@sendemail.com",
          fromName: "emailsender",
          host: "smtp.sendemail.com:587",
          password: "<password>",
          skipVerify: true,
          startTLSPolicy: "OpportunisticStartTLS",
          user: "username",
        },
      },
      grafanaIntegrations: {
        azureMonitorWorkspaceIntegrations: [
          {
            azureMonitorWorkspaceResourceId:
              "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.monitor/accounts/myAzureMonitorWorkspace",
          },
        ],
      },
      grafanaMajorVersion: "9",
      grafanaPlugins: { samplePluginId: {} },
      publicNetworkAccess: "Enabled",
      zoneRedundancy: "Enabled",
    },
    sku: { name: "Standard" },
    tags: { environment: "Dev" },
  };
  const credential = new DefaultAzureCredential();
  const client = new DashboardManagementClient(credential, subscriptionId);
  const result = await client.grafana.beginCreateAndWait(
    resourceGroupName,
    workspaceName,
    requestBodyParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await grafanaCreate();
}

main().catch(console.error);
