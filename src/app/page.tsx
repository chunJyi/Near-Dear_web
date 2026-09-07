import { Header, Footer, Hero, Features, Screenshots, Download, Privacy } from '@/components';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <Features />
        <Screenshots />
        <Privacy />
        <Download />
      </main>
      <Footer />
    </>
  );
}
