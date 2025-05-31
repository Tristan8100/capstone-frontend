'use client';
import { InView } from '@/components/ui/in-view';
import { motion } from 'motion/react';
import { Tilt } from '@/components/ui/tilt';
export function InViewImagesGrid() {
  return (
    <div className='h-full w-full overflow-auto'>
      <div className='mb-20 py-12 text-center text-sm'>Scroll down</div>
      <div className='flex items-end justify-center'>
        <InView
          viewOptions={{ once: true, margin: '0px 0px -250px 0px' }}
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
          <Tilt rotationFactor={2} isRevese className='columns-2 gap-4 px-8 sm:columns-3'>
            {[
              'static/alumni1.jpg',
              'static/alumni2.jpg',
                'static/alumni3.jpg',
                'static/alumni4.jpg',
                'static/alumni5.jpg',
                'static/alumni4.png',
            ].map((imgSrc, index) => {
              return (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    },
                  }}
                  key={index}
                  className='mb-4'
                >
                  <img
                    src={imgSrc}
                    alt={`Image placeholder from cosmos.so, index:${index}`}
                    className='size-full rounded-lg object-contain'
                  />
                </motion.div>
              );
            })}
          </Tilt>
        </InView>
      </div>
    </div>
  );
}
