// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how get a list of collections
 *
 * @summary gets a list of collections
 */

const { PurviewAccount } = require("@azure-rest/purview-administration");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

const endpoint = process.env["ENDPOINT"] || "";

async function main() {
  console.log("== List collections sample ==");
  const client = PurviewAccount.createClient(endpoint, new DefaultAzureCredential());

  const response = await client.path("/collections").get();

  if (response.status !== "200") {
    console.log(`GET "/collections" failed with ${response.status}`);
  }

  const dataSources = PurviewAccount.PaginateHelper.paginate(client, response);

  for await (const dataSource of dataSources) {
    console.log(dataSource);
  }
}

main().catch(console.error);
