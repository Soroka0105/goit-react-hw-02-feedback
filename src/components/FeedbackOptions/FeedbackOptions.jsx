export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        <button type="button" onClick={options[0]}>{onLeaveFeedback.good}</button>
        <button type="button" onClick={options[1]}>{onLeaveFeedback.neutral}</button>
        <button type="button" onClick={options[2]}>{onLeaveFeedback.bad}</button>
    </div>
)