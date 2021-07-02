/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";

import { useVersions, useLatestVersion } from "@theme/hooks/useDocs";

import VersionsArchived from "@site/versionsArchived.json";

const VersionsArchivedList = Object.entries(VersionsArchived);

function Version() {
  const versions = useVersions();
  const latestVersion = useLatestVersion();
  const pastVersions = versions.filter(
    (version) => version !== latestVersion && version.name !== "current"
  );

  return (
    <Layout
      title="Versions"
      description="Docusaurus 2 Versions page listing all documented site versions"
    >
      <main className="container margin-vert--lg">
        <h1>Docusaurus documentation versions</h1>

        {latestVersion && (
          <div className="margin-bottom--lg">
            <h3 id="next">Current version (Stable)</h3>
            <p>
              Here you can find the documentation for current released version.
            </p>
            <table>
              <tbody>
                <tr>
                  <th>{latestVersion.label}</th>
                  <td>
                    <Link to={latestVersion.path + "/getting-started/overview"}>
                      Documentation
                    </Link>
                  </td>
                  <td>
                    <a href={`stable/getting-started/summaryofchanges/`}>
                      Release Notes
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {(pastVersions.length > 0 || VersionsArchived.length > 0) && (
          <div className="margin-bottom--lg">
            <h3 id="archive">Past versions (Not maintained anymore)</h3>
            <p>
              Here you can find documentation for previous versions of Zowe.
            </p>
            <table>
              <tbody>
                {pastVersions.map((version) => (
                  <tr key={version.name}>
                    <th>{version.label}</th>
                    <td>
                      <Link to={version.path + "/getting-started/overview"}>
                        Documentation
                      </Link>
                    </td>
                    <td>
                      <a href={`${version.name}/getting-started/overview`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
                {VersionsArchivedList.map(([versionName, versionUrl]) => (
                  <tr key={versionName}>
                    <th>{versionName}</th>
                    <td>
                      <Link to={versionUrl}>Documentation</Link>
                    </td>
                    <td>
                      <a href={`stable/getting-started/summaryofchanges/`}>
                        Release Notes
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </Layout>
  );
}

export default Version;
