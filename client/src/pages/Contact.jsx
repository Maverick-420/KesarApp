import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICEID, // Replace with your EmailJS Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATEID, // Replace with your EmailJS Template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLICKEY // Replace with your EmailJS Public Key
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
      <Card className="w-full max-w-2xl shadow-xl border border-kesarilight dark:kesari">
        <CardContent className="p-6 space-y-6">
          <h2 className="text-3xl font-bold text-kesarilight">Contact Us</h2>
          <p className="text-muted-foreground">
            Have questions or need support? We're here to help!
          </p>

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
                +91-7051425899
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4 pt-4">
            <Input placeholder="Your Name" name="user_name" required />
            <Input
              placeholder="Your Email"
              name="user_email"
              type="email"
              required
            />
            <Textarea
              placeholder="Your Message"
              name="message"
              rows={5}
              required
            />
            <Button
              type="submit"
              className="w-full bg-kesarilight hover:bg-kesari text-white"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {sent && (
            <p className="text-green-600 text-center font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
