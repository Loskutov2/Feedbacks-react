export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return(
        <ul>
            {options.map((option=>{
                return(<button onClick={()=>{onLeaveFeedback(option)}}>{option}</button>)
            }))}
        </ul>
    )
}