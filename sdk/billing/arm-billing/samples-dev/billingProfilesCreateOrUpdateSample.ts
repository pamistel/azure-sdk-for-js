/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { BillingProfile} from "@azure/arm-billing";
import { BillingManagementClient } from "@azure/arm-billing";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement. If you are a MCA Individual (Pay-as-you-go) customer, then please use the Azure portal experience to create the billing profile.
 *
 * @summary Creates or updates a billing profile. The operation is supported for billing accounts with agreement type Microsoft Customer Agreement and Microsoft Partner Agreement. If you are a MCA Individual (Pay-as-you-go) customer, then please use the Azure portal experience to create the billing profile.
 * x-ms-original-file: specification/billing/resource-manager/Microsoft.Billing/stable/2024-04-01/examples/billingProfilesCreateOrUpdate.json
 */
async function billingProfilesCreateOrUpdate(): Promise<void> {
  const billingAccountName =
    "00000000-0000-0000-0000-000000000000:00000000-0000-0000-0000-000000000000_2019-05-31";
  const billingProfileName = "xxxx-xxxx-xxx-xxx";
  const parameters: BillingProfile = {
    properties: {
      billTo: {
        addressLine1: "Test Address1",
        addressLine2: "Test Address2",
        addressLine3: "Test Address3",
        city: "City",
        companyName: "Contoso",
        country: "US",
        email: "abc@contoso.com",
        firstName: "Test",
        isValidAddress: true,
        lastName: "User",
        phoneNumber: "000-000-0000",
        postalCode: "00000",
        region: "WA",
      },
      displayName: "Billing Profile 1",
      enabledAzurePlans: [{ skuId: "0001" }, { skuId: "0002" }],
      invoiceEmailOptIn: true,
      poNumber: "ABC12345",
      shipTo: {
        addressLine1: "Test Address1",
        addressLine2: "Test Address2",
        addressLine3: "Test Address3",
        city: "City",
        companyName: "Contoso",
        country: "US",
        email: "abc@contoso.com",
        firstName: "Test",
        isValidAddress: true,
        lastName: "User",
        phoneNumber: "000-000-0000",
        postalCode: "00000",
        region: "WA",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new BillingManagementClient(credential);
  const result = await client.billingProfiles.beginCreateOrUpdateAndWait(
    billingAccountName,
    billingProfileName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await billingProfilesCreateOrUpdate();
}

main().catch(console.error);
