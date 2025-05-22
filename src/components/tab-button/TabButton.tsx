interface TabButtonProps {
    label: string,
    onClick: () => void
}

export function TabButton(props: TabButtonProps) {
    return (
        <button onClick={() => props.onClick()} className={" hover:underline"}>
            <p className={"text-lg uppercase"}>{props.label}</p>
        </button>
    )

}