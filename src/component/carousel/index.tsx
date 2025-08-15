'use client';
import React, { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { useLocale } from 'use-intl';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface CarouselItem {
  image: string;
  title?: string;
  objectFit?: string;
}

function AutoplayPlugin(slider: any, interval = 3000) {
  let timeout: any;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, interval);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
}

const MUICarousel = ({
  items,
  // visibleCount = 3,
  defaultObjectFit = 'cover',
}: {
  items: CarouselItem[];
  visibleCount?: number;
  defaultObjectFit?: 'cover' | 'contain' | 'fill';
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = useTranslations('PartFour');
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: {
        perView: 4,
        spacing: 16,
      },
      breakpoints: {
        '(max-width: 900px)': {
          slides: { perView: 3, spacing: 16 },
        },
        '(max-width: 600px)': {
          slides: { perView: 2, spacing: 12 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [AutoplayPlugin]
  );
  const locale = useLocale();
  return (
    <Box sx={{ position: 'relative', width: '100%' }}>
      <Box ref={sliderRef} className="keen-slider">
        {items.map((item, index) => (
          <Paper
            key={index}
            className="keen-slider__slide"
            sx={{
              height: {
                xs: 200,
                md: 300,
              },
              backgroundImage: `url(${item.image})`,
              backgroundSize: item.objectFit || defaultObjectFit,
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              '&:hover .overlay': {
                opacity: 1,
              },
            }}
          >
            <Box
              className="overlay"
              sx={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(157,152,20,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.3s ease',
              }}
            >
              <Typography
                variant="h6"
                sx={{ color: 'white', fontWeight: 'bold' }}
              >
                <Link href={'/gallery'}>{t('wMore')}</Link>
              </Typography>
            </Box>
            {item.title && (
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  color: 'white',
                  p: 1,
                  textAlign: locale === 'en' ? 'left' : 'right',
                }}
              >
                <Typography variant={'h6'}>{item.title}</Typography>
              </Box>
            )}
          </Paper>
        ))}
      </Box>

      {/* dots */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          mt: 2,
        }}
      >
        {items.map((_, idx) => {
          const isActive = currentSlide === idx;
          return (
            <Box
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              sx={{
                width: isActive ? 25 : 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: isActive ? '#d6cf18' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MUICarousel;
