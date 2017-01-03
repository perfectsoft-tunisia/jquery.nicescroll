Package.describe({
    name: 'squirro:jquery.nicescroll',
    version: '3.6.9',
    summary: 'Nicescroll is a jquery plugin, for nice customizabled scrollbars with a very similar ios/mobile style. It supports DIVs, IFrames and document page (body) scrollbars. Compatible with Firefox 4+, Chrome 5+, Safari 4+ (win/mac), Opera 10+, IE 6+ (all A-grade browsers). Compatible with iOS devices as iPad, Android, Blackberry, Windows Phone, and many many mobile and touch devices.',
    git: 'https://github.com/squirro/jquery.nicescroll',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');

    api.use('jquery', 'client');

    api.addFiles([
        'jquery.nicescroll.js'
    ], 'client', {bare: true});
});