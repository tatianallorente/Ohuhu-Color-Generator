import { Button, Typography } from '@mui/material';
import type { OhuhuColor } from '@/types/ohuhu.types';
import { usePreviewDrawingController } from './PreviewDrawing.controller';

interface PreviewDrawingProps {
  colors: readonly OhuhuColor[];
}

const ZONE_PATHS = [
  <rect height="100" key="background" width="100" x="0" y="0" />,
  <path d="M0 73C17 57 29 61 44 73S75 89 100 66V100H0Z" key="wave" />,
  <circle cx="76" cy="28" key="sun" r="18" />,
  <path d="M0 0H37C28 15 34 28 19 40S4 55 0 64Z" key="left-arch" />,
  <path d="M49 0C57 16 56 31 47 44C41 52 42 61 52 68L37 75C24 61 26 44 34 31C41 20 39 9 31 0Z" key="middle-ribbon" />,
  <circle cx="89" cy="56" key="small-orb" r="8" />,
  <path d="M58 76C66 66 77 68 82 78S94 88 100 85V100H58Z" key="corner-wave" />,
  <path d="M8 86C14 79 24 80 27 88S25 97 19 100H0V94C3 92 5 89 8 86Z" key="lower-left" />,
  <circle cx="58" cy="55" key="dot" r="4" />,
  <path d="M83 0H100V17C94 13 87 12 81 15C78 10 79 4 83 0Z" key="upper-corner" />,
];

export function PreviewDrawing({ colors }: PreviewDrawingProps) {
  const { actions, data } = usePreviewDrawingController({ colors });

  if (!data.isDrawingVisible) {
    return (
      <div className="mt-8 flex justify-center">
        <Button onClick={actions.handleShowDrawing} variant="contained">
          Preview example
        </Button>
      </div>
    );
  }

  return (
    <section aria-label="Color preview made from the generated colors" className="mt-8">
      <Typography align="center" className="mb-4" component="h2" variant="h6">
        Color preview example
      </Typography>
      <svg
        aria-label={`Abstract drawing with ${colors.length} generated colors`}
        className="mx-auto block w-full max-w-xl rounded-3xl"
        role="img"
        viewBox="0 0 100 100"
      >
        {ZONE_PATHS.slice(0, data.zoneColors.length).map((path, index) => (
          <g fill={data.zoneColors[index]} key={path.key}>
            {path}
          </g>
        ))}
      </svg>
    </section>
  );
}
