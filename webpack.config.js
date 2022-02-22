// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


// export
module.exports= {
    // 파일을 읽어들이기 시작하는 진입점 설정
    // webpack은 JS기반 이기 때문에 HTML을 진입점으로 설정하기위해서는 html-webpack-plugin 패키지 필요
    entry: './js/main.js',
    
    // 결과물(번들)을 반환하는 설정
    // clean : npm run build 를 실행했을 경우 필요하지 않는 내용은 삭제처리
    // path 를 지정하지 않을 경우 dist 가 기본 폴더
    output: {
        // path: path.resolve( __dirname, 'build' ),
        // filename: 'app.js',
        clean: true
    },

    module: {
        rules: [
            {
                // s? => s 가 있을 수 도 있고 없을 수 도 있고
                test: /\.s?css$/,
                use: [
                    // 가장 밑에 있는 모듈 부터 읽는다.
                    // JS는 css파일을 읽지 못하기 때문에 브라우저에 로드 후 style 적용(load)
                    'style-loader',
                    // css,sass 등 스타일파일을 브라우저에 load 
                    'css-loader',
                    // 2. autoprefixer 사용( 각브라우저에 맞는 접두사 추가 )
                    'postcss-loader',
                    // 1. scss 파일을 읽어드린다. 
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    // CopyPlugin : npm run build 시 partterns[0].from 에 있는 폴더내용을 output.path 로 복사한다
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from : 'static' }
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }
}