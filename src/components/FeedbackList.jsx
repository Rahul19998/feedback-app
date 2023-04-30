import FeedBackItem from "./FeedBackItem"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    console.log(feedback)
  return (
    <div className='feedbacl-list'>
        {feedback.map((item) => (
            <FeedBackItem key={item.id} item={item} handleDelete = {handleDelete}/>
        ))}
    </div>
  )
}

export default FeedbackList