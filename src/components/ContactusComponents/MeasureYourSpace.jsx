import React from 'react';
import { Loader2 } from 'lucide-react';
import useMeasureYourSpace from '../../hooks/useMeasureYourSpace'; 

const MeasureYourSpace = () => {
  const { loading, error, contentData, handlePlayVideo, videoRefs, activeVideos } = useMeasureYourSpace();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <p className="text-red-700">Error loading content: {error.message}</p>
      </div>
    );
  }

  const renderBlock = (block) => {
    switch (block.block_type) {
      case 'video_with_image_block': {
        const isPlaying = activeVideos.has(block.block_id);

        return (
          <div key={block.block_id} className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <video
                ref={(el) => (videoRefs.current[block.block_id] = el)}  
                className="w-full aspect-video object-cover"
                controls={isPlaying}
                playsInline
              >
                <source src={block.video_link} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {!isPlaying && (
                <div className="absolute inset-0 bg-black/60 flex justify-center items-center backdrop-blur-sm transition-opacity duration-300">
                  <button
                    onClick={() => handlePlayVideo(block.block_id)}
                    className="bg-white hover:bg-gray-100 py-3 px-8 rounded-full text-black font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                  >
                    {block.video_button_text || 'Watch Our Video'}
                  </button>
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">{block.text_above_the_image}</h2>
              <img
                src={block.images.desktop}
                alt={block.alt}
                className="mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          </div>
        );
      }

      case 'designers_block': {
        return (
          <div key={block.block_id} className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {block.content?.map((content, idx) => (
                <div
                  key={`${block.block_id}-${idx}`}
                  className="text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-medium mb-4">{content.heading}</h4>
                  <img
                    src={content.image.webp.desktop}
                    alt={content.alt}
                    className="mx-auto rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-700">{content.content}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'image_with_paragraph': {
        return (
          <div key={block.block_id} className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-full md:w-1/2">
              <img
                src={block.images.desktop}
                alt={block.alt}
                className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">{block.name_1}</h2>
              <p className="text-gray-700 leading-relaxed">{block.description_1}</p>
            </div>
          </div>
        );
      }

      case 'svg_block': {
        return (
          <div key={block.block_id} className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {block.content?.map((svgContent, idx) => (
                <div
                  key={`${block.block_id}-${idx}`}
                  className="text-center p-4 hover:shadow-lg rounded-lg transition-shadow duration-300 flex flex-col items-center justify-center"
                >
                  <div
                    className="flex items-center justify-center w-full h-24"
                    dangerouslySetInnerHTML={{ __html: svgContent.svg_text }}
                  />
                  <p className="mt-4 text-gray-700">{svgContent.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">{contentData?.title}</h1>
      {contentData?.map(renderBlock)}
    </div>
  );
};

export default MeasureYourSpace;
