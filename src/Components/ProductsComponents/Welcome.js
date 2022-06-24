import { motion } from "framer-motion"

export const Welcome = () => {

    return(
    <div>
            <motion.div
        className="delivery"
        animate={{scale: [2, 1, 1] }}
        transition={{   type: 'spring',
        duration: 2}}
    
        >
        
                <p>DELIVERY IS FREE starting from $89</p>

                </motion.div>
            <div className="woowza">
            <p>ENJOY Your 15% OFF on all bracelets all summer 2022</p>
            </div>
            <div className="kappie font">
                <div>
                    <p>Kappie accessories</p>
                </div>
            </div>

            </div>
        
      
        
    )
}

export default Welcome;


