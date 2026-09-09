import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Location Privacy',
  description: 'Near&Dear Location Privacy - How we handle your location data.',
};

export default function LocationPrivacyPage() {
  return (
    <>
      <h1>Location Privacy</h1>
      <p><strong>Last Updated:</strong> September 2026</p>

      <h2>1. Location Data Collection</h2>
      <p>
        NearAndDear collects your latitude, longitude, and timestamp when you enable location
        sharing. This data is used solely to show your latest location to your authorized friends.
      </p>

      <h2>2. Background Location</h2>
      <p>
        When location sharing is active, NearAndDear may update your location while the app is
        running in the background. A persistent notification will be displayed to inform you that
        location tracking is active.
      </p>

      <h2>3. Who Can See Your Location</h2>
      <p>
        Only friends you have accepted can see your location. You can stop sharing at any time by
        turning off the location sharing feature.
      </p>

      <h2>4. Data Storage</h2>
      <p>
        Location data is stored securely using Appwrite. Only your latest location is stored; we do
        not maintain a history of your past locations.
      </p>

      <h2>5. Control Your Location</h2>
      <p>You have full control over your location sharing:</p>
      <ul>
        <li>Turn location sharing on or off at any time</li>
        <li>Revoke friend access at any time</li>
        <li>Manage location permissions through device settings</li>
      </ul>
    </>
  );
}
