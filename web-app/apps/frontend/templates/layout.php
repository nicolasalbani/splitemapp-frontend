<!DOCTYPE html>
<html lang="es">
    <head>
        <title>SplitemApp</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta charset="utf-8">
        <meta name="description" content="">
        <meta name="author" content="SplitemApp">

        <!-- FB TAGS -->
        <meta property="og:title" content="">
        <meta property="og:url" content="">
        <meta property="og:image" content="">
        <meta property="og:image:secure_url" content="">
        <meta property="og:site_name" content="EsUnGol">
        <meta property="og:type" content="company">
        <meta property="og:locale" content="es_LA">
        <meta property="og:locale:alternate" content="es_ES">

        <!-- TW -->
        <meta name="twitter:card" content="">
        <meta name="twitter:site" content="">
        <meta name="twitter:title" content="">
        <meta name="twitter:description" content="">
        <meta name="twitter:creator" content="">
        <meta name="twitter:image:src" content="">
        <meta name="twitter:domain" content="">

        <!-- VIEWPORTS & CRAP -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, minimal-ui">
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-config" content="none"/>

        <!-- IOS ICONS -->
        <link rel="apple-touch-icon-precomposed" href=""/>
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href=""/>
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href=""/>
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href=""/>

        <!-- GOOGLE DEVELOPER TOOLS -->
        <meta name="google-site-verification" content="Y68GCLNDsX-3JlN3gOUdYD5WM8oMoK_wE5-d-WNXq44" />

        <?php echo stylesheet_tag('master.css'); ?>
        <link rel="shortcut icon" href="/favicon.ico">
        <!--[if IE]><link rel="shortcut icon" href="/favicon.ico"><![endif]-->

        <?php if (1): ?>
            <?php use_javascript('main.js'); ?>
        <?php else: ?>
            <?php use_javascript('main.min.js'); ?>
        <?php endif; ?>

        <!-- SCRIPTS -->
        <?php include_javascripts(); ?>
    </head>
    <body>
        <?php echo $sf_content; ?>
        <!--[if lt IE 9]>
            <script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->
    </body>
</html>