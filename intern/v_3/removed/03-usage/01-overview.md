


# Implementation Oveview

This overview guide will help you implement and utilize the Ads Kit functionality within your Unity project.

1. Import Namespaces - Required namespaces to use plugin's specific classes.

2. Initialise - Initialise the plugin with a consent form provider implementation

3. Load Ad - Load a placement manually (required if Auto Load is off)

4. Show Ad - Show an Ad

5. Hide Ad - Hide/Destroy an Ad as required

6. Register Events - Get Ad Life Cycle events

> For getting the callbacks for events you can either implement IAdLifeCycleListener or attach a callback to AsyncOperation returned by the api methods.
