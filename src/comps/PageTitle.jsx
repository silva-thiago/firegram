import Head from 'next/head'

const PageTitle = ({ title }) => {
  return (
    <React.Fragment>
      <Head>
        {/* SEO */}
        <meta name='author' content='Thiago Silva (dev.thiagosilva.cc)' />
        <meta name='copyright' content='© 2020 Thiago Silva' />
        <meta name='description' content='Compartilhe as suas melhores fotos!' />
        <meta name='keyword' content='firegram, foto, fotos, fotografia, fotografias, galeria de imagens' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' />
        {/* Google Site Verification */}
        <meta name='google-site-verification' content='' />
        {/* Let browser know webapp is optimized for mobile */}
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta httpEquiv='cache-control' content='max-age=31536000' />
        <meta httpEquiv='pragma' content='max-age=31536000' />
        <meta httpEquiv='refresh' content='3600;url=https://firegram.vercel.app/' />
        {/* Default policy for specifiying valid sources for Google fonts & stylesheets */}
        {/* <meta http-equiv='Content-Security-Policy' content="style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;" /> */}
        {/* Open Graph Markup: og */}
        <meta property='og:type' content='webapp' />
        <meta property='og:url' content='https://firegram.vercel.app/' />
        <meta property='og:title' content='Publique suas fotografias' />
        <meta property='og:image' content='https://firegram.vercel.app/img/megafone.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1080' />
        <meta property='og:image:height' content='1080' />
        <meta property='og:image:alt' content='' />
        <meta property='og:description' content='Compartilhe as suas melhores fotos!' />
        <meta property='og:site_name' content='Firegram' />
        <meta property='og:locale' content='pt_BR' />
        {/* Open Graph Markup: lp */}
        <meta property='lp:type' content='webapp' />
        <meta property='lp:url' content='https://firegram.vercel.app/' />
        <meta property='lp:title' content='Publique suas fotografias' />
        <meta property='lp:image' content='https://firegram.vercel.app/img/megafone.png' />
        <meta property='lp:image:type' content='image/png' />
        <meta property='lp:image:width' content='1080' />
        <meta property='lp:image:height' content='1080' />
        <meta property='lp:image:alt' content='' />
        <meta property='lp:description' content='Compartilhe as suas melhores fotos!' />
        <meta property='lp:site_name' content='Firegram' />
        <meta property='lp:locale' content='pt_BR' />
        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@firegram' />
        <meta name='twitter:site' content='@firegram' />
        <meta name='twitter:domain' content='firegram.vercel.app/' />
        <meta name='twitter:title' content='Publique suas fotografias' />
        <meta name='twitter:description' content='Compartilhe as suas melhores fotos!' />
        {/* <meta property={'og:' + title} content={title} key={title} /> */}

        <title>{title}Firegram</title>
      </Head>
    </React.Fragment>
  )
}

export default PageTitle
