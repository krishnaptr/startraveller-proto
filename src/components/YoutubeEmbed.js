import { useRef } from 'react'
import useIntersectionObserver from '@react-hook/intersection-observer';
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
    const containerRef = useRef()
    const lockRef = useRef(false)
    const { isIntersecting } = useIntersectionObserver(containerRef)
    if (isIntersecting) {
        lockRef.current = true
    }
    return (
        <div
            ref={containerRef}
        >
            {lockRef.current && (
                <iframe

                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="StarTraveller"
                ></iframe>
            )}
        </div>
    )
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };

export default YoutubeEmbed