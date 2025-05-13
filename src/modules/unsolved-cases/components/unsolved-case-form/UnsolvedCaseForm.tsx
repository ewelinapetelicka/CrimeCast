import button from "../../../../styles/Button.ts";
import input from "../../../../styles/Input.ts";
import {classNameJoin} from "../../../../utils/class-name-join.utils.tsx";
import {useState} from "react";
import {UnsolvedCase} from "../../../../models/unsolved-case.ts";
import {Chips} from "../../../../components/chips/Chips.tsx";
import {IoIosClose} from "react-icons/io";
import {usePostUnresolvedCase} from "../../api/unresolved-case.query.ts";

interface UnsolvedCaseFormProps {
    onBackClicked: () => void;
}

export function UnsolvedCaseForm(props: UnsolvedCaseFormProps) {
    const [errorWindow, setErrorWindow] = useState(false);
    const [unsolvedCase, setUnsolvedCase] = useState<UnsolvedCase>({
        caseName: '',
        keyEvidence: [],
        date: '',
        location: '',
        notes: '',
        suspects: [],
        description: '',
        lastKnownActivity: ''
    });

    const createUnresolvedCaseMutation = usePostUnresolvedCase()

    const errorText = (
        <section className={'w-full h-52 bg-zinc-900 rounded-xl text-neutral-50 flex flex-col'}>
            <button onClick={() => setErrorWindow(false)} className={'self-end p-3'}><IoIosClose/></button>
            <p>Date of last known activity couldn't be higher than date of case</p>
        </section>
    )

    function checkIsValid() {
        if (unsolvedCase.lastKnownActivity < unsolvedCase.date) {
            setErrorWindow(true);
        } else {
            createUnresolvedCaseMutation.mutate(unsolvedCase)
        }
    }

    return (
        <>
        {errorWindow ? (errorText) : (
            <section className={'flex flex-col justify-between h-full text-neutral-50'}>
                <article className={'flex w-full justify-between'}>
                    <p className={'font-medium text-xl pb-4'}>Add unsolved case</p>
                    <button className={button.text} onClick={() => props.onBackClicked()}>BACK TO CASES LIST</button>
                </article>
                <article className={'flex flex-col justify-evenly h-full'}>
                    <div className={'flex flex-col gap-1 pb-3'}>
                        <label className={'uppercase'}>case name</label>
                        <input className={input.form}
                               onChange={(event) => setUnsolvedCase({...unsolvedCase, caseName: event.target.value})}/>
                    </div>
                    <div className={'flex flex-col gap-1 pb-3'}>
                        <label className={'uppercase'}>description</label>
                        <textarea className={'w-full shadow-inner shadow-zinc-500 rounded bg-zinc-600'} rows={6}
                                  onChange={(event) => setUnsolvedCase({
                                      ...unsolvedCase,
                                      description: event.target.value
                                  })}/>
                    </div>
                    <section className={'flex gap-6 pb-3 w-full justify-between'}>
                        <div className={'flex flex-col gap-1 w-1/2'}>
                            <label className={'uppercase'}>date</label>
                            <input className={input.form} type={"date"}
                                   onChange={(event) => setUnsolvedCase({...unsolvedCase, date: event.target.value})}/>
                        </div>
                        <div className={'flex flex-col gap-1 w-1/2'}>
                            <label className={'uppercase'}>location</label>
                            <input className={input.form}
                                   onChange={(event) => setUnsolvedCase({
                                       ...unsolvedCase,
                                       location: event.target.value
                                   })}/>
                        </div>
                    </section>
                    <section className={'flex gap-6 pb-3 w-full justify-between'}>
                        <div className={'flex flex-col gap-1 w-1/2'}>
                            <label className={'uppercase'}>notes</label>
                            <input className={input.form}/>
                        </div>
                        <div className={'flex flex-col gap-1 w-1/2'}>
                            <label className={'uppercase'}>last known activity</label>
                            <input className={input.form} type={'date'}
                                   onChange={(event) => setUnsolvedCase({
                                       ...unsolvedCase,
                                       lastKnownActivity: event.target.value
                                   })}/>
                        </div>
                    </section>
                    <section className={'flex gap-6 pb-3 w-full justify-between'}>
                        <Chips value={unsolvedCase.keyEvidence} label={'key evidence'}
                               onValueChange={(keyEvidence) => setUnsolvedCase({
                                   ...unsolvedCase,
                                   keyEvidence: keyEvidence
                               })}>
                        </Chips>
                        <Chips value={unsolvedCase.suspects} label={'suspects'}
                               onValueChange={(suspects) => setUnsolvedCase({...unsolvedCase, suspects: suspects})}>
                        </Chips>
                    </section>
                    <button className={classNameJoin(button.text, 'flex self-end pr-1')}
                            onClick={() => checkIsValid()}>ADD
                    </button>
                </article>
            </section>
        )}
    </>
    )
}