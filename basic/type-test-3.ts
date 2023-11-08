// https://www.typescriptlang.org/play?#code/FAFwngDgpgBAkgOwDYEsFQEpQMYHsBOAJjALwwDewM1MCAhgLZQBcMAziPmgOYDcVNQlDbYuEEClwJWHLgj7AAvsGB4EHGCGEhSMABSFWiVOix4iASlIA+CgOpq2uJFAB0SXNz0Aibrh3eADQwhBb2MPhQIACu+Ah2NIkRwqyErvRMgeGJhFlJNK6FhOHKyo7Obh5eWhx65BksMN4AQrh0RADijFBBIcKiKOKS0k0AKgAWKGwwUzCt7YRdTN6KFhZAA
type InlineRecord = {
    name: string;
    description: string;
}

const test = (d: InlineRecord) => {
    console.log("got ", d)
    return {
        res: d.name,
        d,
        ...d
    }
}
console.log(test({name: "BoardGame", description: "This is BoardGame"}))
