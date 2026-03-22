import { Box } from '@mui/material';
import PosterMedia from './PosterMedia';
import * as styles from '../styles/appStyles';

export default function GamePosterCard({
  title = 'Game title',
  posterSrc,
  posterAlt,
  sx,
  onClick,
}) {
  return (
    <Box
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(event) => {
        if (!onClick) return;
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick();
        }
      }}
      sx={{
        width: '100%',
        aspectRatio: '4 / 5',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid #d9deea',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 2px rgba(18, 24, 40, 0.04)',
        boxSizing: 'border-box',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        '&:hover': onClick
          ? {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 16px rgba(18, 24, 40, 0.08)',
            }
          : undefined,
        ...sx,
      }}
    >
      <PosterMedia
        title={title}
        posterSrc={posterSrc}
        posterAlt={posterAlt}
        wrapperSx={{
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff',
        }}
        imageSx={styles.posterImageSx}
        placeholderLabel={title}
        placeholderSx={{
          ...styles.posterPlaceholderWrapSx,
          ...styles.posterPlaceholderInsetSx,
        }}
        placeholderTextVariant="subtitle2"
        placeholderTextSx={{ color: '#60708f' }}
      />
    </Box>
  );
}