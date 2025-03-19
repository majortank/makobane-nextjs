"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, MessageSquare, ThumbsUp } from "lucide-react";

export default function CommunityPage() {
  const [suggestions, setSuggestions] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          Sotho Language Community
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join our community of language enthusiasts, contribute to the dictionary, and help preserve Sotho culture.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Active Members
            </CardTitle>
            <CardDescription>Join our growing community</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,234</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Contributions
            </CardTitle>
            <CardDescription>Word suggestions and definitions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">567</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5" />
              Approved Words
            </CardTitle>
            <CardDescription>Community verified entries</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">289</p>
          </CardContent>
        </Card>
      </div>

      <section className="bg-muted rounded-lg p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contribute to the Dictionary</h2>
          <p className="mb-6 text-muted-foreground">
            Help us grow our dictionary by suggesting new words, providing translations, or adding cultural context.
          </p>
          <Button size="lg">
            Submit a Word
          </Button>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Recent Contributions</h2>
        <div className="grid gap-4">
          {suggestions.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">No suggestions yet. Be the first to contribute!</p>
              </CardContent>
            </Card>
          ) : (
            suggestions.map((suggestion) => (
              <Card key={suggestion.id}>
                <CardContent>
                  {/* Suggestion content will go here */}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>
    </div>
  );
}