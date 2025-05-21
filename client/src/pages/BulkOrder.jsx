import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { Mail, Phone, PackageCheck } from "lucide-react";

const BulkOrder = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID,
        import.meta.env.VITE_EMAILJS_TEMPLATEID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center items-center px-4 py-6">
      <Card className="w-full max-w-3xl shadow-xl border border-kesarilight">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-kesarilight flex items-center gap-2">
            <PackageCheck className="text-kesarilight" />
            Bulk Orders
          </h2>
          <p className="text-muted-foreground">
            At Kashmiri Kesar Inc, we offer a wide range of premium Saffron
            products tailored for commercial use and resellers. Contact us for
            pricing, packaging, and custom supply needs.
          </p>

          <div className="bg-gray-50 dark:bg-zinc-800 p-4 rounded-md text-sm space-y-2 border-l-4 border-kesarilight">
            <p className="font-semibold text-kesarilight">
              Available Products:
            </p>
            <ul className="list-disc list-inside">
              <li>
                <strong>Saffron (Kashmiri):</strong> Mogra, Lacha, Half Cut,
                Chura
              </li>
              <li>
                <strong>Saffron Powder:</strong> Grade 1 & Grade 2
              </li>
              <li>
                <strong>Other Products:</strong> Shilajit (Solid, Paste,
                Powder), Ashwagandha
              </li>
            </ul>
            <p className="text-xs italic">
              We support bulk loose & labeled packaging.
            </p>
          </div>

          {/* Static Contact Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-lg">
              <Mail className="w-5 h-5 text-kesarilight" />
              <span>support@kashmirkesar.com</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <Phone className="w-5 h-5 text-kesarilight" />
              <a
                href="https://wa.me/917051425899"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-white hover:underline"
              >
                +91-7051425899 (Call/WhatsApp)
              </a>
            </div>
          </div>

          {/* Bulk Order Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 pt-4">
            <Input placeholder="Business/Full Name" name="user_name" required />
            <Input
              placeholder="Email Address"
              name="user_email"
              type="email"
              required
            />
            <Input placeholder="Phone Number" name="user_phone" required />
            <Textarea
              placeholder="Describe your bulk requirement, product type, quantity & packaging preferences..."
              name="message"
              rows={6}
              required
            />
            <Button
              type="submit"
              className="w-full bg-kesarilight hover:bg-kesari text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Bulk Inquiry"}
            </Button>
          </form>

          {sent && (
            <p className="text-green-600 text-center font-semibold">
              ✅ Your inquiry has been sent successfully!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BulkOrder;
