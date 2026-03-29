import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Briefcase, FileText, Mail, User } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          {/* {stats?.hasProfile
            ? `Welcome back, ${stats.profileName}`
            : "Welcome to Resume Builder"} */}
        </h1>
        <p className="text-gray-600 mt-1">
          Streamline your job applications with professional resumes and cover
          letters.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Link href="/profile">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="py-5">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <User className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Profile</p>
                  {/* <p className="text-lg font-bold text-gray-900">
                    {stats?.hasProfile ? "Complete" : "Not Set"}
                  </p> */}
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/media">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="py-5">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-orange-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Media</p>
                  <p className="text-lg font-bold text-gray-900">
                    {/* {stats?.jobCount || 0} */}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/resume">
          <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
            <CardContent className="py-5">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Playlists</p>
                  <p className="text-lg font-bold text-gray-900">
                    {/* {stats?.resumeCount || 0} */}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <Card>
          <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Recent Activity</h2>
            <Link href="/playlists">
              <Button variant="ghost" size="sm">
                View All <ArrowRight className="h-3 w-3 ml-1" />
              </Button>
            </Link>
          </div>
          <CardContent></CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <CardContent>
            <div className="space-y-3">
              <Link href="/profile" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <User className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {/* {stats?.hasProfile ? "Edit Profile" : "Create Profile"} */}
                    </p>
                    <p className="text-xs text-gray-500">
                      Update your personal information and skills
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="/media" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      View Your Media
                    </p>
                    <p className="text-xs text-gray-500">View Your Media</p>
                  </div>
                </div>
              </Link>
              <Link href="/playtlists" className="block">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Access Playlists
                    </p>
                    <p className="text-xs text-gray-500">
                      Create new, edit, or play playlists
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
