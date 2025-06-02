
import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowUp, ArrowDown, Users, Activity, CreditCard, BarChart } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Admin</h1>
        <p className="text-muted-foreground">Here's what's happening with your SaaS today.</p>
      </div>

      {/* Stats cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Active users stat */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">2,845</div>
              <div className="flex items-center text-sm font-medium text-green-500">
                <ArrowUp className="mr-1 h-4 w-4" />
                12.5%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+24 users today</p>
          </CardContent>
        </Card>

        {/* MRR stat */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Monthly Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">$12,423</div>
              <div className="flex items-center text-sm font-medium text-green-500">
                <ArrowUp className="mr-1 h-4 w-4" />
                8.2%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+$1,060 this month</p>
          </CardContent>
        </Card>

        {/* Conversion rate */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Conversion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">3.2%</div>
              <div className="flex items-center text-sm font-medium text-red-500">
                <ArrowDown className="mr-1 h-4 w-4" />
                1.1%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Compared to last month</p>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">148</div>
              <div className="flex items-center text-sm font-medium text-green-500">
                <ArrowUp className="mr-1 h-4 w-4" />
                4.3%
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">+12 new projects</p>
          </CardContent>
        </Card>
      </div>

      {/* Main dashboard content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Usage chart */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Usage Statistics</CardTitle>
            <CardDescription>
              Your users' activity over the past 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center bg-muted/30 rounded-md">
              <BarChart className="h-12 w-12 text-muted-foreground" />
              <span className="ml-2 text-muted-foreground">Chart will render here</span>
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card className="row-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions by your users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">New user registered</p>
                <p className="text-xs text-muted-foreground mt-1">
                  john@example.com - 10 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">New subscription</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Pro Plan - 35 minutes ago
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Project created</p>
                <p className="text-xs text-muted-foreground mt-1">
                  "Marketing Campaign" - 2 hours ago
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Plan upgraded</p>
                <p className="text-xs text-muted-foreground mt-1">
                  From Free to Pro - 1 day ago
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Team member added</p>
                <p className="text-xs text-muted-foreground mt-1">
                  sarah@example.com - 2 days ago
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subscription status */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription Usage</CardTitle>
            <CardDescription>Your Pro plan renews in 14 days</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Storage</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">API Calls</span>
                <span className="text-sm font-medium">72%</span>
              </div>
              <Progress value={72} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Team Members</span>
                <span className="text-sm font-medium">3/5</span>
              </div>
              <Progress value={60} />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
