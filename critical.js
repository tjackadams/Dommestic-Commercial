var critical = require('critical');

critical.generate({
    inline: true,
    minify: true,
    extract: true,
    base: 'build/',
    src: 'index.html',
    dest: 'index.html',
    width: 414,
    height: 736
});

critical.generate({
    inline: true,
    minify: true,
    base: 'build/',
    src: 'Services.html',
    dest: 'Services.html',
    width: 414,
    height: 736
});

critical.generate({
    inline: true,
    minify: true,
    base: 'build/',
    src: 'Contact.html',
    dest: 'Contact.html',
    width: 414,
    height: 736
});