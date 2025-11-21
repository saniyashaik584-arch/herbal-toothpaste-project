import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, User, GraduationCap, BookOpen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Team = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Project Team
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold text-foreground">
                Academic Details
              </h3>
            </div>
            <div className="space-y-4 text-foreground/80">
              <div className="flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Project Type:</p>
                  <p>Mini Project - Pharmaceutical Formulation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Department:</p>
                  <p>Pharmacy / Pharmaceutical Sciences</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Institution:</p>
                  <p>College of Pharmaceutical Sciences</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Contact Us
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="bg-background"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        <div className="text-center text-sm text-foreground/60 animate-fade-in animate-delay-200">
          <p>© 2024 Herbal Toothpaste Project. All rights reserved.</p>
          <p className="mt-2">Made with natural ingredients and care</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
