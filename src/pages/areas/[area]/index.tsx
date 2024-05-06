'use client'
import React, { useEffect, useState } from "react";
import { Layout as MarketingLayout  } from 'src/layouts/marketing';
import { useParams } from 'next/navigation'
import { typography } from "src/theme/typography";
import { Container, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import categories from "src/constants/areas";
import SvgColor from "src/components/svg-color";
import { useTranslation } from "react-i18next";
import { tokens } from "src/locales/tokens";

import Link from "next/link";

function Page() {

    const { t } = useTranslation();

    
    const params = useParams() ; 
    const theme = useTheme();

    const [image, setImage] = useState<string>("");
    const [code, setCode] = useState<string>("");

    useEffect( () => {

        if( params ){
            const { area } = params ;
            
            const item = categories.find( c => c.code == area );

            setImage( item?.icon ?? "" ) ;
            setCode( item?.code ?? "" ) ;
        }
        

    },[params])
    
    
    return  code !== "" && (
      <>
        <Container
          sx={{
            pt: { xs: '100px', sm: '100px', md: '120px', lg: '140px' },
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
            px: { xs: '10px', sm: '15px', md: '20px', lg: '25px' },
            display: 'flex', // Add flex display
            flexDirection: 'column', // Stack children vertically
            alignItems: 'center', // Align items to the center
            justifyContent: 'center', // Center items along the cross axis
          }}>

          <Typography sx={{
            ...typography.h5,
            mb: 4,
            textAlign: 'center'
          }}>
             { t(tokens.areas[ code ].title) }
             
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
         
            <Typography 
              color="text.secondary" 
              className="textAlignJustify lineHeight-1 listStyleDisc"
              variant="body1"
              dangerouslySetInnerHTML={{__html: t(tokens.areas[ code ].description)}}
              sx={{
                px: 5
              }}
            >
            </Typography>
        </Container>
      </>

      );
}

Page.getLayout = (page : any) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
