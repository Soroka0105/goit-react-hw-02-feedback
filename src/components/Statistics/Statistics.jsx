export const Statistics = ({good, neutral, bad, total, percentage, notificationMessage}) => (
    <div>
        {total === 0 ? (<p>{notificationMessage}</p>)
         : (<div>
         <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>Total:{total}</p>
    <p>Positive Feedback: %{percentage}</p>
    </div>)}
    
    </div>)