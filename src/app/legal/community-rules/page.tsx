import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Community Rules',
  description: 'Near&Dear Community Rules - Guidelines for using our platform.',
};

export default function CommunityRulesPage() {
  return (
    <>
      <h1>Community Rules</h1>
      <p><strong>Last Updated:</strong> September 2026</p>

      <h2>1. Respect Others</h2>
      <p>
        Treat all NearAndDear users with respect. Harassment, bullying, threats, intimidation, or
        behavior intended to cause harm or distress are not allowed.
      </p>

      <h2>2. Location Privacy</h2>
      <p>
        Location information is sensitive. Do not attempt to obtain, share, monitor, or misuse
        another person&apos;s location without appropriate authorization.
      </p>

      <h2>3. Account Safety</h2>
      <p>
        Do not use another person&apos;s account, impersonate another person, or attempt to access an
        account without authorization.
      </p>

      <h2>4. No Stalking</h2>
      <p>
        NearAndDear must not be used to stalk, secretly monitor, threaten, or control another person.
      </p>

      <h2>5. Security Abuse</h2>
      <p>
        Do not hack, attack, exploit, reverse engineer, overload, or interfere with NearAndDear or
        its backend services.
      </p>

      <h2>6. Illegal Activities</h2>
      <p>
        Do not use NearAndDear to facilitate or participate in activities that violate applicable
        laws.
      </p>

      <h2>7. Reporting</h2>
      <p>
        If you believe that another user is violating these rules or creating a safety concern,
        please report the issue through the available support channels.
      </p>

      <h2>8. Enforcement</h2>
      <p>
        Depending on the seriousness of a violation, we may warn, restrict, suspend, or terminate an
        account.
      </p>

      <h2>9. Safety First</h2>
      <p>
        NearAndDear is not an emergency service. In an emergency, contact the appropriate emergency
        services or authorities.
      </p>
    </>
  );
}
