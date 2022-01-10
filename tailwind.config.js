module.exports = {

    purge:[
        './public/**/*.html',
    ],
    darkmode: false,
    theme: {
        extend: {
            backgroundImage: theme => ({
                'wave-pattern': 'url(../images/wave-white.png)',
                'wave-pattern-2': 'url(../images/bg-pattern2.jpg)'
            })

        },
    },
    variants:{
        extends: {},
    },
    plugins: [],


}