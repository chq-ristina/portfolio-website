export interface ITechnology{
    name: string
}

export function Technology(props: ITechnology){
    return (
        <div className="mx-2">
            <p className="px-3 py-1 technology-container">
                {props.name}
            </p>
        </div>
    )
}