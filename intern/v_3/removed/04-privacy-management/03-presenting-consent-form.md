

# Presenting Consent Form

Presenting a consent form using the Ads Kit plugin involves offering users the opportunity to provide their consent for personalized ads and other privacy-related attributes before initializing ad networks. Here's how to approach it:

### Steps to Present the Consent Form

1. **Determine the Need for Consent**: Decide if your game requires presenting a consent form, which is necessary if you're serving personalized/non-personalised ads or collecting user data for ad-related purposes.

2. **Obtain a Consent Form Provider**:
   
   - Use the **AdServices** utility class to query the available **IConsentFormProvider** implementations. 
     
     ```csharp
     var availableProviders = AdServices.FindConsentFormProviders();
     IConsentFormProvider consentProvider = availableProviders.Length > 0 ? availableProviders[0] : null;
     ```
   
   - If AdMob is enabled, the plugin provides a default implementation that uses AdMob’s User Messaging Platform (UMP) framework, compliant with the IAB's Transparency & Consent Framework (TCF) specification.

3. **Custom Consent Form Provider (Optional)**:
   
   - If you wish to customize the consent form, implement the **IConsentFormProvider** interface to create your provider and handle the display and result of user consent.

4. **Initialize Ads Manager**:
   
   - Pass the obtained consent provider to the `InitialiseAdsManager` method which initializes the Ads Manager:
     
     ```csharp
     public void InitialiseAdsManager(IConsentFormProvider consentProvider)
     {
        var operation = AdsManager.Initialise(consentProvider);
        operation.OnComplete += (result) =>
        {
            // Ad networks have been initialised, and you can start loading/showing ads
        };
     }
     ```
     
     Call this method during your game startup routine.

5. **Setup Consent Form via AdMob Dashboard** (If using AdMob):
   
   - Follow the instructions provided in the [AdMob support](https://support.google.com/admob/answer/10113207) to set up the consent form on the AdMob dashboard.

By following these steps, developers can ensure they present a consent form to their players, allowing them to make informed decisions about their data and adhere to privacy regulations such as GDPR and COPPA.
