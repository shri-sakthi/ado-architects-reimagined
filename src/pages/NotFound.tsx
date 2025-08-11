import { Helmet } from "react-helmet-async";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Page Not Found | ADO Architects</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-4">Oops! Page not found</p>
          <a href="/" className="text-accent underline">Return to Home</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
