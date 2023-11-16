import css from "./FeedbackOptions.module.css"
export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <div>
        {options.map((index)=>(
            <button type="button" key={index} id={index} onClick={onLeaveFeedback} className={css.button}>{index}</button>
        ))}
       
        
    </div>
)