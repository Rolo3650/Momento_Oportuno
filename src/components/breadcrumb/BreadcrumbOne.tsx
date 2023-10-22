import { Breadcrumbs, Link, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

interface breadcrumb {
  label?: string;
  url: string;
}

interface Props {
  breadcrumbs: breadcrumb[];
}

const BreadcrumbOne: React.FC<Props> = ({ breadcrumbs }) => {
  const theme = useTheme();
  const navigateTo = useNavigate();

  const onClick = (breadcrumb: breadcrumb) => {
    navigateTo(breadcrumb.url);
  };

  return (
    <Stack
      spacing={2}
      className="text text-font-helvetica mx-auto breadcrumb breadcrumb-one m-0"
      sx={{
        fontWeight: '500',
        maxWidth: '1200px',
      }}
    >
      <Breadcrumbs
        separator="›"
        aria-label="breadcrumb"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: theme.palette.secondary.main,
          },
        }}
      >
        {breadcrumbs?.map((breadcrumb, index) => {
          if (index + 1 == breadcrumbs.length) {
            return (
              <Typography key="3" color="text.primary">
                {breadcrumb?.label}
              </Typography>
            );
          } else
            return (
              <Link
                underline="none"
                key="2"
                color="inherit"
                sx={{
                  transition: '.3s ease-in-out',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                    cursor: 'pointer',
                  },
                }}
                onClick={() => onClick(breadcrumb)}
              >
                {breadcrumb?.label}
              </Link>
            );
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export { BreadcrumbOne };
