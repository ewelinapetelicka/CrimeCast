interface TabButtonProps {
    label: string,
    onClick: () => void
}

export function TabButton(props: TabButtonProps) {
    return (
        <button onClick={() => props.onClick()} className={"pl-3 pr-3 hover:underline"}>
            <p className={"text-lg uppercase"}>{props.label}</p>
        </button>
    )

}