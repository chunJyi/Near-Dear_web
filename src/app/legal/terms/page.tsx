import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Near&Dear Terms & Conditions - Read our terms of service.',
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms &amp; Conditions</h1>
      <p><strong>Last Updated:</strong> September 2026</p>

      <h2>1. Introduction</h2>
      <p>
        NearAndDear (&quot;App&quot;) is a location-sharing application designed to help users share
        their latest location with people they choose to connect with.
      </p>
      <p>
        By creating an account or using NearAndDear, you agree to comply with these Terms &amp;
        Conditions.
      </p>

      <h2>2. Account</h2>
      <p>
        NearAndDear uses Google Sign-In for authentication. You are responsible for maintaining the
        security of your Google account and for activities performed through your NearAndDear account.
      </p>

      <h2>3. Friend Feature</h2>
      <p>
        NearAndDear allows users to connect with other users through the friend feature. You must
        respect other users and must not use the friend or location features to harass, threaten,
        stalk, or harm another person.
      </p>

      <h2>4. Location Sharing</h2>
      <p>
        NearAndDear may update your location in the background when you have granted the required
        location permission and the location-sharing feature is active.
      </p>
      <p>
        A persistent notification may be displayed while background location tracking is active.
      </p>

      <h2>5. Location Accuracy</h2>
      <p>
        Location information may not always be accurate or available due to GPS signals, Internet
        connectivity, device settings, battery optimization, or other technical conditions.
      </p>

      <h2>6. Prohibited Use</h2>
      <p>You must not:</p>
      <ul>
        <li>Use the App for illegal activities.</li>
        <li>Stalk, threaten, harass, or harm another person.</li>
        <li>Obtain another person&apos;s location without authorization.</li>
        <li>Access another user&apos;s account without permission.</li>
        <li>Attempt to hack, attack, or disrupt the App.</li>
        <li>Introduce malicious software or code.</li>
        <li>Circumvent security controls.</li>
      </ul>

      <h2>7. Third-Party Services</h2>
      <p>
        NearAndDear may use third-party services such as Google Sign-In, Google Maps, and Appwrite.
        These services may have their own terms and privacy policies.
      </p>

      <h2>8. Service Availability</h2>
      <p>
        We do not guarantee that the App will always be available, uninterrupted, secure, or
        error-free.
      </p>

      <h2>9. Changes</h2>
      <p>
        We may update these Terms when necessary. Updated Terms will be made available through the
        App or our website.
      </p>

      <h2>10. Contact</h2>
      <p>For questions regarding these Terms, please contact us at:</p>
      <p><strong>Email:</strong> [Your Official Email]</p>
    </>
  );
}
