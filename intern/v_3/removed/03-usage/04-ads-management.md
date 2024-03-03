
# Ads Management

In this section you can learn on how to load, show and hide/destroy ads.

## Loading Ads

Load ads using the **LoadAd** method if they are not marked for auto-loading:

```csharp
public void LoadAd(string placementId)
{
    AdsManager.LoadAd(placementId);
}
```

## Showing Ads

Display a loaded ad using the **ShowAd** method:

```csharp
public void ShowAd(string placementId)
{
    AdsManager.ShowAd(placementId);
}
```

If the Ad Placement is not marked as Auto Load, Ensure an ad is loaded before calling `ShowAd`; otherwise, an error will be thrown.

## Hiding Ads

Hide a displayed ad, only applicable to banner ads, with the **HideAd** method:

```csharp
public void HideAd(string placementId)
{
    AdsManager.HideAd(placementId);
    // Optionally, destroy the ad by setting destroy parameter to true
    // AdsManager.HideAd(placementId, destroy: true);
}
```

To merely hide the ad without destroying it, omit the destroy parameter.

## Destroying Ads

Passing the destroy parameter as true when hiding an ad releases all resources used by it.

> Destroy Banner Ads only if you no longer need it. Else just hide. Calling Destroy will hit the fill rate as it needs to be loaded again.


