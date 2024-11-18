interface Witness {
    "name": string,
    "relationship": string,
    "testimony": string
}

interface Memorial {

    "type": string,
    "location": string,
    "inscription": string
}

interface Victim {
    "name": string,
    "age": number,
    "gender": string,
    "date": string,
    "location": string,
    "method": string,
    "causeOfDeath"?: string,
    "timeBetweenAttackAndDiscovery": string,
    "relationshipToKiller": null,
    "circumstancesOfAbduction": string,
    "lastSeen": {
        "location": string,
        "time": string
    },
    "discoveryLocation": {
        "description": string,
        "coordinates": {
            "latitude": number,
            "longitude": number
        }
    },
    "injuries": string[],
    "policeInvestigationNotes": string,
    "witnesses": Witness[],
    "impactOnCommunity": string,
    "familyReactions": string,
    "mediaCoverage": {
        "newspapers": string[],
        "headlines": string[]
    },
    "memorials": Memorial[]

}

export interface SerialKiller {
    "id": number,
    "name": string,
    "alias": string,
    "img": string,
    "bio": string,
    "country": string,
    "spouse": null | string,
    "children": number,
    "startYear": number,
    "endYear": number,
    "born": string,
    "dead": string,
    "locations": string[],
    "mediaCoverage": {
        "books": number,
        "documentaries": number,
        "movies": number
    },
    "methodOfMurder": string[],
    "capturedBy": string,
    "trialDetails": {
        "prosecutor": string,
        "defense": string,
        "sentence": string
    },
    "arrested": string,
    "notorietyRank": number,
    "escapeAttempts": number,
    "trialStart": string,
    "quotes": string[],
    "finalWords": string,
    "convictionDate": string,
    "executionDate": string,
    "knownAccomplices": string[] | null,
    "causeOfDead": string,
    "motives": string[],
    "evidence": string[],
    "victims": number,
    "victimsTried": number,
    "victimsClaimed": number,
    "knownVictims": Victim[]
}