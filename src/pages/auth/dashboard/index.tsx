import { Grid } from "@mui/material";
import { NextPage } from "next";
import { AuthLayout } from "src/layouts/auth/auth-layout";
import { Chart1 } from "src/sections/components/charts/chart-1";


const Page : NextPage = () => {

    const chart : string = "line";
    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Chart1  />
            </Grid>
            <Grid item xs={6}>
                <Chart1 />
            </Grid>
        </Grid>
    ) ;
} 

Page.getLayout = (page) => <AuthLayout>{page}</AuthLayout>;

export default Page;