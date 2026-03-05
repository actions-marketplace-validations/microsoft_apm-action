/**
 * Run the APM action: install agent primitives.
 *
 * Default behavior (no inputs): reads apm.yml, runs apm install. Done.
 * With `dependencies` input: generates a temporary apm.yml from the inline list.
 * With `compile: true`: runs apm compile after install to generate AGENTS.md.
 * With `script` input: runs an apm script after install.
 */
export declare function run(): Promise<void>;
