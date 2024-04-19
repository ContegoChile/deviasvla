import React from "react";
import { NextPage } from 'next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import {tokens} from "src/locales/tokens";
import { Layout as MarketingLayout } from 'src/layouts/marketing';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import {typography } from "src/theme/typography";

import SvgColor from "../components/svg-color";
import {useTheme} from "@mui/material/styles";
import { useTranslation } from 'react-i18next'
import Paper from '@mui/material/Paper';
import categories, { CategoryItems } from "src/constants/areas";

const Page: NextPage = () => {
  const { t } = useTranslation();

  useTheme();

  return (
    <Container sx={{ py: { xs: 5, md: 10, lg: 17 } }}>
      <Typography sx={{
        ...typography.h5,
        mb: 9,
        mt: { xs: 5, sm: 5, md: 7 }, // Adjust these values as needed
        pt: { xs: 5, sm: 4, md: 6 }, // Adjust these values as needed
        textAlign: 'center'
      }}>
        {t(tokens.headings.Areas)}
      </Typography>

      <Box
        sx={{
          gap: 2,
          paddingLeft: 0,
          display: 'grid',
          my: { xs: 8, md: 10 },
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)', // 2 columns for extra small screens
            sm: 'repeat(2, 1fr)', // 2 columns for small screens
            md: 'repeat(4, 1fr)', // 4 columns for medium screens
            lg: 'repeat(5, 1fr)', // 5 columns for large screens
          },
        }}
      >
        {categories.map((module) => (
          <CategoryItem 
            key={module.title} 
            module={module}

          />
        ))}
      </Box>
    </Container>
  );
}

type CategoryItemProps = {
  module: CategoryItems;
};

const CategoryItem = ({ module }: CategoryItemProps) => {
  const router = useRouter();
  const theme = useTheme();
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleGoToPage = (item : any) => {
    router.push(`/areas/${ item.code }`);
  }

  return (
    <Paper

      variant="outlined"
      sx={{
        pt: '100%',
        borderRadius: 2,
        cursor: 'pointer',
        textAlign: 'center',
        position: 'relative',
        bgcolor: hovered ? 'background.paper' : 'transparent', // Change background color on hover
        transition: theme.transitions.create('all'),
        '&:hover': {
          bgcolor: 'background.paper', // Change background color on hover
          boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={ () => handleGoToPage(module) }

    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 1,
          height: 1,
          top: 0,
          position: 'absolute',
        }}
      >
        <Box
          className="svg-color"
          sx={{
            mb: 2.5,
            width: 65,
            height: 65,
            mx: 'auto',
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <SvgColor
            src={module.icon}
            color={hovered ? theme.palette.primary.main : 'info'} // Change icon color on hover to primary color
            sx={{
              width: 60,
              height: 60,
            }}
          />
        </Box>

        <Typography sx={{ ...typography.subtitle1, color: 'text.secondary', mt: 1, mb: 1 }}>
          {module.title}
        </Typography>
      </Stack>
    </Paper>
  );
}


Page.getLayout = (page) => <MarketingLayout>{page}</MarketingLayout>;
export default Page;

