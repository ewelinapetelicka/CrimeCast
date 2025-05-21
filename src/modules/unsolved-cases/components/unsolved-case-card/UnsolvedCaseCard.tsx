import {UnsolvedCase} from "../../../../models/unsolved-case.ts";

interface UnsolvedCaseCardProps {
    unsolvedCase: UnsolvedCase;
    onClick: () => void;
}

export function UnsolvedCaseCard(props: UnsolvedCaseCardProps) {

    return (
        <section
            className={'bg-white bg-opacity-20 text-neutral-50 rounded-3xl shadow-inner shadow-neutral-50 cursor-pointer'}
            onClick={() => props.onClick()}>
            <p className={'p-4'}>{props.unsolvedCase.caseName}</p>
            <p className={'p-4'}>{props.unsolvedCase.keyEvidence}</p>
        </section>
    )
}