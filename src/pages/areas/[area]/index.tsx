'use client'
import React, { useEffect, useState } from "react";
import { Layout as MarketingLayout  } from 'src/layouts/marketing';
import { useParams } from 'next/navigation'
import { typography } from "src/theme/typography";
import { Container, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import categories from "src/constants/areas";
import SvgColor from "src/components/svg-color";
import Link from "next/link";

function Page() {

    const params = useParams() ; 
    const theme = useTheme();

    const [title, setTitle] = useState<string>("");
    const [image, setImage] = useState<string>("");

    useEffect( () => {

        if( params ){
            const { area } = params ;
            
            const item = categories.find( c => c.code == area );

            setTitle( item?.title ?? "" ) ;
            setImage( item?.icon ?? "" ) ;
        }
        

    },[params])
    
    
    return <>
      <Container
        maxWidth="lg"
        sx={{
          pt: { xs: '100px', sm: '100px', md: '120px', lg: '180px' },
          // pb: { xs: '30px', sm: '40px', md: '50px', lg: '120px' },
          px: { xs: '30px', sm: '30px', md: '30px', lg: '30px' },
          display: 'flex', // Add flex display
          alignItems: 'right', // Align items to the center
          justifyContent: 'right', // Center items along the cross axis
        }}>
        <Link  
          href="/areas"
          title="Volver a Areas"  
        >
          <SvgColor
            src={ '/assets/icons/circle-chevron-left-solid.svg' }
            color={ theme.palette.primary.main } // Change icon color on hover to primary color
            sx={{
                width: 40,
                height: 40,
            }}
          />
        </Link>
      </Container>

     <Container
       maxWidth="lg"
       sx={{
          pb: { xs: '30px', sm: '40px', md: '50px', lg: '120px' },
          display: 'flex', // Add flex display
          flexDirection: 'column', // Stack children vertically
          alignItems: 'center', // Align items to the center
          justifyContent: 'center', // Center items along the cross axis
       }}>

        <Typography sx={{
          ...typography.h5,
          mb: 4,
          // pt: { xs: 5, sm: 4, md: 6 }, // Adjust these values as needed
          textAlign: 'center'
        }}>
          { title }
            
        </Typography>

          <SvgColor
              src={ image }
              color={ theme.palette.primary.main } // Change icon color on hover to primary color
              sx={{
                  width: 80,
                  height: 80,
                  mb: 5,

              }}
          />
        
          <Typography color="text.secondary" sx={{ ...typography.body1 , px : 3 }} variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
  
      </Container>
    </>
}

Page.getLayout = (page : any) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
