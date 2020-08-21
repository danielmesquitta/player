# Player

An React Native app that lists audiobooks to be played, with a screen where you can control the playback, being able also to run and contol it in background mode.

### Technologies

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Track Player](https://react-native-track-player.js.org/)
- [React Native Community Slider](https://github.com/react-native-community/react-native-slider)
- [Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)

## GETTING STARTED
### Requirements

- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- [git](https://git-scm.com/)
- [React Native development environment](https://reactnative.dev/docs/environment-setup)

#### Clone the project and access the folder

```shell
$ git clone https://github.com/danielmesquitta/player && cd player
```

### Run on android
With your emulator/device connected, run:

```shell
# Install the dependencies
$ yarn

# Start
$ yarn android

#If it doesn't start automatically, run the following and reopen the app
$ yarn start
```

### Run on ios

This app was made on a Linux computer, so if you want to run it on ios, you will need a MacOS to link the dependencies. 
First you should [link Vector Icons manually](https://github.com/oblador/react-native-vector-icons#ios) and than run ``npx pod install``. 
After that, With your emulator/device connected, run:

```shell
# Install the dependencies
$ yarn

# Start
$ yarn ios

#If it doesn't start automatically, run the following and reopen the app
$ yarn start
```
