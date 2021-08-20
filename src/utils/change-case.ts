import camelcase from "camelcase";

export function changeCase(input: string, skip = false, options?: camelcase.Options) {
    if (skip) return input;
    else if (!options?.pascalCase) return input.replace(/\./g, ""); // need to remove dots in the input string, otherwise, code generation fails
    return camelcase(input, options);
}