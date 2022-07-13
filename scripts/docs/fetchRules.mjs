import fetch from 'node-fetch';

async function fetchAndParse(url, regexp, accumulator) {
    const result = await fetch(url);

    if (!result.ok) {
        throw new Error(`Failed to resolve rules from: ${url}`);
    }

    const content = await result.text();
    const matches = content.matchAll(regexp);

    return Array.from(matches).reduce(
        (result, matchArray) => Object.assign(result, accumulator(matchArray)),
        {},
    );
}

function fetchStandardRules() {
    return fetchAndParse(
        'https://eslint.org/docs/latest/rules',
        /"rule__name">(.*?)(?:<\/a>|<span).*?"rule__description">(.*?)<\/p>/gs,
        ([, name, description]) => ({
            [name.trim()]: {
                description: description.trim().replaceAll('href="/', 'target="_blank" href="https://eslint.org/'),
                url: new URL(name.trim(), 'https://eslint.org/docs/latest/rules/').toString(),
            },
        }),
    );
}

function fetchReactRules() {
    return fetchAndParse(
        'https://raw.githubusercontent.com/jsx-eslint/eslint-plugin-react/master/README.md',
        /^.*?\[(react\/.*?)]\((.*?)\) \| (.*?) \|/gm,
        ([, name, path, description]) => ({
            [name.trim()]: {
                description: description.trim(),
                url: new URL(path.trim(), 'https://github.com/jsx-eslint/eslint-plugin-react/blob/master/').toString(),
            },
        }),
    );
}

function fetchTypeScriptRules() {
    return fetchAndParse(
        'https://typescript-eslint.io/rules/',
        /<td><a href="(.*?)"><code>(.*?)<\/code><\/a><br>(.*?)<\/td>/g,
        ([, path, name, description]) => ({
            [name.trim().replace('<!-- -->', '')]: {
                description: description.trim(),
                url: new URL(path, 'https://typescript-eslint.io/').toString(),
            },
        }),
    );
}

function fetchJestRules() {
    return fetchAndParse(
        'https://raw.githubusercontent.com/jest-community/eslint-plugin-jest/main/README.md',
        /\| \[(.*?)]\((.*?)\).*?\| (.*?)\|/g,
        ([, name, path, description]) => ({
            [`jest/${name.trim()}`]: {
                description: description.trim(),
                url: new URL(path, 'https://github.com/jest-community/eslint-plugin-jest/blob/main/').toString(),
            },
        })
    );
}

export async function fetchRules() {
    const data = await Promise.all([
        fetchStandardRules(),
        fetchReactRules(),
        fetchTypeScriptRules(),
        fetchJestRules(),
    ]);

    return data.reduce((all, current) => ({...all, ...current}), {});
}
