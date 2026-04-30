const isOff = (entry) => {
    const level = Array.isArray(entry) ? entry[0] : entry;
    return level === 0 || level === 'off';
};

const ruleStatus = (entry) => {
    const level = Array.isArray(entry) ? entry[0] : entry;
    if (level === 1 || level === 'warn') {
        return 'warn';
    }
    if (level === 2 || level === 'error') {
        return 'error';
    }
    return 'off';
};

export function classifyRules({ mergedRules, registry }) {
    const enabled = [];
    const unused = [];
    const deprecated = [];

    for (const [name, info] of [...registry.entries()].sort(([a], [b]) => a.localeCompare(b))) {
        const entry = mergedRules[name];
        const description = info.meta?.docs?.description ?? '';
        const url = info.meta?.docs?.url ?? '';
        const isDeprecated = Boolean(info.meta?.deprecated);

        if (entry !== undefined && !isOff(entry)) {
            const status = ruleStatus(entry);
            const options = Array.isArray(entry) ? entry.slice(1) : [];

            enabled.push({ name, status, options, description, url, source: info.source, deprecated: isDeprecated });

            if (isDeprecated) {
                deprecated.push({ name, description, url, source: info.source });
            }
        } else {
            unused.push({ name, description, url, source: info.source, deprecated: isDeprecated });
        }
    }

    return { enabled, unused, deprecated };
}
