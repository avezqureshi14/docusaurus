
# Sample Code

Below is a concise example demonstrating  the usage:

- Import required namespaces
- Initialization of the AdsKit with user consent.
- Registering event listeners for ad lifecycle events.
- Loading and showing ads with placement Ids.
- Implementing callbacks for successful and failed ad operations.

```csharp title="C#"
// Import required namespaces
using VoxelBusters.CoreLibrary;
using VoxelBusters.AdsKit;

// Implement IAdLifecycleEventListener to listen for ad related events
public class AdsManager : MonoBehaviour, IAdLifecycleEventListener
{
    private void OnEnable()
    {
        AdsManager.RegisterListener(this);
    }

    private void OnDisable()
    {
        AdsManager.UnregisterListener(this);
    }

    private void Start()
    {
        InitializeAds();
    }

    public void InitializeAds(Action<bool> onComplete)
    {
       // This could be a default provider or your own custom implementation
        IConsentFormProvider consentProvider = AdServices.GetConsentFormProvider();
        var operation = AdsManager.Initialise(consentProvider);
        operation.OnComplete += (result) =>
        {
            Debug.Log("Initialisation complete! Now start loading/displaying the ads.");
            bool success = (result.InvalidNetworks.Length == 0);
            onComplete?.Invoke(success);
        };
    }

    // Get ad placement Id from Ad Placements section of General section in AdsKitSettings.
    public void LoadAd(string placementId)
    {
        AdsManager.LoadAd(placementId);
    }

    // Get ad placement Id from Ad Placements section of General section in AdsKitSettings.
    private void ShowAd(string placementId)
    {
        AdsManager.ShowAd(placementId);
    }

    // Get ad placement Id from Ad Placements section of General section in AdsKitSettings.
    private void HideAd(string placementId)
    {
        // HideAd only applicable to Banner Ad Type alone.
        AdsManager.HideAd(placementId, destroy: false);
    }

    #region IAdLifecycleEventListener implementation

    public void OnInitialisationComplete(InitialiseResult result)
    {
      Debug.Log("AdsKit is initialised successfully.");
    }

    public void OnInitialisationFail(Error error)
    {
      Debug.Log($"AdsKit failed to initialise with error {error}.");
    }

    public void OnLoadAdComplete(string placementId, LoadAdResult result)
    {
      Log($"AdsKit has successfully loaded ad for placementId: {placementId}.");
    }

    public void OnLoadAdFail(string placementId, Error error)
    {
      Debug.Log($"AdsKit has failed to load ad for placementId: {placementId} with error: {error}.");
    }

    public void OnShowAdStart(string placementId)
    {
      Debug.Log($"AdsKit has started showing ad for placementId: {placementId}.");
    }    

    public void OnShowAdClick(string placementId)
    {
      Debug.Log($"AdsKit has recognised click on ad for placementId: {placementId}.");
    }

    public void OnShowAdComplete(string placementId, ShowAdResult result)
    {
      Debug.Log($"AdsKit has completed showing ad for placementId: {placementId} with result: {result}.");
    }

    public void OnShowAdFail(string placementId, Error error)
    {
      Debug.Log($"AdsKit has failed to show ad for placementId: {placementId} with Error: {error}.");
    }

    public void OnAdImpressionRecorded(string placementId)
    {
      Debug.Log($"AdsKit has recorded impression for ad for placementId: {placementId}.");
    }

    public void OnAdPaid(string placementId, AdTransaction transaction)
    {
      Debug.Log($"AdsKit has recorded pay for ad: {placementId} with transaction: {transaction}.");
    }

    #endregion
}


```

In this example, `AdsManager` is a MonoBehaviour that initializes the AdsKit when the game starts. It registers itself as an `IAdLifecycleEventListener` to handle ad events.
