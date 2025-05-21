import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="relative w-full h-[30vh] overflow-hidden">
        <img
          src="/Kesarfield1.jpeg" // Make sure to place this image in the public folder
          alt="Kashmir Kesar Field"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-2">
            Kashmir Kesar
          </h1>
          <p className="text-lg md:text-xl">Pure. Handpicked. Authentic.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex justify-center items-center px-4 py-10">
        <Card className="max-w-4xl w-full shadow-xl border border-orange-300 dark:border-orange-700">
          <CardContent className="p-6 space-y-5">
            <h2 className="text-3xl font-bold text-orange-600">About Us</h2>
            <p className="text-lg leading-7 text-muted-foreground">
              We are proud cultivators of the world’s finest saffron, grown in
              the pristine valleys of Kashmir, India. Our saffron, or "kesar",
              is delicately handpicked from our fields using generations-old
              methods, ensuring that every thread holds purity, aroma, and
              flavor.
            </p>
            <p className="text-lg leading-7 text-muted-foreground">
              From soil to strand, our mission is rooted in quality,
              sustainability, and tradition. Each pack of Kashmir Kesar tells a
              story of our heritage, care, and the golden touch of our land.
            </p>
            <img
              src="/kesarflower.jpeg"
              alt="Handpicking Saffron"
              className="w-full h-[250px] object-cover rounded-xl shadow-lg"
            />
            <br></br>
            <Link to="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Bulk Order
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
