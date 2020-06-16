module.exports = {
    pages: {
      top: {
        entry: 'src/pages/top/main.js', // エントリーポイントとなるjs
        template: 'public/index.html', // テンプレートのHTML
        filename: 'index.html', // build時に出力されるファイル名
      },
      users: {
        entry: 'src/pages/users/main.js',
        template: 'public/users.html',
        filename: 'users.html',
      },
    },
  };