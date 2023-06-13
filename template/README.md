# Introduction

ProjectName is a react native project based on InsideApp react-native-template.
We are using yarn as package manager.

# Organization

Orgnaized by feature, all directories into `src` represent a feature.

## General

A feature has folder and files specific to this feature. Below, an non-exhaustive list:

|Folder|Description|
|----|:----|
|components|Contains components|
|views|Contains screens|
|hooks|Contains all hooks necessary for this feature|
|types|Contains all feature releated types|

## App

This feature contains all the generic components, views, hooks etc

# Navigation

We already configure react-navigation with native-stack.

Screens must be define into `src/navigation/types/screens.ts` so we can use an enum instead of string and each navigator must have a param list type declaration as you can see into `src/navigation/components/RootStackNavigator.tsx`

## useAppNavigation

To be able to use typing in a easy way, we defined a hook `useAppNavigation` that must be use instead of `useNavigation`.

# Theme & styles

A theming system is available in this template, managing dark and light themes.
As we want the theme to be customizable, it is very simple and only contains colors, it is up to you to add what you need inside the Theme type `src/app/types/theme.ts`.

Two hooks are available to use theme in a easy way

## useAppTheme

Classic but necessary, this hooks help you to access the theme from anywhere in your app.

```
const theme = useAppTheme();
```

## useAppStyles

This hook helps you create and use theme inside react native stylesheet.

```
const getStyles: StylesCallback = (theme) => ({
    backgroundColor: theme.colors.background
});

function MyComponent() {
    const styles = useAppStyles(getStyles);

    ...
}
```