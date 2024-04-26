'use client'
import React, { useEffect, useState } from "react";
import { Layout as MarketingLayout  } from 'src/layouts/marketing';
import { useParams } from 'next/navigation'
import { typography } from "src/theme/typography";
import { Container, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles";
import categories from "src/constants/areas";
import SvgColor from "src/components/svg-color";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { tokens } from "src/locales/tokens";
import { areas } from './../../../api/blog/data';

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
        <Container
          maxWidth="lg"
          sx={{
            pt: { xs: '60px', sm: '80px', md: '120px', lg: '180px' },
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
            mt: { xs: 5, sm: 5, md: 4 }, // Adjust these values as needed
            pt: { xs: 5, sm: 4, md: 6 }, // Adjust these values as needed
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
              className="whiteSpace textAlignJustify lineHeight-1"
              variant="body1"
              sx={{
                px: 5
              }}
            >
                { t(tokens.areas[ code ].description) }
            </Typography>
        </Container>
      );
}

Page.getLayout = (page : any) => <MarketingLayout>{page}</MarketingLayout>;

export default Page;
