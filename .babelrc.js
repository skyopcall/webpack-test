module.exports = {
    // 바벨이란 : 브라우저에서 구버전의 스크립트도 지원되도록 하는 모듈
    // 바벨 기본 설정
    presets: ['@babel/preset-env'],
    // aynsc, await 사용을 위한 플러그인
    plugins: [
        ['@babel/plugin-transform-runtime']
    ]
}