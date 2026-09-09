import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Near&Dear Disclaimer - Important information about our service.',
};

export default function DisclaimerPage() {
  return (
    <>
      <h1>Disclaimer</h1>
      <p><strong>Last Updated:</strong> September 2026</p>

      <h2>1. Organization</h2>
      <p>
        NearAndDear is an independent application. We are not affiliated with, owned by, operated
        by, endorsed by, or officially connected with any government organization, government
        department, or government authority.
      </p>

      <h2>2. General Purpose</h2>
      <p>
        NearAndDear is provided as a tool to help users share and view the latest available location
        of connected friends.
      </p>

      <h2>3. Location Accuracy</h2>
      <p>
        Location information may be delayed, unavailable, or inaccurate due to GPS, network
        connectivity, device settings, battery optimization, environmental conditions, or other
        technical limitations.
      </p>

      <h2>4. No Emergency Guarantee</h2>
      <p>
        NearAndDear is not an emergency, rescue, medical, security, or life-safety service.
      </p>
      <p>
        You should not rely solely on NearAndDear for emergency or safety-critical situations.
      </p>

      <h2>5. Service Availability</h2>
      <p>
        We do not guarantee that NearAndDear will always be available, uninterrupted, secure, or
        error-free.
      </p>

      <h2>6. Third-Party Services</h2>
      <p>
        NearAndDear may depend on third-party services including Google Sign-In, Google Maps,
        Appwrite, network providers, and other technologies.
      </p>
      <p>
        We do not have complete control over the availability, accuracy, or performance of these
        third-party services.
      </p>

      <h2>7. User Responsibility</h2>
      <p>
        Users are responsible for how they use location information obtained through NearAndDear and
        for respecting the privacy and rights of other people.
      </p>

      <h2>8. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, we are not responsible for losses,
        damages, or inconvenience resulting from inaccurate, delayed, unavailable, or incomplete
        location information, network failures, device problems, or third-party service
        interruptions.
      </p>
      <p>
        Nothing in this Disclaimer excludes liability that cannot legally be excluded or limited.
      </p>

      <h2>9. Updates</h2>
      <p>
        We may update this Disclaimer from time to time as the App, technology, or applicable
        requirements change.
      </p>

      <h2>10. Contact</h2>
      <p><strong>Email:</strong> [Your Official Email]</p>
    </>
  );
}
