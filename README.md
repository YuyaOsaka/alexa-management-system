# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## ビルド手順
npm startコマンドでローカル環境にてアプリを実行するにあたって必要な設定となります。
Node.js、npmがインストールされていることが前提です。

### `npm install -g @aws-amplify/cli`
Amplifyの機能を使用するためにCLIツールをインストールしてください。

### `amplify configure`
AWSのユーザー設定を行います。
以下は追加入力例です。

Specify the AWS Region -> ap-northeast-1（上下カーソルで選択後、Enterキー）
user name: -> [任意の名前を入力]
Enter the access key of the newly created user:
? accessKeyId: 
? secretAccessKey: 
（~/.aws/credentials、もしくはAWSのIAMユーザー情報を参照）
? Profile Name:  default (~/.aws/credentialsが書き変わるため注意)

### `npx create-react-app [任意のプロジェクト名]`
現在のディレクトリにプロジェクトを作成します。
以降のコマンドはプロジェクトディレクトリにて行うため、cd [作成したプロジェクト名]で作業ディレクトリを切り替えてください。

### `npm install aws-amplify`
### `npm install aws-amplify-react`
動作のための必須モジュールのインストールを行います。ユーザー側の追加入力はありません。

### `amplify pull --appId d3kd3sbl5rtsoq --envName dev`
amplify設定、aws-exports.jsを取得します。
以下は追加入力例です。

Do you want to use an AWS profile? -> Yes
Please choose the profile you want to use (Use arrow keys) -> default (Enterキー)
Which app are you working on? (Use arrow keys) -> d3kd3sbl5rtsoq (Enterキー)
Choose your default editor: (Use arrow keys) -> Visual Studio Code
Choose the type of app that you're building (Use arrow keys) -> javascript
What javascript framework are you using (Use arrow keys) -> react
Source Directory Path:  (src) -> src (Enterキー)
Distribution Directory Path: (build) ->build (Enterキー)
Build Command:  (npm.cmd run-script build) -> npm.cmd run-script build (Enterキー)
Start Command: (npm.cmd run-script start) -> npm.cmd run-script start (Enterキー)
Do you plan on modifying this backend? (Y/n) -> Yes

Enter your Amazon App ID for your OAuth flow: -> 
amzn1.application-oa2-client.2aa4adaf5aed423bb5ca3640ac91fc91
Enter your Amazon App Secret for your OAuth flow: -> 46e02b9555ea94a272e80a18b29fcf8954149744dd2463bd903a279efd7b901a

"Successfully pulled backend environment dev from the cloud." が表示されたらビルド完了です。


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
