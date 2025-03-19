import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Globe2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          Sotho Language & Culture Preservation
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover, learn, and help preserve the rich heritage of the Sotho language and culture
          through our interactive platform.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Dictionary
            </CardTitle>
            <CardDescription>
              Explore our comprehensive Sotho dictionary with audio pronunciations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/dictionary">Browse Dictionary</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe2 className="h-5 w-5" />
              Learn
            </CardTitle>
            <CardDescription>
              Interactive lessons and cultural insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/learn">Start Learning</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Community
            </CardTitle>
            <CardDescription>
              Connect with other learners and contribute to the dictionary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <Link href="/community">Join Community</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Word of the Day</h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Dumela</CardTitle>
            <CardDescription>Greeting</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-2">Hello / Good day</p>
            <p className="text-muted-foreground">
              The most common greeting in Sotho, used throughout the day.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}