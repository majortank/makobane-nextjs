"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Book, Volume as VolumeUp, Info } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function DictionaryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          Sotho Dictionary
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the richness of the Sotho language through our comprehensive dictionary.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex gap-4">
          <Input
            type="search"
            placeholder="Search for a word..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Button>
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Word of the Day</CardTitle>
            <CardDescription>Learn a new word every day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold">Dumela</h3>
                  <p className="text-sm text-muted-foreground">Greeting</p>
                </div>
                <Button variant="ghost" size="icon">
                  <VolumeUp className="h-5 w-5" />
                </Button>
              </div>
              <p>Hello / Good day</p>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm italic">
                  "Dumela, ke thabile ho u bona" - Hello, I'm happy to see you
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Reference</CardTitle>
            <CardDescription>Common categories and themes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="justify-start">
                <Book className="h-4 w-4 mr-2" />
                Greetings
              </Button>
              <Button variant="outline" className="justify-start">
                <Book className="h-4 w-4 mr-2" />
                Numbers
              </Button>
              <Button variant="outline" className="justify-start">
                <Book className="h-4 w-4 mr-2" />
                Family
              </Button>
              <Button variant="outline" className="justify-start">
                <Book className="h-4 w-4 mr-2" />
                Colors
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Search Results</h2>
          <Button variant="outline">
            <Info className="h-4 w-4 mr-2" />
            Search Tips
          </Button>
        </div>

        {searchResults.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Book className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">
                {searchTerm
                  ? "No words found. Try a different search term."
                  : "Start typing to search the dictionary."}
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {/* Search results will be mapped here */}
          </div>
        )}
      </section>
    </div>
  );
}