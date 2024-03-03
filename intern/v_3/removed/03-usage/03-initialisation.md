
# Initialisation

### Introduction

The `Initialise` method is responsible for initializing the ad networks within the Ads Kit plugin. It ensures that user consent information for ad personalization and privacy settings is passed to the ad networks before ads are served.

Initialise expects developer to pass **IConsetFormProvider** instance.

### Getting the Consent Form Provider

There are two ways to obtain a consent form provider:

- **Default Provider**: The plugin comes with a default consent form provider implementation if AdMob Ad Network is enabled. 

- **Custom Provider**: If you don't have AdMob Ad Network enabled, you need to create a class that implements the `IConsentFormProvider` interface, providing the necessary consent logic and UI based on your requirements.
  
  
  
  AdServices offers a method to fetch IConsentFormProvider instance with GetConsentFormProvider. Either you can use this method or directly pass the custom consent provider implementation.
  
  ```csharp
  AdServices.GetConsentFormProvider()
  ```
  
  
  
  Example:
  
  ```csharp
  private IConsentFormProvider GetConsentFormProvider()
  {
   IConsentFormProvider availableProvider = AdServices.GetConsentFormProvider();
   if(availableProvider == null)
   {
     throw new Exception("No IConsentFormProvider implementation found. Implement IConsentFormProvider interface or enable AdMob for a default consent form provider.");
   }
   return availableProvider;
  } 
  ```

> If you are having your own custom consent form provider by implementing IConsentFormProvider interface, AdServices **automatically detects** and returns it when you call **GetConsentFormProvider** method of **AdServices**



### Initialise

The `Initialise` method requires an instance of the `IConsentFormProvider` that you've obtained ahead:

```csharp
public void InitialiseAdsManager(IConsentFormProvider consentProvider)
{
    var operation = AdsManager.Initialise(consentProvider);
    operation.OnComplete += (result) =>
    {
        // Handle the completion of initialization
        // Now you can start loading or showing ads
    };
}
```

```csharp
InitialiseAdsManager(AdServices.GetConsentFormProvider())
```

In this example, the `InitialiseAdsManager` function takes an `IConsentFormProvider` as a parameter (`consentProvider`). Once you have either the default or your custom `IConsentFormProvider`, you pass it to `InitialiseAdsManager` when calling it from your game's initialization logic.

> As soon as the Initialisation of enabled Ad Networks is complete, Ad Networks starts loading the ads which are having auto load enabled.

With successful initialization, the Ads Manager is ready to manage ad requests in your application.
