import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Package2, User, DollarSign, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">Welcome to SaaSify</h1>
        <p className="text-lg text-muted-foreground">The ultimate solution for managing your business efficiently.</p>
        <Button size="lg" className="mt-4">Get Started</Button>
        <img src="/placeholder.svg" alt="Product Illustration" className="mx-auto mt-8 w-1/2" />
      </section>

      {/* Features Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
            </CardHeader>
            <CardContent>
              <CardTitle>Feature One</CardTitle>
              <p>Manage your tasks efficiently with our intuitive interface.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <User className="h-10 w-10 mx-auto" />
            </CardHeader>
            <CardContent>
              <CardTitle>Feature Two</CardTitle>
              <p>Collaborate with your team seamlessly.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <DollarSign className="h-10 w-10 mx-auto" />
            </CardHeader>
            <CardContent>
              <CardTitle>Feature Three</CardTitle>
              <p>Track your expenses and revenues in real-time.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield className="h-10 w-10 mx-auto" />
            </CardHeader>
            <CardContent>
              <CardTitle>Feature Four</CardTitle>
              <p>Keep your data secure with our top-notch security features.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Testimonials</h2>
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <Card>
                <CardContent>
                  <img src="/placeholder.svg" alt="Customer" className="mx-auto rounded-full w-24 h-24" />
                  <p className="mt-4">"SaaSify has transformed the way we manage our business. Highly recommended!"</p>
                  <p className="mt-2 font-bold">John Doe</p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card>
                <CardContent>
                  <img src="/placeholder.svg" alt="Customer" className="mx-auto rounded-full w-24 h-24" />
                  <p className="mt-4">"An essential tool for any business looking to streamline operations."</p>
                  <p className="mt-2 font-bold">Jane Smith</p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Pricing Section */}
      <section className="text-center space-y-8">
        <h2 className="text-3xl font-bold">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$10</p>
              <p className="text-muted-foreground">per month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Pro Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$30</p>
              <p className="text-muted-foreground">per month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
                <li>Feature Four</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Enterprise Plan</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">$50</p>
              <p className="text-muted-foreground">per month</p>
              <ul className="mt-4 space-y-2">
                <li>Feature One</li>
                <li>Feature Two</li>
                <li>Feature Three</li>
                <li>Feature Four</li>
                <li>Feature Five</li>
              </ul>
              <Button className="mt-4">Choose Plan</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center space-y-4">
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-muted-foreground">About</a>
          <a href="/contact" className="text-muted-foreground">Contact</a>
          <a href="/privacy" className="text-muted-foreground">Privacy Policy</a>
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://twitter.com" className="text-muted-foreground">Twitter</a>
          <a href="https://facebook.com" className="text-muted-foreground">Facebook</a>
          <a href="https://linkedin.com" className="text-muted-foreground">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;