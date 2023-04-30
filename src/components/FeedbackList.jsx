import FeedBackItem from "./FeedBackItem"
import {motion, AnimatePresence} from 'framer-motion'

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    console.log(feedback)
//   return (
//     <div className='feedbacl-list'>
//         {feedback.map((item) => (
//             <FeedBackItem key={item.id} item={item} handleDelete = {handleDelete}/>
//         ))}
//     </div>
//   )

return (
    <div className='feedbacl-list'>
        <AnimatePresence>
        {feedback.map((item) => (
            <motion.div
             key={item.id}
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
             >
            <FeedBackItem key={item.id} item={item} handleDelete = {handleDelete}/>
        </motion.div>
        ))}
        </AnimatePresence>
    </div>
  )
}

export default FeedbackList