import type { AppProps } from "next/app";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import theme from "@/styles/muiTheme";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Paper elevation={0} sx={{ minHeight: "100vh", position: "relative" }}>
          <Component {...pageProps} />
        </Paper>
      </ThemeProvider>
    </>
  );
}
