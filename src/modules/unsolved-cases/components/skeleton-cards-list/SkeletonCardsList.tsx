export function SkeletonCardsList() {
    const cardCount = 12;

    return (
        <section className={'h-[90%] gap-7 animate-pulse grid grid-cols-4 justify-evenly'}>
            {Array.from({length: cardCount}, (_, index) => {
                return (
                    <div key={index} className={' bg-slate-200 rounded-3xl'}/>
                )
            })}
        </section>
    )
}