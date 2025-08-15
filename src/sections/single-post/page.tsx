'use client';

import { Box, Typography, Chip, Avatar, Divider } from '@mui/material';
import { CalendarToday, Person, AccessTime } from '@mui/icons-material';
import Image from 'next/image';
import * as React from 'react';
import { useLocale } from 'use-intl';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type CommentItem = {
  id: string | number;
  author: string;
  content: string;
  publishedAt: string;
  avatar?: string;
};

type BlogPostProps = {
  title: string;
  excerpt?: string;
  featuredImage?: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime?: string;
  tags?: string[];
  comments?: CommentItem[];

  locale?: 'fa' | 'en';
  commentsTitle?: string;
};

export default function BlogPost({
  title,
  excerpt,
  featuredImage,
  content,
  author,
  publishedAt,
  readTime,
  tags = [],
  comments = [],
  commentsTitle,
}: BlogPostProps) {
  const locale = useLocale();
  const t = useTranslations('blogpost');
  return (
    <Box width="100%" maxWidth="1280px" margin={'auto'} my={14} px={2}>
      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 6,
          fontSize: 14,
        }}
      >
        <Link href="/">
          <Typography
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {t('1')}
          </Typography>
        </Link>
        <Typography>/</Typography>
        <Link href="/news">
          <Typography
            sx={{
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {t('2')}
          </Typography>
        </Link>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography
          variant="h1"
          component="h1"
          color="black"
          sx={{ fontSize: { xs: 26, sm: 36 }, fontWeight: 700, mb: 2 }}
        >
          {title}
        </Typography>

        {excerpt && (
          <Typography
            variant="h2"
            color="#404045"
            sx={{ fontSize: { xs: 16, sm: 22 }, mb: 3 }}
          >
            {excerpt}
          </Typography>
        )}

        {/* Image */}
        {featuredImage && (
          <Box
            sx={{
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            }}
          >
            <Image
              src={featuredImage}
              alt={title}
              width={1200}
              height={500}
              style={{
                width: '100%',
                height: 500,
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'top',
              }}
              priority
            />
          </Box>
        )}

        {/* Meta */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            mb: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar
              sx={{ width: 32, height: 32, backgroundColor: 'primary.main' }}
            >
              <Person fontSize="small" />
            </Avatar>
            <Typography variant="body2" color="#404045">
              {author}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CalendarToday fontSize="small" sx={{ color: 'primary.main' }} />
            <Typography variant="body2" color="#404045">
              {publishedAt}
            </Typography>
          </Box>

          {readTime && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <AccessTime fontSize="small" sx={{ color: 'primary.main' }} />
              <Typography variant="body2" color="#404045">
                {readTime}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Tags */}
        {!!tags.length && (
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 3 }}>
            {tags.map((tag) => (
              <Chip
                key={tag}
                label={tag}
                size="small"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': { backgroundColor: 'primary.dark' },
                }}
              />
            ))}
          </Box>
        )}

        <Divider sx={{ borderColor: 'primary.main', opacity: 0.2 }} />
      </Box>

      {/* Content */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          borderRadius: 2,
          p: 2,
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '& h2': {
            color: 'primary.main',
            fontSize: '1.5rem',
            fontWeight: 600,
            mt: '2rem',
            mb: '1rem',
            '&:first-of-type': { mt: 0 },
          },
          '& p': {
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            mb: '1.25rem',
            color: 'text.primary',
          },
          '& ul': { mb: '1.25rem', pl: '1.25rem' },
          '& li': {
            fontSize: '1.0625rem',
            lineHeight: 1.8,
            mb: '0.5rem',
            color: 'text.primary',
          },
        }}
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Comments */}
      {!!comments.length && (
        <Box sx={{ mt: 6 }}>
          <Divider sx={{ borderColor: 'primary.main', opacity: 0.2, mb: 3 }} />
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: 'primary.main',
              fontSize: '1.5rem',
              fontWeight: 600,
              mb: 3,
            }}
          >
            {commentsTitle ??
              (locale === 'fa'
                ? `دیدگاه‌ها (${comments.length})`
                : `Comments (${comments.length})`)}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {comments.map((comment) => (
              <Box
                key={comment.id}
                sx={{
                  backgroundColor: 'background.paper',
                  borderRadius: 2,
                  p: 3,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    mb: 3,
                  }}
                >
                  <Avatar
                    src={comment.avatar || undefined}
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: comment.avatar
                        ? 'primary.main'
                        : 'transparent',
                      color: comment.avatar ? 'white' : 'inherit',
                      fontSize: '0.875rem',
                    }}
                  >
                    {!comment.avatar && (comment.author?.[0] ?? 'U')}
                  </Avatar>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: 600,
                        marginBottom: '2px',
                      }}
                      variant="h5"
                    >
                      {comment.author}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="black"
                      sx={{
                        marginTop: '2px',
                        display: 'block',
                      }}
                    >
                      {comment.publishedAt}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="h5" sx={{ lineHeight: 1.7 }}>
                  {comment.content}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
}
