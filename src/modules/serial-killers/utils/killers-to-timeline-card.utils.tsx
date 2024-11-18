import {SerialKiller} from "../../../models/serial-killer.ts";
import {TimeLineCard} from "../../../components/timeline/Timeline.tsx";

export function killersToTimelineCardUtils(killer: SerialKiller): TimeLineCard[] {

    const cards: TimeLineCard[] = []
    let i = 0;
    if (killer.born !== "Unknown") {
        cards.push({
            date: killer.born,
            title: "- born in: ",
            description: killer.country
        })
    }
    cards.push({
        date: killer.startYear,
        title: "- beginning of the activity"
    })

    while (i < killer.knownVictims.length) {
        cards.push({
            date: killer.knownVictims[i].date,
            title: " -victim: ",
            description: killer.knownVictims[i].name + killer.knownVictims[i].location
        })
        i++
    }
    cards.push({
        date: killer.endYear,
        title: "- end of the activity"
    })

    if (killer.arrested !== null) {
        cards.push({
            date: killer.arrested,
            title: "- arrested in",
            description: killer.capturedBy
        })
    }
    if (killer.trialStart !== null) {
        cards.push({
            date: killer.trialStart,
            title: "- commencement of the trial ",
        })
    }

    if (killer.dead !== null && killer.dead !== "Alive") {
        cards.push({
            date: killer.dead,
            title: "- death:",
            description: killer.causeOfDead
        })
    }


    return cards
}
