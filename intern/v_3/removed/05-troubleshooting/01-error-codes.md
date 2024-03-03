
## Handling Error Codes

When integrating ads into your Unity application, it's important to be able to understand and handle errors that may occur during the ad management lifecycle. The Ads Kit plugin provides a structured set of error codes that you'll encounter while using the plugin. Here's what each error code means and how you can handle them in your Unity project.

### Error Code Guide

#### AdErrorCode.kUnknown (0)

- Description: An unknown or unexpected error has occurred. The exact issue is not identifiable.
- Handling: Log the error and perhaps try reinitializing the ads system after a delay.

```csharp
if (errorCode== AdErrorCode.kUnknown)
{
    Debug.LogError("An unknown error occurred in the Ads Kit Plugin.");
    // Consider retrying or performing a fallback action
}
```

#### AdErrorCode.kNotInitialized (1)

- Description: The system failed to initialize, often due to a misconfiguration or an issue in the startup sequence.
- Handling: Confirm initialization parameters and retry initializing the ads manager.

```csharp
if (errorCode== AdErrorCode.kNotInitialized)
{
    Debug.LogError("Ads Kit Plugin wasn't initialized properly.");
    // Double-check initialization code and parameters
}
```

#### AdErrorCode.kConsentNotAvailable (2)

- Description: Required user consent is not available or consent form has not been agreed upon by the user.
- Handling: Prompt the user with the consent form.

```csharp
if (errorCode== AdErrorCode.kConsentNotAvailable)
{
    Debug.LogError("Required user consent not available.");
    // Prompt user for consent or handle non-personalized ads delivery
}
```

#### AdErrorCode.kNoInternet (3)

- Description: An internet connection is not available, preventing ad loading and display.
- Handling: Check the user's internet connectivity and try again once a connection is established.

```csharp
if (errorCode== AdErrorCode.kNoInternet)
{
    Debug.LogWarning("No internet connection available.");
    // Check internet connectivity and retry later
}
```

#### AdErrorCode.kLoadFail (4)

- Description: Failed to load ad content, which may be due to network issues or ad network problems.
- Handling: Attempt to load the ad again after a brief delay or use fallback content.

```csharp
if (errorCode== AdErrorCode.kLoadFail)
{
    Debug.LogError("Failed to load ad content.");
    // Retry loading after some time or handle with a fallback
}
```

#### AdErrorCode.kShowFail (5)

- Description: The system failed to show ad content, possibly because ads aren't loaded or an internal issue occurred.
- Handling: Ensure ads are loaded before attempting to show them; if necessary, reload ads.

```csharp
if (errorCode== AdErrorCode.kShowFail)
{
    Debug.LogError("Failed to show ad content.");
    // Check if the ad is loaded. If not, load it before showing
}
```

#### AdErrorCode.kUserCancelled (6)

- Description: User has cancelled the ad before it could be shown or during its display.
- Handling: Respect the user cancellation and ensure a smooth user experience.

```csharp
if (errorCode== AdErrorCode.kUserCancelled)
{
    Debug.LogWarning("User cancelled the ad.");
    // Optionally provide user feedback or resume game/application flow
}
```

#### AdErrorCode.kNotSupported (7)

- Description: This error code indicates that a specific functionality is not supported by the system or platform.
- Handling: Implement platform-specific checks or provide alternative content if necessary.

```csharp
if (errorCode== AdErrorCode.kNotSupported)
{
    Debug.LogError("The functionality is not supported on this system.");
    // Provide alternative solutions as per the platform capabilities
}
```

#### AdErrorCode.kConfigurationNotFound (8)

- Description: The configuration required for the ad system to function is missing or incorrect.
- Handling: Check the ad network and plugin configurations; ensure they're set up properly.

```csharp
if (errorCode== AdErrorCode.kConfigurationNotFound)
{
    Debug.LogError("Ad configuration not found or it's incorrect.");
    // Review ad network configuration and correct it
}
```

### Implementing Error Handling

When you integrate ads into your project, you should set up a listener for ad-related events and react accordingly to these error codes. Here's a stub that demonstrates how you can handle different error scenarios:

```csharp
public void OnAdOperationFailed(string placementId, int errorCode)
{
    // Handle based on errorCode
    switch (errorCode)
    {
        case AdErrorCode.kUnknown:
            // Handle unknown error
            break;
        case AdErrorCode.kNotInitialized:
            // Handle not initialized error
            break;
        case AdErrorCode.kConsentNotAvailable:
            // Handle consent not available error
            break;
        // ... handle other error codes similarly
        default:
            Debug.LogError($"Unrecognized error code: {errorCode}");
            break;
    }
}
```
