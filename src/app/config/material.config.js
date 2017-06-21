export function materialConfig($mdAriaProvider, $mdThemingProvider) {
    'ngInject';

    // DEFINE COLOR PALETTE
    $mdThemingProvider.definePalette('mint', {
        '50': 'E0F2F1',
        '100': 'B2DFDB',
        '200': '80CBC4',
        '300': '4DB6AC',
        '400': '26A69A',
        '500': '009688',
        '600': '00897B',
        '700': '00796B',
        '800': '00695C',
        '900': '004D40',
        'A100': 'A7FFEB',
        'A200': '64FFDA',
        'A400': '1DE9B6',
        'A700': '00BFA5',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50', '100', '200', '300', '400', 'A100'],
        'contrastLightColors': ['50', '100', '200', '300', '400', 'A100']
    });

    $mdThemingProvider
        .theme('default')
        .primaryPalette('mint')
        .warnPalette('red')
        .backgroundPalette('grey');

    $mdThemingProvider
        .theme('defaultDark')
        .primaryPalette('mint')
        .warnPalette('red')
        .backgroundPalette('grey')
        .dark();
}
