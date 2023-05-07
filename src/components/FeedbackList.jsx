import FeedBackItem from "./FeedBackItem"
import Spinner from "./shared/Spinner"
import {useContext} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
    const {feedback, isLoading} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No Feedback Yet</p>
    }
    return isLoading ? <Spinner /> : (    <div className='feedbacl-list'>
    <AnimatePresence>
    {feedback.map((item) => (
        <motion.div
         key={item.id}
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         exit={{opacity: 0}}
         >
        <FeedBackItem key={item.id} item={item} />
    </motion.div>
    ))}
    </AnimatePresence>
</div>)

}

export default FeedbackList