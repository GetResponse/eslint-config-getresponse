/* eslint-disable @stylistic/max-len */
const escape = (s) =>
    String(s ?? '')
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;');

const ruleNameCell = (rule) => {
    const name = rule.url
        ? `<a class="name" href="${escape(rule.url)}" target="_blank" rel="noopener">${escape(rule.name)}</a>`
        : `<span class="name">${escape(rule.name)}</span>`;
    const source = `<span class="source">${escape(rule.source)}</span>`;
    const description = rule.description ? `<div class="desc">${escape(rule.description)}</div>` : '';

    return `${name} ${source}${description}`;
};

const renderEnabledRow = (rule) => `
    <tr>
        <td>${ruleNameCell(rule)}</td>
        <td class="status ${rule.status}">${rule.status}</td>
        <td><pre>${rule.options.length ? escape(JSON.stringify(rule.options, null, '  ')) : ' - '}</pre></td>
    </tr>`;

const renderSimpleRow = (rule) => `
    <tr>
        <td>${ruleNameCell(rule)}</td>
    </tr>`;

const STYLES = `
    html, body { margin: 0; padding: 0; background: #fff; color: #222; }
    body { font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif; font-size: 14px; line-height: 1.5; }
    h1 { font-size: 24px; font-weight: 700; line-height: 1.1; text-align: center; position: sticky; top: 0; background: #fff; padding: .83em; margin: 0; z-index: 2; }
    section { margin-bottom: 1em; }
    p.summary { text-align: center; color: #666; margin: 0 0 1.5em; padding: 0 1em; }
    table { width: 100%; border-spacing: 0; border-collapse: collapse; }
    td, th { padding: 10px 20px; vertical-align: top; }
    thead tr { background: #00baff; }
    th { color: #fff; font-weight: 700; letter-spacing: .02em; text-align: left; }
    tbody tr:nth-child(even) { background: #f6f3f3; }
    tbody tr:hover { background: #ebfaff; }
    .active-rules thead tr { position: sticky; top: 60px; }
    .name { font-weight: 500; color: #0066cc; text-decoration: none; }
    .name:hover { text-decoration: underline; }
    .source { display: inline-block; margin-left: 0.5em; padding: 0.05em 0.4em; font-size: 0.75em; color: #666; background: #eee; border-radius: 3px; vertical-align: middle; }
    .desc { color: #555; margin-top: 4px; font-size: 13px; }
    .status { text-align: center; font-weight: 600; }
    .status.warn { color: #e4762d; }
    .status.error { color: #e5101e; }
    pre { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 12px; margin: 0; white-space: pre-wrap; word-break: break-all; }
    col.col-rule { width: 50%; }
    col.col-status { width: 12%; }
    col.col-config { width: 38%; }
`;

const renderDeprecatedSection = (rules) =>
    rules.length
        ? `
<section>
    <h1>Deprecated rules (${rules.length})</h1>
    <table>
        <tbody>${rules.map(renderSimpleRow).join('')}</tbody>
    </table>
</section>
`
        : '';

const renderEnabledSection = (rules) => `
<section class="active-rules">
    <h1>Active rules (${rules.length})</h1>
    <table>
        <colgroup>
            <col class="col-rule">
            <col class="col-status">
            <col class="col-config">
        </colgroup>
        <thead>
            <tr><th>Rule</th><th>Status</th><th>Configuration</th></tr>
        </thead>
        <tbody>${rules.map(renderEnabledRow).join('')}</tbody>
    </table>
</section>`;

const renderUnusedSection = (rules) =>
    rules.length
        ? `
<section>
    <h1>Unused rules (${rules.length})</h1>
    <p class="summary">Rules available in the included plugins but not enabled by this config.</p>
    <table>
        <tbody>${rules.map(renderSimpleRow).join('')}</tbody>
    </table>
</section>
`
        : '';

export function renderHtml({ enabled, unused, deprecated }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>@getresponse/eslint-config — rules</title>
<style>${STYLES}</style>
</head>
<body>
${renderDeprecatedSection(deprecated)}
${renderEnabledSection(enabled)}
${renderUnusedSection(unused)}
</body>
</html>
`;
}
