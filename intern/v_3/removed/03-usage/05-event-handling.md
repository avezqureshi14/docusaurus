

## Events-Handling

> For getting the callbacks for events you can either implement IAdLifeCycleListener or attach a callback to **AsyncOperation** returned by the api methods.

Registering for events in the Ads Kit plugin enables your application to respond to various ad lifecycle events, such as ad loading, displaying, clicking, and errors. Here's a concise guide on how to handle event registration:

### Step 1: Implement the IAdLifecycleEventListener Interface

Your class should implement the `IAdLifecycleEventListener` interface to listen for ad lifecycle events. Here's an example implementation:

```csharp
public class MyAdEventHandler : MonoBehaviour, IAdLifecycleEventListener
{
    public void OnInitialisationComplete(InitialiseResult result)
    {
        Debug.Log("AdsKit is initialised successfully.");
    }

    public void OnInitialisationFail(Error error)
    {
        Debug.Log($"AdsKit failed to initialise with error {error}.");
    }

    // Other event-handling methods for loading, showing, and failing to show ads.
}
```

### Step 2: Register the Listener

To start receiving event notifications, you need to register the listener with the AdsManager using the `RegisterListener` method.

```csharp
private void RegisterListener()
{
    AdsManager.RegisterListener(this);
}
```

### Step 3: Unregister the Listener

When you no longer want to receive event notifications, or before destroying the object, you should unregister the listener using the `UnregisterListener` method.

```csharp
private void UnregisterListener()
{
    AdsManager.UnregisterListener(this);
}
```

### Step 4: Define Event Handlers

Within the class implementing `IAdLifecycleEventListener`, define handling logic for each of the following events:

- `OnInitialisationComplete`: Called upon successful SDK initialization.

- `OnInitialisationFail`: Called when SDK initialization fails.

- `OnLoadAdComplete`: Called upon successfully loading an ad.

- `OnLoadAdFail`: Called when an ad fails to load.

- `OnShowAdStart`: Called when an ad starts to play.

- `OnShowAdClick`: Called when the user clicks on the ad.

- `OnShowAdComplete`: Called when an ad is no longer displayed. This can be either due to hiding an Ad or destroyed an Ad or closing an Ad..

- `OnShowAdFail`: Called when there is a failure to show the ad.

- `OnAdImpressionRecorded`: Called when an ad impression is recorded.

- `OnAdPaid`: Called when an ad transaction is logged.

### Step 5: Implement Event Handling Logic

Provide concrete logic in your event handlers to define how your application should react to the events. For example:

```csharp
public void OnShowAdClick(string placementId)
{
    Debug.Log($"User clicked on ad placement: {placementId}.");
}
```
