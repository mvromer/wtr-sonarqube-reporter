import path from 'path';

import type { Reporter } from '@web/test-runner-core';

export interface SonarQubeReporterArgs {
  /**
   * Optional path to write the test results file. Can be either an absolute path or a path relative
   * to the current working directory. Defaults to `test-sonar.xml`.
   */
  outputPath?: string;
}

export function sonarQubeReporter({
  outputPath = 'test-sonar.xml'
}: SonarQubeReporterArgs): Reporter {
  return {
    stop({ sessions }) {
      const resultsFileName = path.resolve(process.cwd(), outputPath);
    }
  };
}
