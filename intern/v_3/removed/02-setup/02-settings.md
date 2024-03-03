

# Ads Kit Settings

The Ads Kit settings file, known as AdsKitSettings, is a scriptable object asset where the plugin's settings are stored. It serves as a central location for configuring various aspects of the Ads Kit plugin, including ad placements, ad network preferences, test device IDs, and other essential settings.

## Access Settings

To configure the Ads Kit settings for  , follow these steps:

1. Open your Unity project and navigate to the "Window" menu.

2. Navigate to Click on "Voxel Busters -> Ads Kit".

3. Click on "Open Settings Menu" to access the Ads Kit Settings.

> Once the settings file is accessed, it gets created in Assets/Resources folder

The settings in the Ads Kit plugin are organized into three sections :

## General

The "General" section in the Ads Kit plugin has fundamental settings and options that are required for the overall functionality of the plugin.

##### Is Enabled

 This option enables or disables the plugin. 

##### Is Debug Build

It toggles debug mode, which displays logs related to the plugin for debugging purposes. <mark>It should be disabled in release mode.</mark>

##### Ad Network Preferences

The "Ad Network Preferences" allows developers to configure ad network preferences for each ad type. This section is essential for serving ads within the app or game.

###### Configuration

- **Ad Type Arrays**: Within this section, developers can find arrays for each ad type, including banner, interstitial, video, and rewarded video.
- **Priority Assignment**: For each ad type array, developers can assign an ad network based on priority. This prioritization determines the order in which ad networks are utilized for serving ads.

###### Ad Serving Process

When an ad needs to be served at a specific ad placement, the plugin internally retrieves the list of ad network preferences for the ad type and requests an ad from that list. This ensures that the appropriate ad network is utilized for serving ads at the designated ad placements.

#### Ad Placements

Ad placements are locations within an app or game where ads are displayed, defined and configured.

Ad placements encompass banner ads, interstitial ads, video ads, and rewarded ads strategically positioned within an app or game to maximize visibility and user engagement while minimizing disruption to the user experience.

For each unique Ad that needs to be displayed, you need to create an Ad Placement entry here.

##### Configuration

- **Ad Type**: Specify the one of the ad types from the drop down. 
- **Ad Placement Id**: This is the id used to manage ads via code. Give a unique and readable name which you use to refer this ad placement in your codebase.
- **Auto Load Option**: Enabling this option initiates automatic loading as soon as the ad networks are initialized or when an ad finishes serving and is ready for the next load.

##### Banner Ad Customization

- **BannerAdOptionsAsset**: For banner ads, developers can utilize the BannerAdOptionsAsset feature to configure the position, size, and offset of the banner ad. This allows for customization of how the banner ad is displayed for a specific ad placement.

#### Ad Content Default Settings

This feature provides the option to set default configurations for ad types. Currently, only banner ad types have options to configure.

#### Test Devices

- Developers can provide a list of test device IDs for iOS and Android platforms, allowing them to test the functionality of ads on specific devices.

## Services

The Services section provides an overview of the available ad networks supported by the plugin. This currently includes AdMob, AppLovin, Unity Ads, Vungle(LiftOff), and TapJoy.

#### Enable Ad Networks

1. For enabling/selecting an Ad Network to be used in the app/game, just turn the toggle on.
2. Once an Ad Network is enabled, plugin **imports** the required packages **automatically**. Wait for the auto import to get finished.

#### Configure Ad Network

1. Once an Ad Network is enabled and auto import got finished, click on the Ad Network to configure it.
2. Enter the API/App Id's which can be obtained from the respective Ad Network's dashboard/portal.
3. If a specific Ad Placement needs to be serviced with an Ad Network, add an entry in Ad Meta Array.
4. In Ad Meta Array, connect the placement id and Ad Unit ids which are different for each platform.
5. **Finish** configuring by entering the API/App id's **in** the **original** Ad Network **settings** **panel**. For example : Ad Mob’s original settings are at Assets → Google Mobile Ads → Settings and AppLovin’s original settings are at AppLovin → Integration Manager etc. 

> In further releases, we will automate configuring the original Ad Network Settings panel with the details entered in our plugin.

## Help

Access support and other plugin resources from this section.

## Conclusion

The Ad Kit Settings in the Ads Kit plugin is a valuable tool for setting up Ads Kit. With its user-friendly interface, developers can easily configure and manage ad content. 
