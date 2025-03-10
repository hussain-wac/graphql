import { useState, useRef } from 'react';
import { useQuery } from '@apollo/client';
import { GetMessuarements } from '../Query';

const useMeasureYourSpace = () => {
  const { loading, error, data } = useQuery(GetMessuarements);
  const [activeVideos, setActiveVideos] = useState(new Set());
  const videoRefs = useRef({});

  const handlePlayVideo = (blockId) => {
    const videoElement = videoRefs.current[blockId];
    if (videoElement) {
      try {
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setActiveVideos((prev) => new Set([...prev, blockId]));
            })
            .catch((error) => {
              console.error('Error playing video:', error);
            });
        }
      } catch (error) {
        console.error('Error playing video:', error);
      }
    }
  };

  const MeasureYourSpaceData = data?.MeasureYourSpacePageCms;
  const contentData = MeasureYourSpaceData?.content ? JSON.parse(MeasureYourSpaceData.content) : [];

  return {
    loading,
    error,
    contentData,
    handlePlayVideo,
    videoRefs,
    activeVideos, 
  };
};

export default useMeasureYourSpace;
