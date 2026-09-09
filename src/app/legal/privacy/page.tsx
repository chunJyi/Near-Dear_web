import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Near&Dear Privacy Policy - How we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated:</strong> September 2026</p>

      <h2>1. Introduction</h2>
      <p>
        NearAndDear respects your privacy and is committed to protecting your personal information.
        This Privacy Policy explains what information we collect, how we use it, how we share it,
        and how you can manage your information.
      </p>

      <h2>2. Information We Collect</h2>
      <p>Depending on how you use NearAndDear, we may process:</p>
      <ul>
        <li>Google Account information</li>
        <li>Name and email address</li>
        <li>Profile information</li>
        <li>User ID</li>
        <li>Friend relationships</li>
        <li>Location information</li>
        <li>Device and technical information</li>
        <li>App usage and diagnostic information</li>
      </ul>

      <h2>3. Google Sign-In</h2>
      <p>
        NearAndDear uses Google Sign-In for authentication. We may receive information such as your
        name, email address, profile information, and Google account identifier.
      </p>
      <p>We do not receive or store your Google password.</p>

      <h2>4. Location Information</h2>
      <p>Location is a core feature of NearAndDear.</p>
      <p>
        When you grant the required permission and enable location sharing, the App may collect your
        latitude, longitude, and the time associated with your latest location.
      </p>
      <p>Location may be updated while the App is running in the background.</p>
      <p>
        When background location tracking is active, a notification may be displayed on your device
        indicating that location tracking is currently running, as required by the Android operating
        system.
      </p>

      <h2>5. How We Use Information</h2>
      <p>We use collected information to:</p>
      <ul>
        <li>Create and manage your account.</li>
        <li>Authenticate your identity.</li>
        <li>Provide friend functionality.</li>
        <li>Provide location-sharing functionality.</li>
        <li>Display your latest location to authorized friends.</li>
        <li>Display locations on maps.</li>
        <li>Maintain and secure the App.</li>
        <li>Detect misuse and security issues.</li>
        <li>Troubleshoot technical problems.</li>
      </ul>

      <h2>6. Location Sharing With Friends</h2>
      <p>
        Your latest location may be made available to friends you have authorized through
        NearAndDear.
      </p>
      <p>You should only connect with people you trust.</p>

      <h2>7. Data Storage</h2>
      <p>
        NearAndDear uses Appwrite as part of its backend infrastructure. Appwrite may be used for
        authentication, database operations, and storing information necessary to provide the
        App&apos;s functionality.
      </p>

      <h2>8. Latest Location</h2>
      <p>
        NearAndDear is designed to provide the latest available location rather than a continuous
        location history or timeline.
      </p>

      <h2>9. Third-Party Services</h2>
      <p>
        NearAndDear may use Google services, Google Maps, Appwrite, and other third-party
        technologies. These services may process information according to their own policies.
      </p>

      <h2>10. Data Security</h2>
      <p>
        We take reasonable measures to protect your information from unauthorized access, alteration,
        disclosure, or destruction. However, no Internet-based service can guarantee absolute
        security.
      </p>

      <h2>11. Data Sharing</h2>
      <p>We do not sell your personal information.</p>
      <p>
        Information may be shared or made available when necessary to provide the App&apos;s
        functionality, operate our infrastructure, provide map services, or comply with applicable
        legal requirements.
      </p>

      <h2>12. Your Privacy Choices</h2>
      <p>
        You can manage location permissions through your device settings. Depending on applicable law
        and the features available in the App, you may also request access, correction, or deletion
        of your personal information.
      </p>

      <h2>13. Contact</h2>
      <p><strong>Email:</strong> [Your Official Email]</p>
    </>
  );
}
