import {PageContainer} from "../../../components/page-container/PageContainer.tsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Details} from "../components/details/Details.tsx";
import {Timeline} from "../components/timeline/Timeline.tsx";
import {killersToTimelineCardUtils} from "../utils/killers-to-timeline-card.utils.tsx";
import {MapComponent} from "../components/map/MapComponent.tsx";
import {createMarker} from "../utils/map.utils.tsx";
import {Feature} from "ol";
import {Point} from "ol/geom";
import {fromLonLat, toLonLat} from "ol/proj";
import {Coordinate} from "ol/coordinate";
import {useGetSerialKillerDetails} from "../api/serial-kiler.query.ts";

export type ViewType = "Timeline" | "Map";

export function SerialKillerDetails() {
    const [view, setView] = useState<ViewType>('Timeline');
    const [markers, setMarkers] = useState<Feature<Point>[]>([]);
    const [center, setCenter] = useState<Coordinate>()
    const {id} = useParams();
    const {data, isSuccess} = useGetSerialKillerDetails(id!)

    useEffect(() => {
        if (!data) {
            return;
        }
        setMarkers(data.knownVictims.map((victim) => {
            return createMarker({
                lon: victim.discoveryLocation.coordinates.longitude,
                lat: victim.discoveryLocation.coordinates.latitude,
                name: victim.name
            })
        }))
    }, [data]);

    useEffect(() => {
        setCenterOfMap()
        // eslint-disable-next-line
    }, [markers]);

    function setCenterOfMap() {
        let lon = 0;
        let lat = 0;

        for (let i = 0; i < markers.length; i++) {
            lon = lon + toLonLat(markers[i].getGeometry()!.getCoordinates())[0];
            lat = lat + toLonLat(markers[i].getGeometry()!.getCoordinates())[1];
        }
        setCenter(fromLonLat([lon / markers.length, lat / markers.length]))
    }

    if (!isSuccess) {
        return;
    }

    return (
        <PageContainer class={"flex flex-col justify-between items-center overflow-auto"} scroll={true}>
            <section className={"flex justify-evenly pr-3"}>
                {view === "Timeline" ? (
                    <article className={" flex gap-3 "}>
                        <Details killer={data} key={data.id}/>
                        <Timeline cards={killersToTimelineCardUtils(data)}
                                  onCloseClick={() => setView("Map")} buttonLabel={'see map'}
                                  key={data.id}></Timeline>
                    </article>
                ) : (
                    <MapComponent onCloseClick={() => setView("Timeline")} markers={markers} center={center!}
                                  key={data.id}/>
                )
                }
            </section>
        </PageContainer>
    )
}