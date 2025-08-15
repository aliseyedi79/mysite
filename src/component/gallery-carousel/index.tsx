'use client';
import React, { RefObject } from 'react';
import {
  useKeenSlider,
  KeenSliderPlugin,
  KeenSliderInstance,
} from 'keen-slider/react';
import { Box, NoSsr, Paper } from '@mui/material';
import 'keen-slider/keen-slider.min.css';

interface ThumbnailCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

// پلاگین AutoPlay
const AutoPlayPlugin: KeenSliderPlugin = (slider) => {
  const interval = 7000;
  let timeout: ReturnType<typeof setTimeout>;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, interval);
  }

  slider.on('created', () => {
    nextTimeout();
  });

  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
  slider.on('destroyed', clearNextTimeout);
};

function ThumbnailPlugin(
  mainRef: RefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number) {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ThumbnailCarousel: React.FC<ThumbnailCarouselProps> = ({ images }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
    },
    [AutoPlayPlugin]
  );

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 8,
      },
      breakpoints: {
        '(max-width: 600px)': {
          slides: {
            perView: 3,
            spacing: 6,
          },
        },
      },
    },
    [ThumbnailPlugin(instanceRef)]
  );

  return (
    <NoSsr>
      <Box width={'100%'} m={'auto'}>
        <Box ref={sliderRef} className="keen-slider" mb={2}>
          {images.map((image, index) => (
            <Paper
              key={`main-${index}`}
              className="keen-slider__slide"
              sx={{
                position: 'relative',
                height: '450px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  backgroundColor: 'rgba(251,246,243)',
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </Paper>
          ))}
        </Box>

        <Box
          ref={thumbnailRef}
          className="keen-slider thumbnail"
          sx={{ px: 1 }}
        >
          {images.map((image, index) => (
            <Paper
              key={`thumb-${index}`}
              className="keen-slider__slide"
              sx={{
                position: 'relative',
                height: '120px',
                borderRadius: '4px',
                overflow: 'hidden',
                cursor: 'pointer',
                opacity: 0.6,
                transition: 'opacity 0.5s ease',
                '&.active': {
                  opacity: 1,
                  border: '2px solid',
                  borderColor: 'primary.main',
                },
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Paper>
          ))}
        </Box>
      </Box>
    </NoSsr>
  );
};

export default ThumbnailCarousel;
