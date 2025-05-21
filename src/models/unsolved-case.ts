export interface UnsolvedCase {
    "id": number,
    "caseName": string,
    "date": string,
    "location": string,
    "description": string,
    "lastKnownActivity": string,
    "keyEvidence": string[]
    "suspects": string[],
    "notes": string
}

export type UnsolvedCaseDTO = Omit<UnsolvedCase, 'id'>