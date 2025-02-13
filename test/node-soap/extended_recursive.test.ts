import test from "tape";
import { existsSync } from "fs";
import { parseAndGenerate } from "../../src";
import { Logger } from "../../src/utils/logger";

const target = "extended_recursive";

test(target, async t => {
    Logger.disabled();

    const input = `./test/resources/${target}.wsdl`;
    const outdir = "./test/generated";

    t.test(`${target} - generate wsdl client`, async t => {
        await parseAndGenerate(input, outdir);
        t.end();
    });

    t.test(`${target} - check definitions`, async t => {
        t.equal(existsSync(`${outdir}/extendedrecursive/definitions/Department.ts`), true);
        t.equal(existsSync(`${outdir}/extendedrecursive/definitions/GetPerson.ts`), true);
        t.equal(existsSync(`${outdir}/extendedrecursive/definitions/GetPersonResponse.ts`), true);
        t.equal(existsSync(`${outdir}/extendedrecursive/definitions/GetPersonResult.ts`), true);
        t.end();
    });
});