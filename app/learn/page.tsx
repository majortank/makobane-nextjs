"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, GraduationCap, History, Star } from "lucide-react";

export default function LearnPage() {
  const [currentLesson, setCurrentLesson] = useState(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-primary mb-4">
          Learn Sotho Language
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Start your journey to mastering Sotho through our interactive lessons and cultural insights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Beginner
            </CardTitle>
            <CardDescription>Basic phrases and greetings</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Start Learning</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Intermediate
            </CardTitle>
            <CardDescription>Grammar and vocabulary</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Continue</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="h-5 w-5" />
              Advanced
            </CardTitle>
            <CardDescription>Complex conversations</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Explore</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5" />
              Cultural Studies
            </CardTitle>
            <CardDescription>History and traditions</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" variant="outline">Discover</Button>
          </CardContent>
        </Card>
      </div>

      <section className="bg-muted rounded-lg p-8 mb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Daily Practice Challenge</h2>
          <p className="mb-6 text-muted-foreground">
            Complete daily exercises to reinforce your learning and track your progress.
          </p>
          <Button size="lg">
            Start Today's Challenge
          </Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Learning Progress</CardTitle>
            <CardDescription>Track your journey in mastering Sotho</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Basics</span>
                  <span>75% Complete</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-3/4 bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Grammar</span>
                  <span>45% Complete</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-[45%] bg-primary rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Vocabulary</span>
                  <span>60% Complete</span>
                </div>
                <div className="h-2 bg-secondary rounded-full">
                  <div className="h-full w-[60%] bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Learning Resources</CardTitle>
            <CardDescription>Additional materials to support your studies</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li>
                <Button variant="link" className="h-auto p-0">
                  📚 Beginner's Guide to Sotho Grammar
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  🎵 Common Phrases Audio Pack
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  📝 Practice Worksheets
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0">
                  🎯 Vocabulary Flashcards
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}