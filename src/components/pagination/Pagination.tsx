interface PaginationProps {
    disabledPrev: boolean;
    disabledNext: boolean;
    currentPage: number;
    totalPages: number;
    prev: () => void;
    next: () => void;
}

export function Pagination(props: PaginationProps) {
    return (
        <div className={"flex w-full justify-center items-center gap-3 pb-3"}>
            <button
                className={"bg-zinc-700 p-2 rounded-2xl shadow-inner shadow-neutral-50 text-amber-50"}
                onClick={() => props.prev()} disabled={props.disabledPrev}>previous page
            </button>
            <p className={"bg-zinc-700 p-2 rounded-2xl shadow-inner shadow-neutral-50 text-amber-50"}>
                {props.currentPage + 1}/{props.totalPages + 1}
            </p>
            <button onClick={() => props.next()}
                    className={"bg-zinc-700 p-2 rounded-2xl shadow-inner shadow-neutral-50 text-amber-50"}
                    disabled={props.disabledNext}>next page
            </button>
        </div>
    )
}